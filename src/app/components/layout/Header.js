import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 items-center text-gray-500 font-semibold">
        <Link href={"/"}>
          <div className="">
          <img className="w-30 h-16" src="/logo.png" alt='logo'/>
          </div>
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex items-center text-gray-500 gap-4 font-semibold">
        <Link href={"/login"}>Login</Link>
        <Link
          href={"/register"}
          className="bg-hijau text-white px-5 py-2 rounded-full"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
