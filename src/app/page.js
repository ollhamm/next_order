import Image from "next/image";
import Link from "next/link";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Menu from "./components/layout/Menu";
import SectionHeader from "./components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <section className="text-center my-16">
        <SectionHeader subHeader={"Our story"} mainHeader={"About us"} />
        <p className="max-w-2xl mx-auto mt-4 text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
      </section>
      <section className="text-center my-16">
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
        <div className="mt-8">
          <a
            className="text-2xl text-gray-500 underline"
            href="https://api.whatsapp.com/send?phone=6289606838895"
            target="_blank"
          >
            +620000000
          </a>
        </div>
      </section>
    </>
  );
}
