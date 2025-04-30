
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import { navLinks } from '@/app/lib/data';

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
         <Navbar  links={navLinks.about}/>      
        {children}
      </div>
  );
}
