import React from "react";
import { Button } from "../ui/button";
import HoverDevCards from "./HoverCards";

export default function Hero() {
    return (
      <section className="w-full border rounded-2xl bg-background text-foreground">
        <div className="grid py-8 px-4 place-items-center gap-3">
          <div className="w-fit flex justify-center p-2 border rounded-lg bg-card text-muted-foreground">
            <p className="text-base">Fitcreatives Club</p>
          </div>
          <p className="text-3xl font-medium">
            Your fitness journey starts here
          </p>
          <Button variant="outline" size="lg" className="flex text-muted-foreground px-3">
            <div className="mr-2 h-4 w-4 rounded-full border-dashed border-2 border-primary animate-spin"></div>
            Join the community
            <div className="ml-2 h-4 w-4 rounded-full border-dashed border-2 border-primary animate-spin"></div>
            </Button>
        </div>
        <div className="border-t">
          <div className="text-muted-foreground bg-stone-100/50 dark:bg-stone-900/20">
            <HoverDevCards/>
          </div>
        </div>
      </section>
    );
  }
  