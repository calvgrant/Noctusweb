
/** @jsx h */
import { h } from "../deps.ts";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function Project() {
  return (
    <div class="flex flex-col min-h-screen bg-[#0f0f1a] text-white">
      <Navbar />
      <main class="p-8 flex-1">
        <h2 class="text-4xl font-bold text-purple-300 mb-6">Projects</h2>
        <div class="space-y-6">
          <div class="bg-[#1a1a2e] p-6 rounded-lg hover:bg-purple-700 transition">
            <h3 class="text-2xl font-semibold mb-2">My Portfolio Website</h3>
            <p class="text-gray-400">A personal site built with Deno Fresh to showcase my works and skills.</p>
          </div>
          <div class="bg-[#1a1a2e] p-6 rounded-lg hover:bg-purple-700 transition">
            <h3 class="text-2xl font-semibold mb-2">Discord Bot Project</h3>
            <p class="text-gray-400">Building advanced Discord bots using Python and Node.js!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
