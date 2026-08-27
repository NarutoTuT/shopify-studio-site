"use client"

export function BrandLogo() {
  return (
    <span className="inline-flex min-w-0 items-center gap-3 text-foreground">
      <span className="relative flex h-8 w-9 shrink-0 items-center justify-center">
        <svg
          viewBox="0 0 42 32"
          aria-hidden="true"
          className="h-8 w-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 22.5C9.9 18.2 15.7 17 21.3 19C27 21 32.3 19.6 38 14.8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-foreground/88"
          />
          <path
            d="M10.5 22.8C16.1 25 22.1 24.9 28.5 22.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            className="text-foreground/32"
          />
          <path
            d="M27.2 8.2C31.2 6.4 34.7 7.1 37.6 10.3C34.5 13.5 30.8 14.1 26.7 12.2"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </span>
      <span className="grid min-w-0 gap-1 leading-none">
        <span data-compact-type className="truncate text-[13px] font-semibold uppercase tracking-[0.16em] md:text-sm">
          WhaleLeap
        </span>
        <span data-compact-type className="truncate text-[9px] font-medium uppercase tracking-[0.2em] text-primary/80 md:text-[10px]">
          Studio
        </span>
      </span>
    </span>
  )
}
