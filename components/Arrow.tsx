export default function Arrow({
  direction = "up-right",
  className = "",
}: {
  direction?: "up-right" | "right" | "down";
  className?: string;
}) {
  const path =
    direction === "right"
      ? "M4 12h16m-6-6 6 6-6 6"
      : direction === "down"
        ? "M12 4v16m-6-6 6 6 6-6"
        : "M5 19 19 5M5 5h14v14";
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}
