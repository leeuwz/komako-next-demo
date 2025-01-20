'use client';
import { useState } from 'react';
import Image from "next/image";

export default function Hero() {

    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className="relative bg-transparant">
            <video
            className="absolute z-[-1] inset-0 bg-center object-cover w-full h-full md:rounded-xl"
            autoPlay
            loop
            muted
            >
            <source src="/assets/heroBg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>

            <div className="relative flex flex-col items-end items-center md:items-end justify-center px-[25px] md:px-[50px] gap-4 bg-[#18171c] bg-opacity-50 rounded-xl overflow-hidden" style={{ minHeight: "400px" }}>
                <Image
                    src="/assets/mascot.png"
                    alt=""
                    width={400}
                    height={400}
                    className="absolute top-0 left-0 hidden md:flex select-none pointer-events-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                />

                <div className="text-center md:text-end">
                    <p className="text-[40px] sm:text-5xl font-bold">komako</p>
                    <p className="text-lg sm:text-xl">A renewed way to experience osu</p>
                    <p className="text-lg text-[#f6a] leading-5">
                    with the classic system you love!
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 select-none">
                    <div className="cursor-pointer rounded bg-[#7E8FAF] w-fit py-[10px] px-[10px] flex gap-[8px] hover:bg-[#B8C5DD] transition items-center"
                    onClick={() => setShowModal(true)}>
                    <Image
                        src="/icons/info.svg"
                        alt="alt"
                        width={22}
                        height={22}
                        className="invert"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                    />
                    <p className="font-bold text-base md:text-lg">Info</p>
                    </div>
                        
                    <div className="cursor-pointer rounded bg-[#5639AC] w-fit py-[10px] px-[10px] flex gap-[8px] hover:bg-[#8c66ff] transition items-center"
                    onClick={() => alert("Will be added soon!")}>
                        <Image
                            src="/icons/discord.svg"
                            alt="alt"
                            width={22}
                            height={22}
                            className="invert"
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                        />
                        <p className="font-bold text-base md:text-lg">Discord</p>
                    </div>

                    <div className="cursor-pointer rounded bg-[#c2266b] w-fit py-[10px] px-[10px] flex gap-[8px] hover:bg-[#f6a] transition items-center"
                    onClick={() => alert("This will be added later, this site serves purely as a proof of concept.")}>
                        <Image
                            src="/icons/login.svg"
                            alt="alt"
                            width={22}
                            height={22}
                            className="invert"
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                        />
                        <p className="font-bold text-base md:text-lg">Sign up</p>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed p-4 lg:p-0 inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity z-50" onClick={() => setShowModal(false)}>
                    <div className="bg-[#303033] p-4 md:p-8 rounded-lg shadow-lg max-w-[850px] w-full flex" onClick={(e) => e.stopPropagation()}>
                        <div className="w-1/4 pr-4 border-r border-gray-600 hidden lg:block">
                            <div className='bg-[#4a6267] p-1 rounded-lg mb-2 flex gap-4 justify-center'>
                                <p className="cursor-pointer font-bold">2025</p>
                                <p className="cursor-pointer font-bold text-gray-400 hover:underline">2024</p>
                                <p className="cursor-pointer font-bold text-gray-400 hover:underline">2023</p>
                            </div>
                            <ul className="space-y-2">
                                <li className="cursor-pointer hover:underline">Introducing komako...</li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-3/4 pl-4 overflow-y-scroll max-h-[450px] md:max-h-[600px] pr-5">
                            <div className='relative'>
                                <div className="absolute top-[4%] right-[1%] bg-[#18171c80] px-[20px] py-[5px] rounded-xl">
                                    <p className="font-bold text-[10px]">19 JAN 2025</p>
                                </div>
                                <Image 
                                    src="/assets/news-1.png"
                                    alt=""
                                    width={1000}
                                    height={160}
                                    className='rounded-xl'
                                    style={{
                                        height: "120px",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                    draggable={false}
                                    onContextMenu={(e) => e.preventDefault()}
                                    sizes="(min-width: 768px) 160px, 120px"
                                />
                            </div>
                            <p className="text-2xl font-bold mt-4">Introducing komako, what can you expect.</p>
                            <p className='text-base'>by <span className='font-bold'>komako team</span></p>
                            <p className='my-4'>
                                At Komako, we’re driven by a vision: to address the challenges we see in osu! today and breathe
                                new life into the experience. From the steady decline in quality to questionable changes in the
                                reward system, we felt it was time to create something that offers players a new and improved
                                way to enjoy the game.
                            </p>
                            <p className='my-4'>
                                This idea stemmed from personal frustrations and conversations with friends who
                                shared my sentiments. When they suggested that my existing private server could become
                                something more, I knew this project had the potential to bring our collective vision to life.
                            </p>
                            <p className='font-bold text-lg'>Design and Inspiration</p>
                            <p className='mb-4'>
                                Our goal is to evolve the look and feel of Komako with inspiration from the original.
                                Expect a clean and modern look with outstanding features.
                            </p>
                            <p className='font-bold text-lg'>Why Komako?</p>
                            <p className='mb-4'>
                                Our aim is not to compete with Bancho but to provide an alternative—a space for players who
                                prefer the old reward system and want to relive what we consider osu!’s golden days.
                                But we’re not just looking back; we’re also moving forward.
                            </p>
                            <div className='my-4'>
                                <p>At Komako, we strive to introduce:</p>
                                <ol className='pl-5'>
                                    <li style={{ listStyleType: 'disc' }}><span className='font-bold'>New features</span> previously unseen on the official server.</li>
                                    <li style={{ listStyleType: 'disc' }}><span className='font-bold'>Customizability</span> options to let players tailor their experience.</li>
                                    <li style={{ listStyleType: 'disc' }}><span className='font-bold'>Innovative challenges</span> to reignite the thrill of competition.</li>
                                </ol>
                            </div>
                            <p className='my-4'>
                                This is a community-first project for anyone who shares our passion for osu! and wants to
                                rediscover the joy of playing. At its heart, it’s about having fun and bringing people
                                together through the game we all love.
                            </p>
                            <p className='my-4'>
                                As a software developer balancing this project with my full-time job, I kindly ask for
                                your patience as we work to deliver on these promises. Your support and excitement mean
                                the world to us.
                            </p>
                            <p className='my-4'>Together, let’s create something truly special.</p>
                            <p className='mb-4 font-bold'>Lionz at Komako.</p>
                            <button
                                className="bg-[#7E8FAF] hover:bg-[#B8C5DD] text-white px-2 py-1 rounded font-bold text-sm"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}