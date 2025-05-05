"use client";

import React from 'react';
import { motion } from "framer-motion";
import { aktuellws } from '@/app/lib/data';
import { AktuellwsArray } from '@/app/lib/data';

// type definition for prop
type AktuellProps = {
    aktuellws: AktuellwsArray;
};


export default function Aktuell({ aktuellws }: AktuellProps) {
  return (
    <div id="aktuell" className='flex justify-center items-center pt-16 ld:pt-20 pb-10 md:pb-20'>
      <div className='text-center md:border md:border-gold md:rounded-3xl max-w-5xl w-full p-6'>
        <div className='pt-12 pb-12 md:px-10 bg-darkbg leading-8'>
        <motion.div 
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
                delay: 0.4,
            }}
            viewport={{
                once: true,
            }}   
        >

        <h1 className="text-center mb-3 xl:text-3xl lg:text-3xl md:text-2xl text-xl font-semibold">
            Informationen zu fortlaufendenden Kursen oder Workshops:
        </h1>
        <p className='mb-3 text-lg lg:text-xl pt-2'>
            {/* Iterate through the array and display only the 'none' property */}
            {aktuellws.map((item, index) => (
                <div key={index}>
                    {/* Check if 'none' exists for the current item and display it */}
                    {item.none && <p>{item.none}</p>}
                </div>
            ))}
        </p>


        <h1 className="text-center mb-3 xl:text-3xl lg:text-3xl md:text-2xl text-xl font-semibold pt-16">
            Individuelle Workshops:
        </h1>

        <p className="mb-3 text-lg lg:text-xl pt-2">
            Wenn du möchtest, dass ich einen Workshop für dein Unternehmen, deine Feier oder deine Gruppe gestalte: 
            Kontaktiere mich gerne direkt per <a className="text-red hover:text-contrast cursor-pointer" href="#kontakt">Mail oder Telefon.</a>
        </p>

        <h1 className="text-center mb-3 xl:text-3xl lg:text-3xl md:text-2xl text-xl font-semibold pt-16">
            Lasst euch verzaubern von euch selbst!
        </h1>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
