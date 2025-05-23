"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  Github,
  Linkedin,
  Send,
  ArrowRight,
  Check,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState({
    isHovered: false,
    isFocused: { email: false, subject: false, message: false },
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  });
  const formRef = useRef();

  const updateFocus = (field, isFocused) => {
    setFormState((prev) => ({
      ...prev,
      isFocused: { ...prev.isFocused, [field]: isFocused },
    }));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    // Form validation
    if (!email || !subject || !message) {
      setFormState((prev) => ({
        ...prev,
        isError: true,
        errorMessage: "Please fill in all fields",
      }));
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormState((prev) => ({
        ...prev,
        isError: true,
        errorMessage: "Please enter a valid email address",
      }));
      return;
    }

    // Set loading state
    setFormState((prev) => ({
      ...prev,
      isSubmitting: true,
      isError: false,
      errorMessage: "",
    }));

    try {
      const serviceId = "service_qy35zxm";
      const templateId = "template_e8v9vap";
      const publicKey = "GjedX5NTZL4EEr68M";
      // Prepare template parameters
      const templateParams = {
        name: email,
        to_email: "saadtanoli445@gmail.com", // Your email where you want to receive messages
        title: subject,
        message: message,
        reply_to: email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success state
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true,
      }));

      // Reset form
      setEmail("");
      setSubject("");
      setMessage("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({
          ...prev,
          isSuccess: false,
        }));
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        isError: true,
        errorMessage: "Failed to send message. Please try again later.",
      }));
    }
  };

  // Alternative mail opening function as fallback
  const openMailClient = () => {
    const recipient = "saadtanoli445@gmail.com";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-white dark:bg-black">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full backdrop-blur-sm border border-purple-500/20">
              <span className="text-sm font-medium text-purple-600 dark:text-purple-200">
                Open to opportunities
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                connect
              </span>{" "}
              and discuss how we can work together.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I&apos;m currently looking for new opportunities. Whether you have a
              question or just want to say hi, I&apos;ll try my best to get back to
              you!
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/saadmustafa-111"
                target="_blank"
                className="w-12 h-12 bg-[rgb(250,247,245)] dark:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 border border-gray-200 dark:border-gray-700 group"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/saad-mustafa-31604822b/"
                target="_blank"
                className="w-12 h-12 bg-[rgb(250,247,245)] dark:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100 dark:hover:bg-blue-700 hover:scale-110 border border-gray-200 dark:border-gray-700 group"
              >
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
              </Link>
            </div>
          </div>

          <div className="bg-[rgb(250,247,245)] dark:bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send me a message
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSendMessage}
              className="space-y-6"
            >
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className={`peer w-full bg-white dark:bg-gray-800/50 border ${
                    formState.isFocused.email
                      ? "border-purple-500"
                      : "border-gray-200 dark:border-gray-700"
                  } rounded-lg px-4 pt-5 pb-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300`}
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => updateFocus("email", true)}
                  onBlur={() => updateFocus("email", false)}
                />
                <label
                  htmlFor="email"
                  className={`absolute text-sm ${
                    formState.isFocused.email || email
                      ? "text-xs top-2 text-purple-600 dark:text-purple-400"
                      : "top-4 text-gray-500 dark:text-gray-400"
                  } left-4 transition-all duration-300 pointer-events-none`}
                >
                  Your Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  className={`peer w-full bg-white dark:bg-gray-800/50 border ${
                    formState.isFocused.subject
                      ? "border-purple-500"
                      : "border-gray-200 dark:border-gray-700"
                  } rounded-lg px-4 pt-5 pb-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300`}
                  placeholder=" "
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onFocus={() => updateFocus("subject", true)}
                  onBlur={() => updateFocus("subject", false)}
                />
                <label
                  htmlFor="subject"
                  className={`absolute text-sm ${
                    formState.isFocused.subject || subject
                      ? "text-xs top-2 text-purple-600 dark:text-purple-400"
                      : "top-4 text-gray-500 dark:text-gray-400"
                  } left-4 transition-all duration-300 pointer-events-none`}
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  className={`peer w-full bg-white dark:bg-gray-800/50 border ${
                    formState.isFocused.message
                      ? "border-purple-500"
                      : "border-gray-200 dark:border-gray-700"
                  } rounded-lg px-4 pt-5 pb-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 resize-none`}
                  placeholder=" "
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => updateFocus("message", true)}
                  onBlur={() => updateFocus("message", false)}
                />
                <label
                  htmlFor="message"
                  className={`absolute text-sm ${
                    formState.isFocused.message || message
                      ? "text-xs top-2 text-purple-600 dark:text-purple-400"
                      : "top-4 text-gray-500 dark:text-gray-400"
                  } left-4 transition-all duration-300 pointer-events-none`}
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={formState.isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState.isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {formState.isError && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {formState.errorMessage}
                </div>
              )}

              {formState.isSuccess && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 px-4 py-3 rounded-lg flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
