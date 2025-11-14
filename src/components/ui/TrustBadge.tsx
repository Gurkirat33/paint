import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

export default function TrustBadge({ full = false }: { full?: boolean }) {
  return (
    <div
      className={cn(
        "inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl",
        full && "w-full md:w-fit"
      )}
    >
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <span className="font-medium text-white">4.9/5 from 300+ reviews</span>
    </div>
  );
}
