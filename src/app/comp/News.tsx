import Image from "next/image"

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
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-3">
                    <NewsPost post={newsPosts[0]} />
                </div>
                {newsPosts.slice(1).map((post, index) => (
                    <NewsPost key={index} post={post} />
                ))}
            </div>

            <div className="flex justify-center my-6">
                <div className="cursor-pointer uppercase text-[12px] rounded-xl px-[10px] py-[2px] bg-[#494554] hover:bg-[#615C70] transition w-fit">See more news</div>
            </div>
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

function NewsPost({ post }: NewsStruct) {
    return (
        <div className="group cursor-pointer relative">
            <div className="absolute top-[4%] right-[1%] bg-[#18171c80] px-[20px] py-[5px] rounded-xl">
                <p className="font-bold text-[10px]">{post.date}</p>
            </div>

            <Image
                alt="alt"
                src={post.imageSrc}
                width={1000}
                height={160}
                style={{
                    height: "160px",
                    width: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.75rem",
                    borderTopRightRadius: "0.75rem",
                }}
            />

            <div className="bg-[#302e38] px-[15px] py-[10px] rounded-b-xl group-hover:bg-[#3D3946] transition">
                <p className="font-bold">{post.title}</p>
                <p className="text-sm">by <span className="font-semibold">{post.author}</span></p>
            </div>
        </div>
    );
}