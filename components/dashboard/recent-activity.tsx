const activities = [
  {
    title: "AI Chat",
    description: "Asked about Bobath Concept",
    time: "2 min ago",
  },
  {
    title: "PDF Analysis",
    description: "Stroke Rehabilitation.pdf summarized",
    time: "10 min ago",
  },
  {
    title: "Camera Analysis",
    description: "Upper limb posture analyzed",
    time: "25 min ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((item) => (
          <div
            key={item.title + item.time}
            className="flex items-center justify-between border-b border-slate-800 pb-4 last:border-none"
          >
            <div>
              <h3 className="font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400">
                {item.description}
              </p>
            </div>

            <span className="text-sm text-slate-500">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}