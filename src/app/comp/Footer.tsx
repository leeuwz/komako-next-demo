'use client';
import Image from "next/image"

interface FooterProps {
    className?: string;
}

export default function Footer({}: FooterProps) {
    return(
        <div className="" style={{ backgroundImage: 'url(/assets/bg-dark.png)', }}>
            <div className="max-w-[1000px] mx-auto">
                <div>
                    {/* footer site map */}
                    <div className="grid grid-cols-1 md:grid-cols-3 m-[35px] flex gap-[10px] max-w-[800px] mx-auto text-[12px] md:text-sm">
                       <div className="flex flex-col items-center md:items-start">
                           <p className="font-bold text-[13px] md:text-[15px]">General</p>
                           <p>Home</p>
                           <p>Changelog</p>
                           <p>Beatmap Listing</p>
                           <p>Download osu!</p>
                       </div>
                       <div className="flex flex-col items-center md:items-start">
                           <p className="font-bold text-[13px] md:text-[15px]">Help & Community</p>
                           <p>Frequently Asked Questions</p>
                           <p>Community Forums</p>
                           <p>Live Streams</p>
                           <p>Wiki</p>
                       </div>
                       <div className="flex flex-col items-center md:items-start">
                           <p className="font-bold text-[13px] md:text-[15px]">Legal & Status</p>
                           <p>Terms</p>
                           <p>Privacy</p>
                           <p>Server Status</p>
                           <p>Source Code</p>
                       </div>
                    </div>

                    {/* support/social */}
                    <div className="flex gap-4 justify-center">
                        <div className="flex items-center border-[3px] rounded-full p-[8px] cursor-pointer"
                        onClick={() => window.open("https://paypal.me/leeuwz", "_blank")}>
                            <Image
                                src="/icons/heart.svg"
                                alt="alt"
                                width={24}
                                height={24}
                                className="invert"
                            />
                        </div>
                        <div className="flex items-center border-[3px] rounded-full p-[8px] cursor-pointer"
                        onClick={() => window.open("https://x.com/lionzosu", "_blank")}>
                            <Image
                                src="/icons/twitter.svg"
                                alt="alt"
                                width={24}
                                height={24}
                                className="invert"
                            />
                        </div>
                    </div>

                    {/* powered by */}
                    <div className="flex justify-center py-[20px]">
                        <p className="font-bold text-sm">lionz powered 2022-2025</p>
                    </div>
                </div>
            </div>
        </div>
    )
}