"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Workshops = () => {
  return (
    <div id="workshops" className='flex justify-center items-center md:pt-10 md:pb-10'>
    <div className='max-w-5xl w-full bg-darkbg flex flex-col gap-0 md:flex-row justify-center items-center 
    relative z-20 mb-0 md:mb-12 pt-0 md:pt-28 pb-0 md:pb-20'>

      <div className="flex justify-center items-center md:w-full lg:w-full p-12 pt-10 md:pt-0 lg:p-0 flex-grow flex-shrink">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-[16rem] h-[24rem] md:w-[20rem] md:h-[28rem] border-4 border-gold rounded-3xl overflow-hidden relative">
            <Image
              src="/workshop_kufa-12.jpg"
              alt="Workshop mit Contact Ball"
              fill 
              style={{ objectFit: 'cover' }} 
              className="rounded-3xl"
            />
          </div>
        </motion.div>
      </div>


      <div className="flex flex-col justify-center items-center text-white px-10 md:px-0 pt-16 pb-16 md:py-0 md:pr-16 md:w-full lg:w-full flex-grow flex-shrink">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-center mb-3 xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-semibold pb-8">
            Das mache ich:
          </h1>
          <div className="text-left lg:text-xl sm:text-xl text-lg lg:my-6 my-3">
                <p className="mt-3">Ich biete Kurse für Menschen mit allen Fähigkeiten an.</p>
                <p className="my-3">Es geht darum:</p>
                <p className="my-3">
                    Wir spüren unsere Gefühle und unseren Körper.
                </p>
                <p className="my-3">
                    Wir erzählen Geschichten durch Bewegung.
                </p>
                <p className="my-3">
                    Welche Bewegungen geben uns Kraft und Leichtigkeit?
                </p>
                <p className="my-3">
                    Wenn wir uns begegnen, entsteht etwas Neues.
                </p>
                <p className="my-3">
                    Die Begegnung kann jede:r aktiv gestalten.
                </p>
          </div>
        </motion.div>
      </div>


    </div>
    </div>
  );
};

export default Workshops;