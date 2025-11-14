export const AnimatedIcon = () => {
  return (
    <div className="size-6 md:size-8 rounded-full overflow-hidden flex items-center justify-center relative">
      <div
        className="absolute inset-0 animate-aurora bg-[length:200%_auto]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #FF0080, #7928CA, #0070F3, #38bdf8, #FF0080)",
          animationDuration: "10s",
        }}
      />
      <svg
        className="w-4 h-4 text-white relative z-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
    </div>
  );
};

export const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
];

export const floatingBadges = [
  {
    text: "Expert Color Matching",
    position: "top-8 left-6",
    iconPosition: "right",
    delay: "0s",
  },
  {
    text: "Free Estimates",
    position: "top-1/2 right-6",
    iconPosition: "left",
    delay: "0.2s",
  },
  {
    text: "Premium Quality Finish",
    position: "bottom-8 left-6",
    iconPosition: "right",
    delay: "0.4s",
  },
];
