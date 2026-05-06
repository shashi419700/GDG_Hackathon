import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Header />

      <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-yellow-500/20 shadow-xl">
          {/* Title */}
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">
            Terms & Conditions
          </h1>

          {/* Content */}
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              By accessing and using this application, you accept and agree to
              be bound by the terms and conditions described below.
            </p>

            <h2 className="text-xl font-semibold text-white">1. Usage</h2>
            <p>
              This application is intended for educational and entertainment
              purposes only. You agree not to misuse the platform or attempt to
              disrupt its functionality.
            </p>

            <h2 className="text-xl font-semibold text-white">
              2. Intellectual Property
            </h2>
            <p>
              All content, logos, and trademarks related to cricket and IPL
              belong to their respective owners. This project does not claim
              ownership of any official data.
            </p>

            <h2 className="text-xl font-semibold text-white">
              3. Limitation of Liability
            </h2>
            <p>
              We are not responsible for any inaccuracies in the AI predictions
              or any consequences resulting from the use of this application.
            </p>

            <h2 className="text-xl font-semibold text-white">
              4. Changes to Terms
            </h2>
            <p>
              We reserve the right to update or modify these terms at any time
              without prior notice.
            </p>

            <h2 className="text-xl font-semibold text-white">5. Acceptance</h2>
            <p>
              By continuing to use this application, you confirm that you have
              read and agreed to these terms and conditions.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
