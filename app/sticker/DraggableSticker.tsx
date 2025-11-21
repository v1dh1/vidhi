'use client';
import Draggable from 'react-draggable';

type DraggableStickerProps = {
  src: string;
  x: number;
  y: number;
};

export const DraggableSticker = ({ src, x, y }: DraggableStickerProps) => {
  return (
    <Draggable defaultPosition={{ x, y }}>
      <div
        style={{ position: 'absolute', zIndex: 1000 }}
        className="select-none" // Prevents text/image selection
      >
        <img
          src={src}
          alt="sticker"
          draggable={false} // 👈 This stops the browser from “grabbing” the image itself
          className="w-24 h-24 cursor-grab active:cursor-grabbing"
        />
      </div>
    </Draggable>
  );
};
