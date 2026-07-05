import { Brain, Camera, FileText, Mic, Search, Plus } from "lucide-react";

const actions = [
  {
    title: "New AI Chat",
    icon: Brain,
  },
  {
    title: "Voice Assistant",
    icon: Mic,
  },
  {
    title: "Open Camera",
    icon: Camera,
  },
  {
    title: "Upload PDF",
    icon: FileText,
  },
  {
    title: "Research",
    icon: Search,
  },
  {
    title: "New Project",
    icon: Plus,
  },
];

export default function QuickActions() {
  return (
    <div className="mt-10">
      <h2 className="mb-5 text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800"
            >
              <Icon className="mb-4 text-blue-500" size={28} />

              <p className="font-medium text-white">
                {action.title}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}