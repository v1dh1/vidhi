import { useState } from "react";
import Image from "next/image";

const MockupCarousel = () => {
  const slides = [
    {
      id: 1,
      src: "/wpinitial1.png",
      alt: "Mockup 1",
      text: "This is the first slide's description.",
    },
    {
      id: 2,
      src: "/wpinitial2.png",
      alt: "Mockup 2",
      text: "Here's some information about the second slide.",
    },
    {
      id: 3,
      src: "/wpuserjourney.png",
      alt: "Mockup 3",
      text: "Lastly, this is the third slide's content.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSizes, setImageSizes] = useState(
    slides.map(() => ({ width: 900, height: 700 })) // Fallback to fixed sizes
  );

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageLoad = (index, event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageSizes((prevSizes) => {
      const updatedSizes = [...prevSizes];
      updatedSizes[index] = { width: naturalWidth, height: naturalHeight };
      return updatedSizes;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex
                ? "translate-x-0"
                : index < currentIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
            style={{
              height: `${imageSizes[index]?.height || 700}px`, // Set height dynamically
            }}
          >
            <div className="mockup-window bg-pink-100 border">
              <div className="bg-white flex justify-center items-center px-4 py-8">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  className="rounded-lg object-contain"
                  width={imageSizes[index]?.width || 900}
                  height={imageSizes[index]?.height || 700}
                  onLoad={(event) => handleImageLoad(index, event)} // Handle image load
                />
              </div>
            </div>
            {/* Bottom Text */}
            <div className="absolute bottom-0 left-0 right-0 text-center px-4 py-2">
              <p className="text-lg text-stone-800">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none z-10"
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none z-10"
        onClick={handleNext}
      >
        &#8250;
      </button>
    </div>
  );
};

export default MockupCarousel;
