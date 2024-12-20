import { FiMail } from "react-icons/fi";
import { Block } from "./Mission";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SubscriptionBlock () {
    return (
    <Block className="w-full col-span-12 md:col-span-9 rounded-2xl">
      <p className="mb-3 text-lg">Subscribe to our newsletter</p>
      <form
        // onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-lg border px-3 py-1.5 transition-colors focus:border-orange-300 focus:outline-0"
        />
        <Button
          type="submit"
          variety="secondary"
          className="flex items-center gap-2 whitespace-nowrap bg-stone-50 px-3 py-2 text-sm rounded-lg font-medium text-stone-900 transition-colors hover:bg-stone-300"
        >
          <FiMail /> Subscribe
        </Button>
      </form>
    </Block>
  );
}