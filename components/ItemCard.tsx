import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

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
  item: Item;
};

const ItemCard: React.FC<Props> = ({ item }) => {
  return (
    <Card className="max-w-sm hover:shadow-lg border-none p-0 ">
      <CardHeader className="p-0 border-none">
        <Image
          src={item.image}
          alt={item.itemName}
          width={400}
          height={400}
          className="w-full h-64 object-center rounded-xl"
        />
      </CardHeader>

      <CardContent className="p-4 border-none">
        <CardTitle className="text-xl font-semibold">{item.itemName}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {item.category}
        </CardDescription>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-medium">{item.rating.toFixed(1)}</span>
        </div>

        <div className="mt-4">
          {item.discountPrice ? (
            <div className="text-base">
              <span className="font-bold text-base">${item.discountPrice}</span>
              <span className="line-through text-muted-foreground ml-2">
                ${item.regularPrice}
              </span>
              <span className="ml-2 text-sm text-red-500 px-4 py-1.5 bg-red-200 rounded-full">
                -{item.discountPercentage}%
              </span>
            </div>
          ) : (
            <div className="text-base font-bold">${item.price}</div>
          )}
        </div>
      </CardContent>

      {/* <CardFooter className="p-4">
        <CardAction>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </CardAction>
      </CardFooter> */}
    </Card>
  );
};

export default ItemCard;