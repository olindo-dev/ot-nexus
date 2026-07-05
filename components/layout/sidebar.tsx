import { Brain, Camera, FileText, Home, Image, Mic, Search, Settings } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
  },
  {
    title: "AI Chat",
    icon: Brain,
  },
  {
    title: "Voice",
    icon: Mic,
  },
  {
    title: "Camera",
    icon: Camera,
  },
  {
    title: "Images",
    icon: Image,
  },
  {
    title: "PDF",
    icon: FileText,
  },
  {
    title: "Research",
    icon: Search,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 text-white">

      <div className="border-b border-slate-800 px-6 py-8">
        <h1 className="text-3xl font-bold">OT Nexus</h1>

        <p className="mt-2 text-sm text-slate-400">
          AI Occupational Therapy Platform
        </p>
      </div>

      <nav className="flex-1 px-4 py-6">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-slate-900"
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </button>
          );
        })}

      </nav>

      <div className="border-t border-slate-800 p-5">

        <div className="rounded-xl bg-slate-900 p-4">

          <p className="font-semibold">
            OT Nexus
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Version 1.0
          </p>

        </div>

      </div>

    </aside>
  );
}