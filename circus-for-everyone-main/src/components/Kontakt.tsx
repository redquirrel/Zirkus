"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Kontakt() { 
    return (
<div id="kontakt" className="relative text-white w-full mt-8 md:mt-0">
    {/* Image Container */}
    <div className="z-0 overflow-hidden">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
        >
            <Image    
                src="/workshop_kufa-1.jpg"
                alt="Background Image"
                width={1920}
                height={1600}
                className="object-cover max-w-full pt-8 md:pt-0 bg-black opacity-50 md:opacity-80 transition-opacity duration-300 ease-in-out"
            />
        </motion.div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-40 flex justify-center">
            <div className="flex flex-col justify-center items-center h-full">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="font-semibold text-xl md:text-2xl lg:text-3xl text-white text-center 
                    relative bottom-20 md:bottom-36 lg:bottom-52 xl:bottom-72 backdrop-blur-sm">
                        <p className="mb-2">Kontakt</p>
                        <p className="mb-2">bewegt.sein@posteo.de</p>
                        <p>+49 1578 9179 946</p>
                    </div>
                </motion.div> 
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="text-lg text-white relative top-14 md:top-36 lg:top-52 xl:top-72 cursor-pointer hover:text-contrast backdrop-blur-sm">
                        <Link href="/impressum">Impressum, Datenschutz, Kontakt</Link>
                    </div>
                </motion.div>
            </div>
        </div>

    </div>
</div>
    );
}