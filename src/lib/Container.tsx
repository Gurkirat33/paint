import { cn } from "./utils";

type ContainerVariant =
  | "default"
  | "blue"
  | "purple"
  | "green"
  | "deepPurple"
  | "black"
  | "orange"
  | "slate"
  | "indigo";

const variantStyles: Record<ContainerVariant, string> = {
  default: "tertiary-color",
  blue: "bg-[#143C47]",
  purple: "bg-blue-900",
  green: "bg-emerald-700",
  deepPurple: "bg-purple-800",
  black: "bg-black",
  orange: "bg-orange-900",
  slate: "bg-slate-800",
  indigo: "bg-indigo-800",
};

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: ContainerVariant;
  padding?: boolean;
  as?: "section" | "footer" | "div" | "header";
}

export default function Container({
  children,
  className,
  variant = "default",
  padding = false,
  as: Component = "section",
}: Readonly<ContainerProps>) {
  return (
    <Component className="primary-color section-container-top">
      <div
        className={cn(
          "rounded-xl",
          variantStyles[variant],
          padding && "container-padding"
        )}
      >
        <div className={cn("max-w-[84rem] mx-auto", className)}>{children}</div>
      </div>
    </Component>
  );
}
