
/** @jsx h */
import { h } from "https://esm.sh/preact@10.13.2";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function About() {
  return (
    <div class="flex flex-col min-h-screen bg-[#0f0f1a] text-white">
      <Navbar />
      <main class="p-8 flex-1">
        <h2 class="text-4xl font-bold text-purple-300 mb-6">About Me</h2>
        <p class="text-lg text-gray-400 leading-relaxed">
          Hi! I'm Noctus. I am passionate about creating web applications and learning new technologies.  
          My favorite languages include JavaScript, Python, C#, and HTML.
        </p>
      </main>
      <Footer />
    </div>
  );
}
