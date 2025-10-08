import { Star } from "lucide-react";
import React from "react";

export default function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <span className="font-medium text-white">4.9/5 from 300+ reviews</span>
    </div>
  );
}
