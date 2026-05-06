export default function FAQ() {
  return (
    <div className="min-h-screen p-8 text-white bg-black">
      <h1 className="text-4xl font-bold mb-4">FAQ</h1>

      <div className="space-y-4">
        <div>
          <h2 className="font-semibold">How does this game work?</h2>
          <p className="text-gray-400">
            It asks Yes/No questions and guesses the IPL player.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Is it AI-based?</h2>
          <p className="text-gray-400">Yes, it uses smart reasoning.</p>
        </div>
      </div>
    </div>
  );
}