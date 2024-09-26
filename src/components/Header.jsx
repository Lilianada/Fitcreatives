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
    <header className="bg-white rounded-xl px-6 py-3 row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-700">
        <nav>
            { navItems.map((item) => (
            <Link key={item} href={item}
                className="text-base font-medium hover:text-gray-900"
            >
                {item.title}
            </Link>
            ))
            }

        </nav>
      </header>
  )
}
