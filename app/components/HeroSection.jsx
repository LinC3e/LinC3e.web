import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold'>LinC3e</h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quibusdam.</p>
                    <div>
                        <button className="px-6 py-3 mb-4 w-56 sm:w-fit rounded-full bg-red-700 mr-4 hover:bg-slate-200 hover:text-black">Hire me</button>
                        <button className="px-6 py-3 w-56 sm:w-fit rounded-full bg-red-700 mr-4 hover:bg-slate-200 hover:text-black">Download Cv</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src ="/images/hero-ber.jpg"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={400}
                            height={400}
                            style={{ clipPath: 'circle(50% at 50% 50%)' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;