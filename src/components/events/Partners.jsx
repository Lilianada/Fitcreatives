"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageArray = [
  {
    name: "Transistor",
    url: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
    urlDark: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg",
  },
  {
    name: "Reform",
    url: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
    urlDark: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg",
  },
  {
    name: "Tuple",
    url: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg",
    urlDark: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg",
  },
  {
    name: "SavvyCal",
    url: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
    urlDark: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg",
  },
  {
    name: "Statamic",
    url: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    urlDark: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg",
  },
];

export default function Partners() {
  // Settings for the react-slick slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: true,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="border px-4 pb-8 pt-4 rounded-2xl relative overflow-hidden">
      <div className="border rounded-lg bg-stone-50 dark:bg-stone-900/75 p-4">
        <Slider {...settings}>
          {imageArray.map((image, index) => (
            <div key={index} className="p-2">
              <img
                alt={image.name}
                src={image.url}
                width={158}
                height={48}
                className="w-full object-contain max-h-8  block dark:hidden"
              />
              <img
                alt={image.name}
                src={image.urlDark}
                width={158}
                height={48}
                className="w-full object-contain max-h-8  hidden dark:block"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full grid place-items-center absolute bottom-16">
        <p className="text-sm rounded-lg py-2 px-4 border bg-stone-50 dark:bg-stone-900/75 text-muted-foreground w-fit">
          Partners
        </p>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm">
          We are proud to be associated with the following partners who have
          helped us in our journey.
        </p>
      </div>
    </section>
  );
}
