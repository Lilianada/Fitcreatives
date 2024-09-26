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

export default function Header() {
  return (
    <header className="w-[90%] flex justify-between items-center bg-blue rounded-xl px-6">
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
      </nav>
      <button>
        <Link href="/login" className="text-base font-medium bg-yellow text-gray-700 px-4 py-2 rounded-lg">
            Join community
        </Link>
      </button>
    </header>
  );
}
