import Banner from "@/components/Banner"
import NewArrivals from "@/components/NewArrivals"
import TopSell from "@/components/TopSell"

interface Item {
  id: number;
  itemName: string;
  category: string;
  rating: number;
  price?: number;
  regularPrice?: number;
  image: string;
  discountPrice?: number;
  discountPercentage?: number;
  tag?: "New Arrival" | "Top Selling";
}


async function getItems(): Promise<Item[]> {
  const res = await fetch("http://localhost:3000/items.json");
  return res.json();
}


const Home = async () => {
  const items = await getItems();

  const newArrivals = items.filter((i) => i.tag === "New Arrival");
  const topSelling = items.filter((i) => i.tag === "Top Selling");

  console.log(newArrivals)
  return (
    <div>
      <Banner />
      <div className="px-24">

      <NewArrivals items={newArrivals} />
      <hr className="w-full" />
      <TopSell items={topSelling} />
      </div>
    </div>
  )
}

export default Home