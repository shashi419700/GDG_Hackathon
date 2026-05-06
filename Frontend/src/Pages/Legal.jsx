import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Legal() {
  return (
    <>
      <Header />

      <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">
            Legal Information
          </h1>

          {/* Content */}
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              This project is created for educational and demonstration purposes
              only.
            </p>

            <p>
              We do not claim ownership of any official cricket data or
              trademarks. All related content belongs to their respective
              owners.
            </p>

            <p>
              The Indian Premier League (IPL) is a trademark of the Board of
              Control for Cricket in India (BCCI).
            </p>

            <p>
              This application is not affiliated with or endorsed by any
              official organization.
            </p>

            <p>
              By using this application, you agree that all information provided
              is for learning and entertainment purposes only.
            </p>
          </div>
        </div>
      <Footer />
      </div>
    </>
  );
}
