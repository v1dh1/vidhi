'use client';
import { useState } from 'react';
import Draggable from 'react-draggable';

type DraggableStickerProps = {
  src: string;
  description: string;
  x: number;
  y: number;
};

export const DraggableSticker = ({
  src,
  description,
  x,
  y,
}: DraggableStickerProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Draggable
      defaultPosition={{ x, y }}
      onStart={() => setIsActive(true)}
      onStop={() => setIsActive(false)}
    >
      <div
        style={{ position: 'absolute', zIndex: 1000 }}
        className="select-none"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <div className="relative flex flex-col items-center">

          {/* Image Wrapper (for corner brackets positioning) */}
          <div className="relative">

            {/* Sticker Image */}
            <img
              src={src}
              alt="sticker"
              draggable={false}
              className="w-24 h-auto cursor-grab active:cursor-grabbing transition-all duration-200"
            />

            {/* Corner Brackets */}
            {isActive && (
              <>
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-fuchsia-500" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-fuchsia-500" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-fuchsia-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-fuchsia-500" />
              </>
            )}
          </div>

          {/* Description Box (Below Sticker) */}
          <div
            className={`
              mt-2
              px-4 py-2
              text-xs
              min-w-[140px]
              text-center
              bg-white/90 backdrop-blur-md
              border border-stone-200
              rounded-md
              text-stone-700
              transition-all duration-200
              ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}
            `}
          >
            {description}
          </div>

        </div>
      </div>
    </Draggable>
  );
};
