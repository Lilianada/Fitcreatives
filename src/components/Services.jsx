import Image from "next/image";

export default function Services() {
  return (
    <div className="py-24 sm:py-32 relative">
      <div className="bg-light rounded-xl">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base/7 font-semibold text-lightblue">
            Who we are?
          </h2>
          <p className="mt-2 max-w-lg text-pretty text-4xl font-medium tracking-tight text-dark sm:text-5xl">
            Your fitness community for creatives.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="flex p-px lg:col-span-4">
              <div className="overflow-hidden rounded-lg bg-lightblue ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                <Image
                  src="/assets/Lifting.jpg"
                  alt="fitcreatives"
                  width={800}
                  height={100}
                  objectFit="cover"
                  className="h-80 object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-yellow">
                    Mission
                  </h3>
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-light">
                    To inspire
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-light">
                  Our aim is to inspire and empower creatives to prioritize their physical health and well-being, fostering a supportive community that combines creativity and fitness.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-yellow bg-[url('/assets/10.svg')] bg-cover bg-center ring-1 ring-white/15 lg:rounded-bl-[2rem] h:[510px] sm:h-full w-full">
            </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="overflow-hidden rounded-lg bg-dark bg-[url('/assets/8.svg')] bg-cover bg-center ring-1 ring-white/15 lg:rounded-bl-[2rem] h:[510px] sm:h-full w-full">
              </div>
            </div>
            <div className="flex p-px lg:col-span-4">
              <div className="overflow-hidden rounded-lg bg-lightblue ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                <Image
                  alt="fitcreatives"
                  width={800}
                  height={100}
                  src="/assets/Group-beach.jpg"
                  className="h-80 object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-yellow">
                    Club
                  </h3>
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-light">
                    Join the fitness club
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-light">
                    Join our fitness club to get access to tailored workouts, expert guidance, and a supportive community of creatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
