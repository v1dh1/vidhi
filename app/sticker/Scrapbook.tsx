'use client';
import { useState } from 'react';
import { DraggableSticker } from './DraggableSticker';

const stickerList = [
  { src: './mybottle.png', alt: 'Water Bottle', description: 'My Water Bottle!!!' },
  { src: './sydegrad.png', alt: 'Cat', description: 'The sticker I designed for my class :)' },
  { src: './violin.png', alt: 'Violin', description: 'I used to be a violinist' },
  { src: './digicam.webp', alt: 'Digicam', description: 'i loveeee taking photos' },
  { src: './basket.png', alt: 'Basket', description: 'i love picnics!' }
];


export default function Scrapbook() {
  const [placedStickers, setPlacedStickers] = useState<
    { id: number; src: string; description: string; x: number; y: number }[]
  >([]);


  const addSticker = (sticker: { src: string; description: string }) => {
  const id = Date.now();
  setPlacedStickers((prev) => [
    ...prev,
    {
      id,
      src: sticker.src,
      description: sticker.description,
      x: Math.random() * 400,
      y: Math.random() * 400,
    },
  ]);
};


  return (
    <div className="fixed inset-0 z-50">
      {/* Sticker Options */}
      <div className="absolute bottom-16 right-16 space-x-2 
                bg-white/20 
                backdrop-blur-md 
                border border-white/30 
                p-4 rounded-xl">
        <div className='text-fuchsia-800 p-2'>{"Decorate my page!"}</div>
        <div className='text-stone-500 font-inter pb-4 text-sm'>{"click and drag the stickers"}</div>
        {stickerList.map((sticker, index) => (
          <button
            key={index}
            onClick={() => addSticker(sticker)}
            className="border rounded-lg px-2 py-1 bg-white"
          >
            <img src={sticker.src} alt={sticker.alt} className="w-8 h-8" />
          </button>
        ))}

<button
  onClick={() => setPlacedStickers([])}
  className="border rounded-lg px-2 py-1 bg-white"
>
  <div className='text-fuchsia-900 text-sm'>{"clear stickers"}</div>
</button>

      </div>

      {/* Placed Stickers */}
      {placedStickers.map((sticker) => (
          <DraggableSticker
            key={sticker.id}
            src={sticker.src}
            x={sticker.x}
            y={sticker.y}
            description={sticker.description}
          />
      ))}
    </div>
  );
}
