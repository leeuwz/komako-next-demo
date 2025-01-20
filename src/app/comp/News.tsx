'use client';
import Image from "next/image"
import { useState } from 'react';

// add function open post page based on index/post id

const newsPosts = [
    {
        date: "19 JAN 2025",
        imageSrc: "/assets/news-1.png",
        title: "Introducing komako, what can you expect.",
        author: "komako team"
    },
    {
        date: "19 JAN 2025",
        imageSrc: "/assets/news-2.png",
        title: "New features coming soon.",
        author: "komako team"
    },
    {
        date: "19 JAN 2025",
        imageSrc: "/assets/news-3.png",
        title: "New features coming soon.",
        author: "komako team"
    },
    {
        date: "19 JAN 2025",
        imageSrc: "/assets/news-4.png",
        title: "New features coming soon.",
        author: "komako team"
    }
];

export default function News() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:px-0">
                <div className="col-span-1 md:col-span-3">
                    <NewsPost post={newsPosts[0]} setShowModal={setShowModal} />
                </div>
                {newsPosts.slice(1).map((post, index) => (
                    <NewsPost key={index} post={post} setShowModal={setShowModal} />
                ))}
            </div>

            <div className="flex justify-center my-6">
                <div className="cursor-pointer uppercase text-[12px] rounded-xl px-[10px] py-[2px] bg-[#494554] hover:bg-[#615C70] transition w-fit"
                onClick={() => alert("Will be added soon!")}>
                    See more news
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
                                    className='rounded-xl select-none'
                                    style={{
                                        height: "120px",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                    sizes="(min-width: 768px) 160px, 120px"
                                    draggable={false}
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </div>
                            <p className="text-2xl font-bold mt-4">Introducing komako, what can you expect.</p>
                            <p className='text-base'>by <span className='font-bold'>komako team</span></p>
                            <p className='my-4'>
                                At Komako, we’re driven by a vision: to address the challenges we see in osu! today and breathe
                                new life into the experience. From the decline in quality to questionable changes in the
                                reward system, we felt it was time to create something that offers players a different/classic
                                way to enjoy the game.
                            </p>
                            <p className='my-4'>
                                This idea stemmed from personal frustrations and conversations with friends who
                                shared the same feelings. When they suggested that my existing private server could become
                                something more, I knew this project might be a fun idea.
                            </p>
                            <p className='font-bold text-lg'>Design and Inspiration</p>
                            <p className='mb-4'>
                                Our goal is to evolve the look and feel of Komako with inspiration from the original.
                                Expect a clean and modern look with outstanding features.
                            </p>
                            <p className='font-bold text-lg'>Why Komako?</p>
                            <p className='mb-4'>
                                Our goal/motive is not to compete with Bancho but to provide an alternative experience for players who
                                prefer the old reward system and rather take a step back from having to perform or to try something completely different.
                                But we’re not just looking back; we’re also moving forward.
                            </p>
                            <div className='my-4'>
                                <p>At Komako, we strive to introduce:</p>
                                <ol className='pl-5'>
                                    <li style={{ listStyleType: 'disc' }}><span className='font-bold'>New features</span> previously unseen on the official server.</li>
                                    <li style={{ listStyleType: 'disc' }}><span className='font-bold'>Customizability</span> options to let players tailor their experience.</li>
                                    <li style={{ listStyleType: 'disc' }}><span className='font-bold'>Innovative challenges</span> take things to a higher level.</li>
                                </ol>
                            </div>
                            <p className='my-4'>
                                This is a community-first project for anyone who shares our passion for osu! and who prefer
                                this way of play. At its heart, it’s about having fun.
                            </p>
                            <p className='my-4'>
                                As a software developer balancing this project with my full-time job, I kindly ask for
                                your patience as we work to deliver on these promises. Your support and excitement mean
                                the world to us.
                            </p>
                            {/* <p className='my-4'>Together, let’s create something truly special.</p> */}
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

interface NewsStruct {
    post: {
        date: string;
        imageSrc: string;
        title: string;
        author: string;
    };
}

interface NewsPostProps extends NewsStruct {
    setShowModal: (value: boolean) => void;
}

function NewsPost({ post, setShowModal }: NewsPostProps) {
    return (
        <div className="group cursor-pointer relative" onClick={() => setShowModal(true)}>
            <div className="absolute top-[4%] right-[1%] bg-[#18171c80] px-[20px] py-[5px] rounded-xl">
                <p className="font-bold text-[10px]">{post.date}</p>
            </div>

            <Image
                alt="alt"
                src={post.imageSrc}
                width={1000}
                height={160}
                className="select-none"
                style={{
                    height: "160px",
                    width: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.75rem",
                    borderTopRightRadius: "0.75rem",
                }}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
            />

            <div className="bg-[#302e38] px-[15px] py-[10px] rounded-b-xl group-hover:bg-[#3D3946] transition">
                <p className="font-bold">{post.title}</p>
                <p className="text-sm">by <span className="font-semibold">{post.author}</span></p>
            </div>
        </div>
    );
}