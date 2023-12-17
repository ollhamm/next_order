import Image from "next/image";
import DaftarMenu from "./Daftar_menu/DaftarMenu";
import SectionHeader from "./SectionHeader";

export default function Menu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="h-48 w-48 absolute -top-24 -left-12 text-left -z-10">
          <Image
            src={"/sallad1.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"salad"}
          />
        </div>
        <div className="h-48 absolute -top-[100px] right-0 z-10">
          <Image
            src={"/sallad2.png"}
            width={107}
            height={189}
            alt={"salad"}
          />
        </div>
      </div>
      <div className="text-center">
        <SectionHeader
        subHeader={'Check out'}
        mainHeader={'Menu'}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-12">
        <DaftarMenu/>
        <DaftarMenu/>
        <DaftarMenu/>
        <DaftarMenu/>
        <DaftarMenu/>
        <DaftarMenu/>
      </div>
    </section>
  );
}
