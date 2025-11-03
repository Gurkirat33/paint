"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  X,
  CheckCircle,
  Loader2,
  Send,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface GetQuoteButtonProps {
  size?: "default" | "sm" | "lg" | "xl" | "icon" | null | undefined;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
  className?: string;
  children?: React.ReactNode;
}

export default function GetQuoteButton({ 
  size = "xl", 
  variant = "default",
  className = "",
  children = "Get Free Quote"
}: GetQuoteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
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

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button size={size} variant={variant} className={className} onClick={handleOpen}>
        {children}
      </Button>

      {isOpen && (
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
              <div className="p-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3">
                  Thank You!
                </h3>
                <p className="text-gray-600 text-lg mb-2">
                  Your request has been received successfully.
                </p>
                <p className="text-gray-500 text-sm">
                  We&apos;ll get back to you within 24 hours with a detailed quote.
                </p>
              </div>
            ) : (
              // Form State
              <>
                {/* Header */}
                <div className="p-8 pb-6 border-b border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Request a Free Quote
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we&apos;ll contact you within 24 hours.
                  </p>
                </div>

                {/* Form Content */}
                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* Name Field */}
                    <div className="group relative">
                      <label
                        htmlFor="modal-name"
                        className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-gray-800 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-blue-600 has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-blue-600"
                      >
                        <span className="inline-flex bg-white px-2">Your Name</span>
                      </label>
                      <Input
                        id="modal-name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder=" "
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="group relative">
                      <label
                        htmlFor="modal-email"
                        className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-gray-800 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-blue-600 has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-blue-600"
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
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="group relative">
                      <label
                        htmlFor="modal-phone"
                        className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-gray-800 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-blue-600 has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-blue-600"
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
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="group relative">
                      <label
                        htmlFor="modal-message"
                        className="origin-start absolute top-0 block translate-y-2 cursor-text px-1 text-sm text-gray-800 transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-blue-600 has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium has-[+textarea:not(:placeholder-shown)]:text-blue-600"
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
                        className="min-h-[80px] border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                        rows={3}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Request
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
      )}
    </>
  );
}
