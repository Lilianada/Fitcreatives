import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    title: "Trainers",
    url: "trainers",
  },
  {
    title: "Find Gym",
    url: "/find-gyms",
  },
  {
    title: "Events",
    url: "pricing",
  },
  {
    title: "Blog",
    url: "blog",
  },
];

function DesktopHeader() {
  return (
    <div className="hidden w-full max-w-2xl md:flex justify-between items-center bg-blue rounded-xl px-2 py-2">
        <div className="flex text-xl gap-1">
            <Image src="/assets/Fitcreative-Logo.svg" alt="logo" width={100} height={50} />
        </div>
      <nav className="flex gap-6 items-center justify-center text-gray-100">
        {navItems.map((item) => (
          <Link
            key={item}
            href={item}
            className="text-base font-medium hover:text-gray-900"
          >
            {item.title}
          </Link>
        ))}
        <Link href="/login" className="text-base font-medium bg-yellow text-gray-700 px-4 py-2 rounded-lg">
            Join community
        </Link>
      </nav>
    </div>
  );
}

function MobileHeader() {
    return (
        <div className="flex w-full max-w-2xl md:hidden justify-between items-center bg-blue rounded-lg px-2 py-3">
        <nav className="flex lg:hidden gap-6 items-center justify-between text-gray-100">
        <div className="flex text-xl gap-1">
            <Image src="/assets/Logo-icon.svg" alt="logo" width={60} height={50} />
        </div>
        <button className="text-base font-medium hover:text-gray-900">
            
        </button>
        </nav>
        </div>
    );
    }

export default function Header() {
  return (
    <header className="w-[90%] m-auto grid place-items-center">
        <DesktopHeader />
        <MobileHeader />
    </header>
  );
}
