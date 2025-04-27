
/** @jsx h */
import { h } from "https://esm.sh/preact@10.13.2";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <div class="flex flex-col min-h-screen bg-[#0f0f1a] text-white">
      <Navbar />
      <main class="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h1 class="text-5xl font-bold mb-4 text-purple-300 animate-fade-in">Hi, I'm Noctus</h1>
        <p class="text-xl text-gray-400 animate-fade-in-slow">I like to use JS, PY, C#, HTML</p>
      </main>
      <Footer />
    </div>
  );
}
