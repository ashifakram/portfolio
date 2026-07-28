import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdTsffoi_qMa4DlVTcTo2gtMNgFAySdFdyjaxkXHcYtut3p7Q/formResponse';

const ENTRY_IDS = {
  name: 'entry.609046691',
  email: 'entry.543008322',
  subject: 'entry.1100906',
  message: 'entry.500265408',
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [formState, setFormState] = useState('idle'); // 'idle' | 'submitting' | 'submitted' | 'error'

  const onSubmit = async (data) => {
    setFormState('submitting');

    try {
      const formData = new FormData();
      formData.append(ENTRY_IDS.name, data.name);
      formData.append(ENTRY_IDS.email, data.email);
      formData.append(ENTRY_IDS.subject, data.subject);
      formData.append(ENTRY_IDS.message, data.message);

      // Submit to Google Forms endpoint
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setFormState('submitted');
      reset();

      setTimeout(() => {
        setFormState('idle');
      }, 5000);
    } catch (error) {
      console.error("Form submission failed:", error);
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="py-16 max-w-[1200px] mx-auto px-6 relative">
      
      {/* Background Glow Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6750a4]/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#63597c]/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center lg:text-left"
      >
        <span className="font-['Geist_Mono'] text-xs uppercase tracking-[0.2em] text-[#cfbcff] mb-4 block font-medium">
          Get in Touch
        </span>
        <h2 className="font-['Hanken_Grotesk'] text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-4">
          Let's Build Something <br className="hidden sm:block" />
          <span className="text-[#cfbcff]">Amazing Together</span>
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Currently exploring new opportunities and open to discussions about Java, Spring Boot architectures, or React-based frontend challenges.
        </p>
      </motion.div>

      {/* Contact Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        
        {/* Left Column: Location, Email, Phone Cards */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Location */}
            <div className="glass-card p-5 rounded-2xl flex items-center gap-4 group border border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#6750a4]/20 border border-[#6750a4]/30 flex items-center justify-center group-hover:bg-[#6750a4]/40 transition-colors">
                <span className="material-symbols-outlined text-[#cfbcff] text-2xl">location_on</span>
              </div>
              <div>
                <p className="font-['Geist_Mono'] text-xs text-gray-400">Location</p>
                <p className="font-['Inter'] text-base font-semibold text-white">Bengaluru, KA, India</p>
              </div>
            </div>

            {/* Email */}
            <div className="glass-card p-5 rounded-2xl flex items-center gap-4 group border border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#6750a4]/20 border border-[#6750a4]/30 flex items-center justify-center group-hover:bg-[#6750a4]/40 transition-colors">
                <span className="material-symbols-outlined text-[#cfbcff] text-2xl">mail</span>
              </div>
              <div>
                <p className="font-['Geist_Mono'] text-xs text-gray-400">Email</p>
                <a href="mailto:ashifakram1999@gmail.com" className="font-['Inter'] text-base font-semibold text-[#e0d2ff] hover:text-white transition-colors">
                  ashifakram1999@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card p-5 rounded-2xl flex items-center gap-4 group border border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#6750a4]/20 border border-[#6750a4]/30 flex items-center justify-center group-hover:bg-[#6750a4]/40 transition-colors">
                <span className="material-symbols-outlined text-[#cfbcff] text-2xl">call</span>
              </div>
              <div>
                <p className="font-['Geist_Mono'] text-xs text-gray-400">Phone</p>
                <a href="tel:+917663887024" className="font-['Inter'] text-base font-semibold text-[#e0d2ff] hover:text-white transition-colors">
                  +91 7663887024
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/ashifakram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-[#6750a4]/30 hover:border-[#cfbcff]/50 transition-all border border-white/10 text-white"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashif-akram-893996227"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-[#6750a4]/30 hover:border-[#cfbcff]/50 transition-all border border-white/10 text-white hover:text-[#0A66C2]"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-white/10">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6750a4]/20 rounded-full blur-[80px] pointer-events-none" />

          {formState === 'submitted' && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-['Inter'] flex items-center gap-3">
              <span className="material-symbols-outlined text-emerald-400">check_circle</span>
              Thank you! Your message has been recorded and submitted directly to Google Sheets.
            </div>
          )}

          {formState === 'error' && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-sm font-['Inter'] flex items-center gap-3">
              <span className="material-symbols-outlined text-rose-400">error</span>
              Oops! Something went wrong while sending your message. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block font-['Geist_Mono'] text-xs text-gray-400 uppercase" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...register("name", { required: "Full name is required" })}
                  className="w-full bg-[#16171d]/90 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#cfbcff] transition-all font-['Inter'] text-sm"
                />
                {errors.name && (
                  <span className="text-xs text-rose-400 font-['Geist_Mono']">{errors.name.message}</span>
                )}
              </div>

              <div className="space-y-2">
                <label className="block font-['Geist_Mono'] text-xs text-gray-400 uppercase" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                  })}
                  className="w-full bg-[#16171d]/90 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#cfbcff] transition-all font-['Inter'] text-sm"
                />
                {errors.email && (
                  <span className="text-xs text-rose-400 font-['Geist_Mono']">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-['Geist_Mono'] text-xs text-gray-400 uppercase" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Project Inquiry / Opportunity"
                {...register("subject", { required: "Subject is required" })}
                className="w-full bg-[#16171d]/90 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#cfbcff] transition-all font-['Inter'] text-sm"
              />
              {errors.subject && (
                <span className="text-xs text-rose-400 font-['Geist_Mono']">{errors.subject.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="block font-['Geist_Mono'] text-xs text-gray-400 uppercase" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell me about your project or technical challenge..."
                {...register("message", { required: "Message is required" })}
                className="w-full bg-[#16171d]/90 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#cfbcff] transition-all font-['Inter'] text-sm resize-none"
              />
              {errors.message && (
                <span className="text-xs text-rose-400 font-['Geist_Mono']">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={formState === 'submitting'}
              className={`w-full py-4 rounded-xl font-['Hanken_Grotesk'] font-bold text-base flex items-center justify-center gap-2 transition-all shadow-xl ${
                formState === 'submitted'
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                  : 'bg-[#6750a4] hover:bg-[#4f378a] text-white shadow-[#6750a4]/30 hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              {formState === 'submitting' ? (
                <>
                  <span>Sending...</span>
                  <span className="material-symbols-outlined animate-spin text-xl">refresh</span>
                </>
              ) : formState === 'submitted' ? (
                <>
                  <span>Message Sent to Google Sheets!</span>
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-xl">send</span>
                </>
              )}
            </button>
          </form>
        </div>

      </motion.div>
    </section>
  );
};

export default Contact;
