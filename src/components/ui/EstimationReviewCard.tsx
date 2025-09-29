import { Quote } from 'lucide-react'
import React from 'react'

export default function EstimationReviewCard() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-5">
    <Quote className="h-8 w-8 text-blue-300 mb-4" />
    <p className="text-lg italic mb-4">
      They gave me the most honest estimate I&apos;ve ever received. Finished 2 days early and the quality was exceptional!
    </p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-blue-400 rounded-full"></div>
      <div>
        <p className="font-semibold">Sarah Johnson</p>
        <p className="text-blue-200">Interior Painting Project</p>
      </div>
    </div>
  </div>  )
}
