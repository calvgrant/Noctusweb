
/** @jsx h */
import { h } from "../deps.ts";

export default function Navbar() {
  return (
    <nav class="flex justify-between items-center p-4 bg-[#1a1a2e] text-white shadow-md">
      <div class="text-2xl font-bold hover:text-purple-400 transition">Noctus</div>
      <div class="space-x-6 text-lg">
        <a href="/" class="hover:text-purple-400 transition">Home</a>
        <a href="/about" class="hover:text-purple-400 transition">About</a>
        <a href="/project" class="hover:text-purple-400 transition">Projects</a>
      </div>
    </nav>
  );
}
