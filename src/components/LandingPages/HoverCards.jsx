import React from "react";
import { FiUsers } from "react-icons/fi";
import { CgGym } from "react-icons/cg";
import { BiParty } from "react-icons/bi";

const HoverCards = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Card
          title="Find a Trainer"
          subtitle="Search for a personal tariner"
          href="#"
          Icon={FiUsers}
        />
        <Card title="Find a Gym" subtitle="Search for gyms near you" href="#" Icon={CgGym} />
        <Card title="Community Events" subtitle="Join the growing community " href="#" Icon={BiParty} />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] relative overflow-hidden group bg-stone-50 dark:bg-stone-900/50 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-stone-200/50 dark:text-stone-600 group-hover:text-orange-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-orange-400 group-hover:text-white dark:group-hover:text-stone-100 transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-base text-stone-950 dark:text-stone-100 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 group-hover:text-orange-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverCards;
