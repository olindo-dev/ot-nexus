import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="flex h-screen bg-slate-950">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <section className="flex-1 overflow-y-auto p-8">
          {children}
        </section>
      </div>
    </main>
  );
}