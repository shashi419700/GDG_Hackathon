export default function ProgressBar({ step, total }) {
  const percent = ((step + 1) / total) * 100;

  return (
    <div className="w-full max-w-xl mt-6">
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-sm text-gray-400 mt-2 text-center">
        Question {step + 1} / {total}
      </p>
    </div>
  );
}