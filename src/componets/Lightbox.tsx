import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

type FigureGroupValue = {
  openBySrc: (src: string) => boolean;
};

const FigureGroupContext = createContext<FigureGroupValue | null>(null);

export function useFigureGroup(): FigureGroupValue | null {
  return useContext(FigureGroupContext);
}

export function FigureGroup({
  figures,
  children,
}: {
  figures: LightboxImage[];
  children: ReactNode;
}) {
  const [index, setIndex] = useState<number | null>(null);

  const openBySrc = useCallback(
    (src: string) => {
      const i = figures.findIndex((f) => f.src === src);
      if (i >= 0) {
        setIndex(i);
        return true;
      }
      return false;
    },
    [figures]
  );

  return (
    <FigureGroupContext.Provider value={{ openBySrc }}>
      {children}
      {index !== null && figures.length > 0 && (
        <Lightbox
          images={figures}
          initialIndex={index}
          onClose={() => setIndex(null)}
        />
      )}
    </FigureGroupContext.Provider>
  );
}

export function Lightbox({
  images,
  initialIndex = 0,
  onClose,
}: {
  images: LightboxImage[];
  initialIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  const hasNav = images.length > 1;

  const goTo = useCallback(
    (next: number) => {
      if (images.length === 0) return;
      setIndex(((next % images.length) + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (!hasNav) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(index + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(index - 1);
      }
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [goTo, hasNav, index, onClose]);

  if (images.length === 0) return null;
  const active = images[index] ?? images[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={active.alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4 md:p-8 cursor-zoom-out"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 w-12 h-12 bg-white text-[#1a1a1b] flex items-center justify-center hover:bg-gray-200 transition-colors text-2xl font-light leading-none"
      >
        ×
      </button>

      {hasNav && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              goTo(index - 1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 text-[#1a1a1b] flex items-center justify-center hover:bg-white transition-colors text-3xl font-light leading-none"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              goTo(index + 1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 text-[#1a1a1b] flex items-center justify-center hover:bg-white transition-colors text-3xl font-light leading-none"
          >
            ›
          </button>
        </>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center gap-4 max-w-[95vw] max-h-full cursor-auto"
      >
        <img
          src={active.src}
          alt={active.alt}
          className="max-w-full max-h-[78vh] object-contain bg-white"
        />
        {active.caption && (
          <p className="text-small text-white/90 text-center max-w-3xl leading-relaxed">
            {active.caption}
          </p>
        )}
        {hasNav && (
          <div className="text-small text-white/60 tabular-nums">
            {index + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}
