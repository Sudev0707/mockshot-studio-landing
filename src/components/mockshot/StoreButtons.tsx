import { cn } from "@/lib/utils";

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.609 1.814 13.792 12 3.61 22.186a1.978 1.978 0 0 1-.237-.95V2.764c0-.35.087-.68.237-.95zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.81 2.306 1.335c.73.422.73 1.476 0 1.898l-2.306 1.335L15.206 12l2.492-1.113zM5.864 2.658 16.8 8.99l-2.302 2.302L5.864 2.658z" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

type StoreButtonsProps = {
  /** Visual tone for hero (on blue) vs dark/light sections */
  tone?: "hero" | "dark" | "light";
  className?: string;
  /** Optional Play Store URL — omit or leave empty until live */
  playStoreUrl?: string;
};

export function StoreButtons({
  tone = "hero",
  className,
  playStoreUrl = "#",
}: StoreButtonsProps) {
  const playStyles = {
    hero: "bg-white text-gray-900 shadow-lg hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl",
    dark: "bg-white text-gray-900 shadow-lg hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl",
    light:
      "bg-gray-900 text-white shadow-lg hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl",
  }[tone];

  const appleStyles = {
    hero: "border border-black/20 bg-gray-950 text-white shadow-lg cursor-not-allowed",
    dark: "border border-white/10 bg-black text-white shadow-lg cursor-not-allowed",
    light: "border border-gray-800 bg-gray-950 text-white shadow-lg cursor-not-allowed",
  }[tone];

  const appleBadgeStyles = {
    hero: "bg-white/15 text-white/80",
    dark: "bg-white/15 text-white/80",
    light: "bg-white/15 text-white/80",
  }[tone];

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href={playStoreUrl}
        className={cn(
          "inline-flex min-w-[200px] items-center gap-3 rounded-[12px] px-5 py-3 transition-all",
          playStyles,
        )}
        aria-label="Get it on Google Play"
      >
        <GooglePlayIcon className="h-7 w-7 shrink-0" />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-medium tracking-wide uppercase opacity-70">
            Get it on
          </span>
          <span className="text-[15px] font-bold tracking-tight">Google Play</span>
        </span>
      </a>

      <div
        className={cn(
          "inline-flex min-w-[200px] items-center gap-3 rounded-[12px] px-5 py-3",
          appleStyles,
        )}
        aria-label="App Store — Coming soon"
        role="status"
      >
        <AppleIcon className="h-7 w-7 shrink-0" />
        <span className="flex flex-1 flex-col items-start leading-tight">
          <span className="text-[10px] font-medium tracking-wide uppercase opacity-70">
            Coming soon on
          </span>
          <span className="text-[15px] font-bold tracking-tight">App Store</span>
        </span>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase",
            appleBadgeStyles,
          )}
        >
          Soon
        </span>
      </div>
    </div>
  );
}
