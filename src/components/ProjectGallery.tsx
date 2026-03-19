"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectGallery({ images }: { images: string[] }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="w-full">
      <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-lg">
        <Image
          src={`/images${selected}`}
          alt="project"
          fill
          className="object-contain transition duration-500"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img, i) => {
          const isActive = selected === img;

          return (
            <button
              key={`${img}-${i}`}
              onClick={() => setSelected(img)}
              className={`relative aspect-[16/9] w-[120px] overflow-hidden rounded-lg border transition ${
                isActive
                  ? "border-sky-500 ring-1 ring-sky-500/50"
                  : "border-slate-800 hover:border-slate-600"
              } bg-slate-900`}
            >
              <Image
                src={`/images${img}`}
                alt="thumb"
                fill
                className={`object-cover transition duration-300 ${
                  isActive
                    ? "scale-105 opacity-100"
                    : "opacity-70 hover:opacity-100"
                } `}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
