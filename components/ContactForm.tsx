import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-10 text-yellow-400 tracking-wide">Let's connect</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Form */}
        <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 bg-transparent">
          <div className="flex flex-col">
            <label className="font-bold mb-1">Name <span className="text-yellow-400">*</span></label>
            <input type="text" placeholder="Your Name" className="rounded-md bg-[#191820] border border-[#2c2b36] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-1">Email <span className="text-yellow-400">*</span></label>
            <input type="email" placeholder="Your Email" className="rounded-md bg-[#191820] border border-[#2c2b36] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-1">Address</label>
            <input type="text" placeholder="Your Address" className="rounded-md bg-[#191820] border border-[#2c2b36] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-1">Phone</label>
            <input type="text" placeholder="Your Phone" className="rounded-md bg-[#191820] border border-[#2c2b36] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="font-bold mb-1">Subject <span className="text-yellow-400">*</span></label>
            <input type="text" placeholder="Subject" className="rounded-md bg-[#191820] border border-[#2c2b36] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="font-bold mb-1">Content <span className="text-yellow-400">*</span></label>
            <textarea placeholder="Write your message here" rows={5} className="rounded-md bg-[#191820] border border-[#2c2b36] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none" required />
          </div>
          <div className="flex items-center md:col-span-2 mt-2">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-sm text-white">I agree to the <span className="font-bold">Terms and Privacy Policy</span></label>
          </div>
          <div className="md:col-span-2 mt-2">
            <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-md transition-all w-full md:w-auto">Send Message ↗</button>
          </div>
        </form>
        {/* Right: Contact Info */}
        <div className="flex-1 flex flex-col gap-6 justify-start mt-8 md:mt-0">
          <div className="flex items-center gap-4">
            <span className="text-yellow-400 text-2xl">📞</span>
            <div>
              <div className="text-white font-bold">Phone</div>
              <div className="text-white/80">+1-234-567-8901</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-yellow-400 text-2xl">✉️</span>
            <div>
              <div className="text-white font-bold">Email</div>
              <div className="text-white/80">pranjalbabel@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-yellow-400 text-2xl">🐦</span>
            <div>
              <div className="text-white font-bold">X (Twitter)</div>
              <div className="text-white/80">YourTwitterHandle</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-yellow-400 text-2xl">📍</span>
            <div>
              <div className="text-white font-bold">Address</div>
              <div className="text-white/80">Your Address Here</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 