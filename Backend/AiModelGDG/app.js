require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-3.1-flash-lite-preview", 
    generationConfig: { responseMimeType: "application/json" }
});


let gameSessions = {};

const SYSTEM_PROMPT = `
You are an IPL Akinator. Your goal is to guess an IPL player in 8 questions or fewer.
The user will provide "Yes", "No", or "Maybe".

RULES:
1. Only ask one question at a time.
2. If you are 90% sure or it's the 8th question, provide the player's full name as the guess.
3. You MUST respond in this JSON format:
{
  "type": "question" | "guess",
  "content": "The question text or the player's full official name",
  "questionNumber": number
}
4. Stay focused only on IPL players.
`;



async function getPlayerImage(playerName) {
    
    const formattedName = encodeURIComponent(playerName.trim().replace(/\s+/g, '_'));
    
   
    const config = {
        headers: {
            'User-Agent': 'IPLAkinatorBot/1.0 (mycoolapp@gmail.com)'
        }
    };

    try {
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${formattedName}`;
        
        // 3. Pass the config here
        const response = await axios.get(url, config);

        if (response.data && response.data.thumbnail) {
            return response.data.thumbnail.source; 
        }
        
        return "https://via.placeholder.com/300x400?text=No+Image";
    } catch (error) {
        console.error("Wiki Error:", error.message);
        return "https://via.placeholder.com/300x400?text=Error";
    }
}

app.get("/check", (req, res) => {
    res.send("Akinator Engine Active");
});

app.post('/api/game/start', (req, res) => {
    const sessionId = Date.now().toString();
    gameSessions[sessionId] = {
        history: [{ role: "user", parts: [{ text: SYSTEM_PROMPT }] }],
        questionCount: 0
    };
    
    res.json({ sessionId, message: "Game started! Ready for Question 1." });
});

app.post('/api/game/move', async (req, res) => {
    const { sessionId, userInput } = req.body;
    const session = gameSessions[sessionId];

    if (!session) return res.status(404).json({ error: "Session not found" });

    try {
        session.questionCount++;
        
        session.history.push({ 
            role: "user", 
            parts: [{ text: userInput || "Start the game and ask question 1" }] 
        });

        const chat = model.startChat({ history: session.history });
        const result = await chat.sendMessage("Next move.");
        const responseText = result.response.text();
        
        
        let parsedResponse = JSON.parse(responseText);
        
       
        if (parsedResponse.type === "guess") {
            parsedResponse.imageUrl = await getPlayerImage(parsedResponse.content);
        }

        session.history.push({ 
            role: "model", 
            parts: [{ text: responseText }] 
        });

        res.json(parsedResponse);
    } catch (error) {
        console.error("Game Move Error:", error);
        res.status(500).json({ error: "Failed to process move" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 IPL Akinator running on http://localhost:${PORT}`));