import ItemCard from "./ItemCard";

interface Item {
    id: number;
    itemName: string;
    category: string;
    rating: number;
    price?: number;
    image: string;
    regularPrice?: number;
    discountPrice?: number;
    discountPercentage?: number;
    tag?: "New Arrival" | "Top Selling";
}

type Props = {
    items: Item[];
};


const TopSell: React.FC<Props> = ({ items }) => {
    return (
        <div className=" py-16 space-y-14">
            <h1 className="text-5xl font-bold text-center">Top Selling</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    items.map((item) => <ItemCard key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default TopSell