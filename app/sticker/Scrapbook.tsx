'use client';
import { useState } from 'react';
import { DraggableSticker } from './DraggableSticker';

const stickerList = [
  { src: './coffee.png', alt: 'Sticker 1' },
  { src: './cat.png', alt: 'Sticker 2' },
  {src: './violin.png', alt: 'Sticker 3'},
  {src: './stars.png', alt: 'Sticker 3'},
  {src: './basket.png', alt: 'Sticker 3'}
];

export default function Scrapbook() {
  const [placedStickers, setPlacedStickers] = useState<
    { id: number; src: string; x: number; y: number }[]
  >([]);

  const addSticker = (src: string) => {
    const id = Date.now();
    setPlacedStickers((prev) => [
      ...prev,
      { id, src, x: Math.random() * 400, y: Math.random() * 400 },
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
            onClick={() => addSticker(sticker.src)}
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
        />
      ))}
    </div>
  );
}
