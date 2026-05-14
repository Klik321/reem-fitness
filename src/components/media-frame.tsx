import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

type Media = {
  src: string;
  alt: string;
};

type MediaFrameProps = {
  media: Media;
  className?: string;
  sizes?: string;
  objectPosition?: string;
  fit?: "cover" | "contain";
  overlay?: "none" | "soft" | "dark";
  label?: string;
  hint?: string;
  preload?: boolean;
  zoom?: boolean;
};

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function MediaFrame({
  media,
  className,
  sizes = "100vw",
  objectPosition = "center",
  fit = "cover",
  overlay = "dark",
  label,
  hint,
  preload = false,
  zoom = true,
}: MediaFrameProps) {
  const publicPath = path.join(process.cwd(), "public", media.src);
  const hasImage = existsSync(publicPath);
  const imageClassName =
    fit === "contain"
      ? "object-contain"
      : "object-cover";
  const overlayClassName =
    overlay === "none"
      ? ""
      : overlay === "soft"
        ? "bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_0%,rgba(0,0,0,0.18)_100%)]"
        : "bg-[linear-gradient(180deg,rgba(0,0,0,0)_25%,rgba(0,0,0,0.72)_100%)]";

  return (
    <div
      className={cn(
        "group relative overflow-hidden border shadow-[0_30px_80px_rgba(0,0,0,0.34)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.4))]" />
      {hasImage ? (
        <Image
          src={`/${media.src}`}
          alt={media.alt}
          fill
          preload={preload}
          sizes={sizes}
          className={cn(
            imageClassName,
            "transition duration-500",
            zoom ? "group-hover:scale-[1.03]" : undefined,
          )}
          style={{ objectPosition }}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.06),transparent_22%),radial-gradient(circle_at_80%_70%,rgba(190,24,39,0.16),transparent_26%),linear-gradient(145deg,#101010,#050505)]" />
      )}
      {overlayClassName ? <div className={cn("absolute inset-0", overlayClassName)} /> : null}
      {!hasImage ? (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <div className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[0.68rem] text-zinc-300 backdrop-blur">
            ממתין לקובץ תמונה
          </div>
          <div className="text-right">
            {label ? <p className="text-sm font-bold text-white">{label}</p> : null}
            {hint ? <p className="mt-1 text-xs text-zinc-300">{hint}</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
