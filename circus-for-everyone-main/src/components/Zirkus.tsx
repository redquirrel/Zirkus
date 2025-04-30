"use client";

import Image from 'next/image';
import React from 'react';


export default function Zirkus() {

    return (
        <div id="zirkus" className='bg-darkbg w-full pb-12 md:pb-18 md:pt-16'>
           
           {/*
            <div className="flex relative justify-center items-center w-full rounded-lg overflow-hidden mx-auto md:pb-8">
                <Image
                    src="/3.jpg"
                    alt="Inklusion"
                    width={1720}
                    height={1500}
                    className="rounded-lg w-full"
                />
            </div>
            */}

            <div className="flex flex-col items-center text-center justify-center pt-24 pb-20 md:pt-16 md:pb-20 
            px-12 md:px-8 lg:px-12 md:mx-6 lg:mx-12 text-white w-full pr-6">
                <div className="text-left lg:text-xl sm:text-xl text-lg">
                    <p className="mb-3">
                        Seit 2018 lerne und arbeite ich im Zirkus Giovanni (Bamberg).
                    </p>
                    <p className="mb-3">
                        Giovanni macht Zirkusprojekte für Kinder und Jugendliche.
                    </p>  
                    <p className="mb-3">Hier habe ich gelernt:</p>
                    <p className="mt-3 font-bold">
                        Zirkus ist ein Ort, wo jede:r genau so sein soll, wie er/sie ist.
                    </p>
                    <p className="mt-3">
                        Denn dadurch bringt er/sie etwas Einzigartiges in die Gemeinschaft.
                    </p>
                    <p className="mt-3">    
                        Jede:r kann etwas neues lernen und daran wachsen.<br />
                    </p>
                    <p>    
                        Jede:r darf sich zeigen und verdient es, gesehen zu werden.
                    </p> 
                </div>
            </div>
        
        </div>
    );
}