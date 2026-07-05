export default function WelcomeBanner() {
  return (
    <div className="mb-8 rounded-3xl border border-slate-800 bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white">
      <h1 className="text-4xl font-bold">
        Welcome to OT Nexus
      </h1>

      <p className="mt-4 max-w-3xl text-blue-100">
        Your intelligent Occupational Therapy workspace. Learn, research,
        analyze images, discuss clinical cases, understand anatomy, summarize
        PDFs, and receive evidence-based guidance powered by AI.
      </p>
    </div>
  );
}