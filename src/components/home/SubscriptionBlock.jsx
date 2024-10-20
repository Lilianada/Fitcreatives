import { FiMail } from "react-icons/fi";
import { Block } from "./Mission";
import { Input } from "../ui/input";

export default function SubscriptionBlock () {
    return (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3 text-lg">Subscribe to our newsletter</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded border px-3 py-1.5 transition-colors focus:border-orange-300 focus:outline-0"
        />
        <Button
          type="submit"
          variety="secondary"
          className="flex items-center gap-2 whitespace-nowrap rounded bg-stone-50 px-3 py-2 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-300"
        >
          <FiMail /> Subscribe
        </Button>
      </form>
    </Block>
  );
}