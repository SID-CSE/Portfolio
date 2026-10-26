import Image from "next/image";

export default function ClickableImage({
  src,
  alt,
  onClick,
  crop = false,
}: {
  src: string;
  alt: string;
  onClick: () => void;
  crop?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={`Open ${alt}`}
      onClick={onClick}
      className={`group block w-full min-w-0 border-0 bg-transparent p-0 text-left ${crop ? "h-full" : ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        sizes="(max-width: 1023px) 100vw, 896px"
        className={`block w-full rounded-lg transition group-hover:scale-[1.02] ${
          crop ? "h-full object-cover object-top" : "h-auto object-contain"
        }`}
      />
    </button>
  );
}
