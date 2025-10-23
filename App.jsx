import React from "react";
import { Header } from "./components/Header";
import { VotePanel } from "./components/VotePanel";
import { PlayerPanel } from "./components/PlayerPanel";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0014] to-[#18002c] text-white font-sans">
      <Header />
      <main className="flex flex-col lg:flex-row gap-6 px-4 md:px-10 py-6">
        <section className="lg:w-2/3">
          <VotePanel />
        </section>
        <aside className="lg:w-1/3">
          <PlayerPanel />
        </aside>
      </main>
      <Footer />
    </div>
  );
}
