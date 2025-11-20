import Link from "next/link"
import { Input } from "../ui/input"
import { CircleUserRound, Search, ShoppingCart } from "lucide-react"

const Navbar = () => {
    const links = [
        { name: "Shop", href: "/shop" },
        { name: "On Sale", href: "/on-sale" },
        { name: "New Arrivals", href: "/new-arrivals" },
        { name: "Brands", href: "/brands" },
    ]
    return (
        <div className="flex gap-x-10 px-24 py-6 items-center ">
            <div><h1 className="text-3xl font-bold uppercase">Shop.co</h1></div>
            <div className="flex items-center gap-x-10 flex-1 justify-center">
                <ul className="flex gap-x-5">
                    {
                        links.map((link, index) => (
                            <li key={index}><Link href={link.href}>{link.name}</Link></li>
                        ))
                    }
                </ul>
                <div className="flex items-center relative w-xl">
                    <Search className="absolute left-5 top-1/2 -translate-1/2 w-5 h-5 text-black/40" />
                    <Input className="rounded-full pl-10 bg-[#F0F0F0]" placeholder="Search for products..." />
                </div>
            </div>
            <div className="flex gap-x-3.5">
                <ShoppingCart />
                <CircleUserRound />
            </div>
        </div>
    )
}

export default Navbar