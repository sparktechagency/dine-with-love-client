"use client";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { FormTextarea } from "@/components/ui/form-textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <main className="min-h-screen">
      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you have a question about matches, restaurant
                  partnerships, or just want to say hello, we&apos;d love to
                  hear from you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="size-14 rounded-md bg-pink-50 flex items-center justify-center shrink-0">
                    <Mail className="text-[#FF3AB3] size-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      Email Us
                    </h4>
                    <p className="text-gray-500">support@dine-with-love.com</p>
                    <p className="text-gray-500">info@dine-with-love.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="size-14 rounded-md bg-pink-50 flex items-center justify-center shrink-0">
                    <Phone className="text-[#FF3AB3] size-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      Call Us
                    </h4>
                    <p className="text-gray-500">+1 (555) 123-4567</p>
                    <p className="text-gray-500">Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="size-14 rounded-md bg-pink-50 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#FF3AB3] size-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      Visit Us
                    </h4>
                    <p className="text-gray-500">
                      123 Romantic Lane, Suite 456
                    </p>
                    <p className="text-gray-500">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F7F7F7] p-10 rounded-md border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Full Name"
                    name="fullName"
                    placeholder="John Doe"
                    required
                  />
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <FormInput
                  label="Subject"
                  name="subject"
                  placeholder="How can we help?"
                  required
                />

                <FormTextarea
                  label="Message"
                  name="message"
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  required
                />

                <Button
                  type="submit"
                  className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-md flex items-center justify-center gap-2 hover:opacity-95 transition-opacity text-lg mt-4 cursor-pointer"
                >
                  <Send className="size-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
