import Image from "next/image"
import { Button } from "./ui/button"
import banner from "@/public/images/Banner.png"
import vector from "@/public/images/Vector.png"
import versace from "@/public/images/brands/versace-logo.png"
import zara from "@/public/images/brands/zara-logo.png"
import gucci from "@/public/images/brands/gucci-logo.png"
import prada from "@/public/images/brands/prada-logo.png"
import calvin from "@/public/images/brands/calvin-klein.png"

const Banner = () => {
    return (
        <div>
            <div className="flex overflow-y-hidden h-[calc(100vh-85px)] bg-[#F2F0F1] px-20 gap-x-12 border border-t-black">
                <div className="w-[50%] items-center justify-center flex flex-col space-y-12">
                    <div className="space-y-8">
                        <h1 className="text-6xl font-bold max-w-xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className="max-w-lg">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <Button className="rounded-full py-4 px-16">Shop Now</Button>
                    </div>
                    <div className="flex gap-x-8">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold">200+</h2>
                            <p className="text-black/60">International Brands</p>
                        </div>

                        <div className="border border-black/10"></div>

                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold">2,000+</h2>
                            <p className="text-black/60">High-Quality Products</p>
                        </div>

                        <div className="border border-black/10"></div>

                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold">30,000+</h2>
                            <p className="text-black/60">Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <Image src={vector} alt="vector" className="absolute top-72" />
                    <Image src={banner} alt="banner" className="items-center" />
                    <Image src={vector} alt="vector" className="absolute top-20 -right-10 w-24" />
                </div>
            </div>
            <div className="bg-black flex gap-24 px-24 py-12 justify-center">
                <Image src={versace} alt="versace" />
                <Image src={zara} alt="zara" />
                <Image src={gucci} alt="gucci" />
                <Image src={prada} alt="prada" />
                <Image src={calvin} alt="calvin-klein" />
            </div>
        </div>
    )
}

export default Banner