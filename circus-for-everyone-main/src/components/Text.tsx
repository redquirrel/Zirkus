"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function Text() {
  return (
    <div id="intro" className="pt-24 pb-0 md:pt-36 md:pb-24 bg-darkbg static text-center leading-8 w-full mx-auto"> {/* Center and add padding */}
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
    <div className="mb-3 text-lg md:text-xl lg:text-2xl">
      <p className="mb-3">
        Bewegt sein - das bedeutet für mich:
      </p>
      <p className="mb-3">
        Meine Gefühle wahrnehmen.
      </p>
      <p className="mb-3">
        Spüren: Wie will sich mein Körper bewegen?
      </p>
      <p className="mb-3">
        Meinen Körper sprechen lassen.
      </p>
      <p className="mb-3">
        Andere Körper achtsam wahrnehmen.
      </p>
      <p className="mb-3">
        Eine gemeinsame Sprache finden.
      </p>
      <p>
        Miteinander Bewegung wachsen lassen.
      </p>
    </div>
    </motion.div>
    </div>
  );
}