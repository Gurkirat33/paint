"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  X,
  Gift,
  CheckCircle,
  Loader2,
//   Sparkles,
  Clock,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface SpecialOfferModalProps {
  delaySeconds?: number;
}

export default function SpecialOfferModal({
  delaySeconds = 5,
}: SpecialOfferModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    // Check if user has already seen the modal in this session
    const hasSeenModal = sessionStorage.getItem("hasSeenOfferModal");
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenOfferModal", "true");
      }, delaySeconds * 1000);

      return () => clearTimeout(timer);
    }
  }, [delaySeconds]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      
      // Auto-close after success
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {isSubmitted ? (
          // Success State
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Awesome! 🎉
            </h3>
            <p className="text-gray-600 text-lg mb-4">
              You&apos;ve claimed your special offer!
            </p>
            <p className="text-gray-500 text-sm">
              We&apos;ll contact you within 24 hours with your exclusive discount details.
            </p>
          </div>
        ) : (
          // Form State
          <>
            {/* Header with Gradient */}
            <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 p-8 text-white rounded-t-2xl">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Gift className="w-8 h-8" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-2">
                🎁 Limited Time Offer!
              </h2>
              <p className="text-blue-100 text-center text-lg">
                Get <span className="font-bold text-yellow-300">20% OFF</span> your next painting project
              </p>
              <div className="flex items-center justify-center gap-2 mt-3 text-sm">
                <Clock className="w-4 h-4" />
                <span className="text-blue-100">Offer expires in 48 hours</span>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              {/* <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Claim Your Discount
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Fill out the form below and we&apos;ll send you a personalized quote with your exclusive 20% discount applied!
                </p>
              </div> */}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name Field */}
                <div className="group relative">
                  <label
                    htmlFor="modal-name"
                    className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-gray-800 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-purple-600 has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-purple-600"
                  >
                    <span className="inline-flex bg-white px-2">Your Name</span>
                  </label>
                  <Input
                    id="modal-name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder=" "
                    className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="group relative">
                  <label
                    htmlFor="modal-email"
                    className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-gray-800 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-purple-600 has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-purple-600"
                  >
                    <span className="inline-flex bg-white px-2">
                      Email Address
                    </span>
                  </label>
                  <Input
                    id="modal-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder=" "
                    className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="group relative">
                  <label
                    htmlFor="modal-phone"
                    className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-gray-800 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-purple-600 has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-purple-600"
                  >
                    <span className="inline-flex bg-white px-2">
                      Phone Number
                    </span>
                  </label>
                  <Input
                    id="modal-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder=" "
                    className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="group relative">
                  <label
                    htmlFor="modal-message"
                    className="origin-start absolute top-0 block translate-y-2 cursor-text px-1 text-sm text-gray-800 transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-purple-600 has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium has-[+textarea:not(:placeholder-shown)]:text-purple-600"
                  >
                    <span className="inline-flex bg-white px-2">
                      Tell us about your project (Optional)
                    </span>
                  </label>
                  <Textarea
                    id="modal-message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder=" "
                    className="min-h-[80px] border-gray-300 focus:border-purple-500 focus:ring-purple-500 resize-none"
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-12 text-lg font-bold transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Claiming Offer...
                    </>
                  ) : (
                    <>
                      <Gift className="w-5 h-5 mr-2" />
                      Claim My 20% Discount
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-gray-500 mt-3">
                  🔒 Your information is safe and secure. No spam, ever.
                </p>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
