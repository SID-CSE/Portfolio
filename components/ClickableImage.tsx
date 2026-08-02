import Image from "next/image";

export default function ClickableImage({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={`Open ${alt}`}
      onClick={onClick}
      className="group block w-full border-0 bg-transparent p-0 text-left"
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="rounded-lg transition group-hover:scale-[1.02]"
      />
    </button>
  );
}
