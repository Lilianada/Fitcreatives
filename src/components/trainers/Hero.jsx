import React from 'react'
import CustomDialog from "../form";


export default function Hero() {
  return (
      <section className="w-full border rounded-2xl bg-background text-foreground flex flex-col">
      <div className="grid place-items-center gap-4 border m-4 bg-backdrop bg-cover bg-center py-12 rounded-2xl bg-opacity-70">
        <div className="w-fit flex justify-center py-2 px-4 border border-foreground rounded-lg text-muted-foreground">
          <p className="text-base">Fitness Club</p>
        </div>
        <p className="text-2xl sm:text-3xl font-medium text-center text-light max-w-[280px] sm:max-w-[400px]">
        Find a trainer from our vast selection of PTs
        </p>
        <CustomDialog
          triggerText={
            <>
              <div className="h-4 w-4 mr-4 rounded-full border-dashed border-2 border-primary animate-spin"></div>
              Fitcreatives
              <div className="h-4 w-4 ml-4 rounded-full border-dashed border-2 border-primary animate-spin"></div>
            </>
          }
        />
      </div>
    </section>
  )
}
