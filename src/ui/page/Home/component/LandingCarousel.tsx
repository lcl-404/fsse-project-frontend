// components/LandingCarousel.tsx
import LandingSlide from "./LandingSlide.tsx";
import {useEffect, useRef, useState} from "react";


const carouselData = [
  {
    imageUrl: "/assets/img/table-grey.png",
    title: "Spring Collection",
    description:
      "A beautiful collection of tableware and glassware, make your summer parties and gatherings picture-perfect.",
    buttonText: "Shop Now",
    buttonLink: "#",
  },
  {
    imageUrl: "/assets/img/picnic2.jpg",
    title: "Picnic Aesthetic",
    description:
      "Light and breezy designs perfect for aesthetic brunches and outdoor picnics.",
    buttonText: "Shop Now",
    buttonLink: "#",
  },
  {
    imageUrl: "/assets/img/baking.jpg",
    title: "Baking Essentials",
    description:
      "From mixers to pans and trays. All you need to make your perfect bake.",
    buttonText: "Shop Now",
    buttonLink: "#",
  },
];

export default function LandingCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<number | null>(null); // Use 'number' instead of NodeJS.Timeout

  const startAutoSlide = () => {
    // Clear previous interval
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }

    // Start new interval
    intervalRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleManualSlide = (newIndex: number) => {
    setCurrentSlide(newIndex);
    startAutoSlide(); // Reset the timer
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselData.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <LandingSlide {...slide} />
          </div>
        ))}
      </div>



      {/* Nav buttons */}
      <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4 z-10">
        <button
          className="btn btn-circle"
          onClick={() =>
            handleManualSlide(
              (currentSlide - 1 + carouselData.length) % carouselData.length
            )
          }
        >
          ❮
        </button>
        <button
          className="btn btn-circle"
          onClick={() => handleManualSlide((currentSlide + 1) % carouselData.length)}
        >
          ❯
        </button>
      </div>

    </div>
  );
}

