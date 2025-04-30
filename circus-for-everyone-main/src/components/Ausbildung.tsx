"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';


export default function Ausbildung() {

    return (
        <div id="ausbildung" className='w-full bg-gradient-to-br from-[#704427] to-darkbg flex items-center'>
            <div className="relative pb-24 pt-18 md:pt-24 md:pb-28 lg:pb-44 flex flex-col md:flex-row max-w-6xl mx-auto justify-center items-center">

                {/* Text Section */}
                <div className="flex flex-col justify-center items-center pt-20 md:pt-12 text-white w-full md:w-1/2 
                px-12 md:pl-12 md:pr-2 lg:pl-12 lg:pr-2 md:ml-6 md:mr-1 lg:ml-12 lg:mr-2">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-center mb-3 xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-semibold mb-3">
                            Ausbildung
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-left lg:text-xl sm:text-xl text-lg my-4 md:ml-5 mr-5">
                            <div className="mb-5">
                                <p className="mb-3">Im Zentrum für bewegte Kunst (Berlin) habe ich gelernt:</p>
                                <p className="mt-3">
                                    Wie können Menschen gemeinsam Bewegungen erforschen und erfinden?
                                </p>
                                <p className="mt-3">
                                    Wie lernen wir alle etwas Neues über uns und unseren Körper?
                                </p>
                                <p className="mt-3">
                                    Wie können wir uns begegnen und gut in Kontakt mit uns selbst sein?
                                </p>
                                <p className="mt-3">
                                    Diese Fragen sind wichtig für meine Arbeit.
                                </p>
                                <p className="mt-3">
                                    Sie bestimmen, wie ich meine Kurse gestalte.
                                </p>
                            </div>
                            <p className="pt-3">
                                Das Zentrum für bewegte Kunst (Berlin):<br />
                                <a href='https://www.zbk-berlin.de/das-machen-wir/in-zirque-weiterbildung'>
                                https://www.zbk-berlin.de/das-machen-wir/in-zirque-weiterbildung/</a><br />
                            </p>
                        </div>
                    </motion.div>
                </div>

{/* Image Section */}
                <div className="flex justify-center items-center w-full md:w-1/2 pt-32 md:pt-24 md:pr-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-center items-center w-[20rem] h-[26rem] md:w-[26rem] md:h-[34rem] 
                        border-4 border-gold rounded-3xl overflow-hidden md:ml-12">
                            <Image
                                src="/workshop_kufa-14.jpg"
                                alt="Workshop"
                                width={620}
                                height={700}
                                className="rounded-3xl"
                            />
                        </div>
                    </motion.div>
                </div>
        
                
            </div>
        </div>
    );
}