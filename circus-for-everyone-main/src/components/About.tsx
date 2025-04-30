"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';


export default function About() {
// bg-gradient-to-br from-[#704427]  to-darkbg
    return (
        <div id="about" className='bg-gradient-to-br from-[#704427] to-darkbg'>
            <div className="w-full relative pb-24 pt-18 md:pt-24 md:pb-28 flex flex-col md:flex-row max-w-6xl mx-auto">

                {/* Image Section */}
                <div className="flex justify-center items-center w-full md:w-1/2 px-6 pt-32 md:pt-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-center items-center w-[20rem] h-[26rem] md:w-[26rem] md:h-[34rem] 
                        border-4 border-gold rounded-3xl overflow-hidden mx-auto md:ml-12">
                            <Image
                                src="/SofieohneRolli.jpg"
                                alt="Sofie beim Training"
                                width={620}
                                height={700}
                                className="rounded-3xl"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-center pt-16 text-white w-full md:w-1/2 
                px-6 md:px-8 lg:px-12 md:mx-6 lg:mx-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-center mb-3 xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-semibold">
                            Über mich
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center lg:text-xl sm:text-xl text-lg lg:my-6 my-2 mb-5">
                            <p className="mb-3">
                                Mein Name ist Sofie Lorenz.
                            </p>
                            <p className="mb-3">
                                Ich liebe es, mich zu bewegen.
                            </p>
                            <p className="mb-3">   
                                Beim Tanzen kann ich alles andere
                            </p> 
                            <p className="mb-3">
                                um mich herum vergessen.
                            </p>
                            <p className="mb-3">
                                Ich kann dann gut spüren:
                            </p>
                            <p className="mb-3">
                                Ich bin am Leben!
                            </p>
                            <p className="mb-3">
                                Und das Leben ist so Vieles...
                            </p>
                            <p className="mb-3">
                                Mein Körper erzählt gerne Geschichten
                            </p>
                            <p>
                                und probiert neue Bewegungen aus.
                            </p>
                        </div>
                    </motion.div>
                </div>
        
                
            </div>
        </div>
    );
}