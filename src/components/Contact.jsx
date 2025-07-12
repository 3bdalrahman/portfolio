import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import imageHero from "../assets/imghero.png";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Map the input names to state properties
    const stateProperty = name === 'user_name' ? 'name' : 
                         name === 'user_email' ? 'email' : 
                         name;
    setFormData(prev => ({
      ...prev,
      [stateProperty]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: "error", message: "Please fill in all fields" });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: "error", message: "Please enter a valid email address" });
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID'; // Get this from EmailJS dashboard
      const templateId = 'YOUR_TEMPLATE_ID'; // Get this from EmailJS dashboard
      const publicKey = 'YOUR_PUBLIC_KEY'; // Get this from EmailJS dashboard

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.status === 200) {
        setSubmitStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
        formRef.current.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact"
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative"
    >
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
        <aside className="w-full md:w-1/2 relative">
          <div
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px]
                sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] 
                to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)]"
          ></div>
          <img
            src={imageHero}
            alt="hero"
            className="h-[250px] sm:h-[485px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative"
          />
        </aside>
        
        {/* Contact Form */}
        <section className="p-8 w-full md:w-1/2">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">
                Contact Me
            </h2>
          </header>
          
          {/* Status Message */}
          {submitStatus && (
            <div className={`mb-4 p-3 rounded-lg text-center ${
              submitStatus.type === "success" 
                ? "bg-green-900 text-green-100" 
                : "bg-red-900 text-red-100"
            }`}>
              {submitStatus.message}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white border-2 py-2 px-6 focus:outline-none rounded-full text-lg transition-all duration-300 ${
                isSubmitting 
                  ? "opacity-50 cursor-not-allowed" 
                  : "hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.5)] cursor-pointer"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </article>
    </section>
  );
}
