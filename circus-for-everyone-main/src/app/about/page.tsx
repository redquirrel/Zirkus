'use client';

import About from "@/components/About";
import Zirkus from "@/components/Zirkus";
import Ausbildung from "@/components/Ausbildung";
import Kontakt from "@/components/Kontakt";


export default function AboutPage() {
  return (
    <div className="bg-darkbg relative
    font-[family-name:var(--font-geist-sans)] text-white">
      <About />
      <Zirkus />
      <Ausbildung />
      <Kontakt />
     
    </div>
  );
}