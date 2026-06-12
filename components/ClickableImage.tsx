"use client";

import Image from "next/image";

export default function ClickableImage({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: (src: string) => void;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={900}
      className="cursor-pointer rounded-2xl transition hover:scale-[1.02]"
      onClick={() => onClick(src)}
    />
  );
}