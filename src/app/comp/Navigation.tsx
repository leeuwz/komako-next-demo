import Image from "next/image"

export default function Navigation() {
    return (
        <div className="flex justify-between">
            <div className="flex text-[12px] gap-5 my-[30px] mx-[20px]">
                <a href="" className="hover:text-[#f6a] transition">start</a>
                <a href="" className="hover:text-[#f6a] transition">beatmaps</a>
                <a href="" className="hover:text-[#f6a] transition">rankings</a>
                <a href="" className="hover:text-[#f6a] transition">community</a>
                <a href="" className="hover:text-[#f6a] transition">store</a>
                <a href="" className="hover:text-[#f6a] transition">help</a>
                <div className="flex gap-[6px] items-center"> {/* dropdown on hover */}
                    <Image
                    alt="alt"
                    width={16}
                    height={100}
                    src="/assets/uk.svg" />
                    <a href="" className="hover:text-[#f6a] transition">english</a>
                </div>
            </div>
            <div className="text-[12px] gap-5 my-[30px] mx-[20px] ml-auto">
                <a href="" className="hover:text-[#f6a] transition">sign in</a>
            </div>
        </div>
    )
}
