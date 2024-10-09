'use client'; 
import { UsersIcon, MapPinIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import MenuButtons from "./MenuButtons";
import { ModeToggle } from "./ModeToggle";
import { BiParty } from "react-icons/bi";

export default function Header() {
  return (
    <header className="w-full m-4">
      <div className="flex justify-between border border-[hsl(var(--border))] rounded-2xl px-4 py-3">
        <div className="flex items-center">
          {/* <Image
            src="/assets/Logo-icon.svg"
            alt="Fitcreatives"
            width={30}
            height={15}
          /> */}
          <h2 className="text-foreground font-medium">Fitcreatives</h2>
        </div>
        <div className="flex gap-3">
          <MenuButtons icon={UsersIcon} text="Trainers" href="/trainers" />
          <MenuButtons icon={MapPinIcon} text="Find Gym" href="/gym" />
          <MenuButtons icon={BiParty} text="Events" href="/events" />
          <MenuButtons icon={ShoppingCartIcon} text="Shop" href="/shop" />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
