import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Text from "@/components/Text";
import Workshops from "@/components/Workshops";
import Aktuell from "@/components/Aktuell";
import Kontakt from "@/components/Kontakt";
import { navLinks } from '@/app/lib/data';
import { aktuellws } from '@/app/lib/data';


export default function Home() {
  return (
    <div className="bg-darkbg static items-center
    font-[family-name:var(--font-geist-sans)] text-white">
      <Navbar links={navLinks.home}/>
      <Hero />
      <Text />
      <Aktuell aktuellws={aktuellws}/>
      <Workshops />
      <Kontakt />
    </div>
  );
}
