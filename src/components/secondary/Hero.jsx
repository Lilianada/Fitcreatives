
export default function Hero() {

  return (
    <div className="w-full max-4xl rounded-xl mt-12 bg-backdrop bg-right-bottom">

      <div className="overflow-hidden">
       
        <div className="mx-auto max-w-2xl py-32 px-4">
          <div className="hidden sm:mb-4 sm:flex justify-center">
            <div className=" rounded-full px-3 py-1 text-sm leading-6 text-light ring-1 ring-white/20 hover:ring-white/20">
            Stay Fit, Stay Creative
            </div>
          </div>
          <div className="text-center sm:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-yellow bg-clip-text sm:text-6xl">
            A community of like minded individuals that support your fitness journey.
            </h1>
            <p className="mt-6 text-lg leading-8 text-light">
            Discover personalized workouts, expert advice, and a supportive community at FitCreatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
