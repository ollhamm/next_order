import Image from "next/image";
import Icons from "../Icons/page";

export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div className="py-24">
        <h1 className="text-5xl font-semibold">Mbah Sam's <br/> Yellow <span className="span">Rice</span> Is Here</h1>
        <p className="my-4 text-gray-500">
          Nasi kuning is the missing<br/>piece that makes every day complate, a
          simple yet delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
        <button className="bg-hijau flex gap-2 text-white px-4 py-2 rounded-full items-center justify-center uppercase">Order Now
        <Icons/>
        </button>
        <button className="flex gap-2 py-2 text-gray-500 font-semibold">
        Learn More
        <Icons/>
        </button>
      </div>
      </div>
      

      <div className="relative">
        <Image 
          src={"/nasi-kuning.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"nasi kuning"}
        />
      </div>
    </section>
  );
}
