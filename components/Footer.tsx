
/** @jsx h */
import { h } from "https://esm.sh/preact@10.13.2";

export default function Footer() {
  return (
    <footer class="flex flex-col items-center justify-center py-6 bg-[#1a1a2e] text-gray-400 mt-8">
      <div class="flex space-x-6 mb-4">
        <a href="https://instagram.com/" target="_blank" class="hover:text-purple-400 transition">
          <img src="/instagram.svg" alt="Instagram" class="w-6 h-6" />
        </a>
        <a href="https://discord.com/" target="_blank" class="hover:text-purple-400 transition">
          <img src="/discord.svg" alt="Discord" class="w-6 h-6" />
        </a>
      </div>
      <p class="text-sm">&copy; 2025 Noctus. All rights reserved.</p>
    </footer>
  );
}
