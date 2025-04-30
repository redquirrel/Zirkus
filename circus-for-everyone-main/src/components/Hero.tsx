"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() { 

    return (
        <div id="home" className="text-white w-full h-full mt-16 static overflow-hidden">
          {/* Hero Image Container */}
          <div className="relative inset-0 z-0 flex justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Image    
                src="/workshop_kufa-22.jpg"
                alt="Background Image"
                width={1920}  
                height={1600} 
                className="object-cover w-full h-full max-w-full bg-black opacity-60 md:opacity-90 transition-opacity duration-300 ease-in-out"
              />
            </motion.div>
          </div>
      
          {/* Overlay Content */}
          <div className="absolute top-28 md:top-20 lg:top-20 left-1/2 transform -translate-x-1/2 md:py-20 h-full flex flex-col items-center text-center">
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <div className="backdrop-blur-sm">
                <motion.h1 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                  Bewegt.Sein
                </motion.h1>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="font-semibold text-lg md:text-2xl lg:text-3xl text-white mb-8 mt-2 md:mt-3 lg:mt-4 md:pb-6 backdrop-blur-sm">
                Inklusive Kurse für Tanz <br />
                und Bewegungskünste
              </p>


              <Link
                href="#aktuell"
                className="inline-block px-6 py-3 md:px-7 md:py-4 lg:px-10 lg:py-6 text-lg font-semibold text-white hover:text-contrast rounded-full 
                bg-gradient-to-tr from-red to-darkbg hover:bg-white border border-gold transition duration-300 hover:scale-110"
              >
                Aktuelle Kurse
              </Link>



            </motion.div>
          </div>
    </div>
    );
}