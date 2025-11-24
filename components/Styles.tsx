import casual from "@/public/images/styles/casual.png"
import formal from "@/public/images/styles/formal.png"
import party from "@/public/images/styles/party.png"
import gym from "@/public/images/styles/gym.png"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"


const Styles = () => {
    return (
        <div className="px-24 h-screen">
            <div className="p-16 bg-[#F0F0F0] rounded-4xl space-y-16">
                <h2 className="uppercase text-5xl font-bold text-center">Browse By Dress Style</h2>
                <div className="grid grid-cols-3 gap-5">
                    {/* casual card */}
                    <Card className="p-0 relative w-full h-64">
                        <CardHeader className="absolute text-4xl font-bold top-6">
                            <CardTitle>Casual</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 w-full overflow-hidden rounded-xl">
                            <Image src={casual} alt="casual" className="w-full rounded-xl" />
                        </CardContent>
                    </Card>

                    {/* formal card */}
                    <Card className="p-0 relative col-span-2 w-full h-64">
                        <CardHeader className="absolute text-4xl font-bold top-6">
                            <CardTitle>Formal</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 w-full overflow-hidden rounded-xl">
                            <Image src={formal} alt="formal" className="w-full rounded-xl" />
                        </CardContent>
                    </Card>

                    {/* party card */}
                    <Card className="p-0 relative col-span-2 w-full h-64">
                        <CardHeader className="absolute text-4xl font-bold top-6">
                            <CardTitle>Party</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 w-full overflow-hidden rounded-xl">
                            <Image src={party} alt="party" className="w-full rounded-xl" />
                        </CardContent>
                    </Card>

                    {/* gym card */}
                    <Card className="p-0 relative w-full h-64">
                        <CardHeader className="absolute text-4xl font-bold top-6">
                            <CardTitle>Gym</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 w-full overflow-hidden rounded-xl">
                            <Image src={gym} alt="gym" className="w-full rounded-xl" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Styles