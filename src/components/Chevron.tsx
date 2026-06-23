// Single-source chevron icon. Matches the stroke chevron used in WorkCarousel's
// nav buttons so directional UI stays consistent across the site.
export default function Chevron({
  dir = "right",
  size = 16,
  className = "",
}: {
  dir?: "left" | "right";
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <polyline points={dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );
}
