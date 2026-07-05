import AppLayout from "@/components/layout/app-layout";
import WelcomeBanner from "@/components/dashboard/welcome-banner";
import DashboardGrid from "@/components/dashboard/dashboard-grid";
import QuickActions from "@/components/dashboard/quick-actions";
import RecentActivity from "@/components/dashboard/recent-activity";

export default function HomePage() {
  return (
    <AppLayout>
      <WelcomeBanner />

      <DashboardGrid />

      <QuickActions />

      <RecentActivity />
    </AppLayout>
  );
}