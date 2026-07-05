export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">

      <div>

        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-sm text-slate-400">
          Welcome back to OT Nexus
        </p>

      </div>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search anything..."
          className="w-80 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition">
          AI Chat
        </button>

      </div>

    </header>
  );
}