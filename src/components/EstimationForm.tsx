import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Calendar, CheckCircle, Clock } from "lucide-react"
import TrustBadge from "./ui/TrustBadge"
import EstimationReviewCard from "./ui/EstimationReviewCard"

const features = [
    "15+ years professional experience",
    "Free color consultation included", 
    "Get your quote within 24 hours",
    "No pressure, just honest pricing"
]

const projectOptions = [
  "Interior painting",
  "Exterior painting",
  "Wallpaper installation",
  "Wallpaper removal",
  "Color consultation",
  "Not sure yet"
]

const timelineOptions = [
  "ASAP",
  "Within 2 weeks",
  "Within 1-3 months",
  "Just exploring options"
]

export default function EstimationForm() {
  return (
    <div className="primary-color section-container-top">
        <div className="flex flex-col lg:flex-row gap-6 items-center bg-blue-900 rounded-xl p-12">
        
          {/* Left Side */}
          <div className="lg:w-1/2 text-white">
           <TrustBadge />

            {/* Improved Heading */}
            <h2 className="text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
              Get Your Estimation
              {/* <span className="block text-blue-200">Paint & Wallpaper Quote</span> */}
            </h2>

            <p className="text-blue-100 text-lg mt-3">
              Free, no-obligation estimation from local experts
            </p>

            <div className="space-y-4 mt-6">
              {features.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckCircle className="size-6 text-green-400" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

           <EstimationReviewCard />
          </div>

          {/* Right Side - Simple Form */}
          <div className="lg:w-1/2 bg-white rounded-xl px-6 py-10">
              {/* Professional Discount Banner */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-4 mb-8 border-l-4 border-amber-400">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-300" />
                  <div>
                    <p className="font-bold text-lg">Limited Time Offer</p>
                    <p className="text-blue-100">10% OFF when you book within 24 hours</p>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-medium">Your Name</Label>
                    <Input 
                      id="name" 
                      placeholder="First name only works too!" 
                      className="h-12 border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-medium">Phone</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="We'll call you first" 
                      className="h-12 border-gray-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Improved Select Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-medium">
                      Project Type
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-gray-300">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectOptions.map((option, index) => (
                          <SelectItem key={index} value={option.toLowerCase().replace(/\s+/g, '-')}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-medium">
                      Timeline
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-gray-300">
                        <SelectValue placeholder="When to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        {timelineOptions.map((option, index) => (
                          <SelectItem key={index} value={option.toLowerCase().replace(/\s+/g, '-')}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="space-y-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-bold transition-all duration-200"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Free Estimation
                  </Button>

                  {/* Direct Call Option */}
                  <div className="text-center">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">Or call directly</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 h-12 border-green-500 text-green-600 hover:bg-green-50 font-medium"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: (555) 123-4567
                    </Button>
                  </div>

                  <p className="text-center text-sm text-gray-500">
                    No spam. No sales pressure. Just honest numbers.
                  </p>
                </div>
              </form>
            </div>
          </div>
    </div>
  )
}