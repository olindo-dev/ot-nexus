import {
  Brain,
  Camera,
  FileText,
  Mic,
  Search,
  Image as ImageIcon,
  Activity,
  BookOpen,
} from "lucide-react";

import FeatureCard from "./feature-card";

const features = [
  {
    title: "AI Assistant",
    description: "Ask any Occupational Therapy question instantly.",
    icon: <Brain size={28} />,
  },
  {
    title: "Voice Assistant",
    description: "Talk naturally in Bangla, English and Hindi.",
    icon: <Mic size={28} />,
  },
  {
    title: "Live Camera",
    description: "Analyze patients, posture and movement in real time.",
    icon: <Camera size={28} />,
  },
  {
    title: "Image Analysis",
    description: "Upload clinical images for AI interpretation.",
    icon: <ImageIcon size={28} />,
  },
  {
    title: "PDF Assistant",
    description: "Read, summarize and explain OT documents.",
    icon: <FileText size={28} />,
  },
  {
    title: "Research",
    description: "Search evidence-based OT resources.",
    icon: <Search size={28} />,
  },
  {
    title: "Clinical Tools",
    description: "Assessment scales and intervention guides.",
    icon: <Activity size={28} />,
  },
  {
    title: "Learning Hub",
    description: "Learn OT concepts from beginner to expert.",
    icon: <BookOpen size={28} />,
  },
];

export default function DashboardGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
}