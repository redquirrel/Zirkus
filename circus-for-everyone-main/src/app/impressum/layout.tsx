import Link from "next/link";
import Image from "next/image";

export default function ImpressumLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className='bg-darkbg w-full'>
           <Link className="fixed top-3 md:top-5 lg:top-6 left-3 md:left-6 lg:left-8 z-50 bg-gradient-to-l from-red to-darkbg py-2 pl-2  pr-5 flex items-center gap-2
            text-white font-semibold rounded-full hover:scale-105 hover:text-contrast 
            transition-all cursor-pointer border border-gold" href="/">
                <Image
                    src="/contactball.png" 
                    alt="contact ball" 
                    width={55} 
                    height={40} 
                    className='hover:scale-105 transition-shadow'
                />
                    <div className='py-3 hover:text-contrast'>Home</div>
            </Link>      
          {children}
        </div>
    );
  }