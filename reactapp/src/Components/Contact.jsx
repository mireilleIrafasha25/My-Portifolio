import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";
import axios from "axios"; // Ensure axios is imported

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message1, setMessage1] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://spotsure-backend-e4nq.onrender.com/SpotSure/contact/addMessage", { 
        email,
        name,
        message1,
        phone,
        subject,
      });
      Notify.success(response.data.message);
      setName("");
      setEmail("");
      setMessage1("");
      setPhone("");
      setSubject("");
      setTimeout(() => {
        navigate("/contact");
      }, 1000);
    } catch (error) {
      // Enhanced error handling
      Notify.failure(error.response?.data?.message || error.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2E2E2E] flex items-center justify-center p-6">
      <form className="w-full max-w-2xl bg-[#2E2E2E] p-8 rounded-lg" onSubmit={handleSubmit}>
        <motion.h2 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl text-white mb-6 text-center"
        >
          Contact <span className="text-[#D4AF37]">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            value={name} 
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="col-span-1 md:col-span-2 bg-[#2E2E2E] text-white rounded-lg p-3 border border-[#D4AF37] focus:outline-none focus:border-[#D4AF37]"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="bg-[#2E2E2E] text-white rounded-lg p-3 border border-[#D4AF37] focus:outline-none focus:border-[#D4AF37]"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            required
            className="bg-[#2E2E2E] text-white rounded-lg p-3 border border-[#D4AF37] focus:outline-none focus:border-[#D4AF37]"
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            required
            className="col-span-1 md:col-span-2 bg-[#2E2E2E] text-white rounded-lg p-3 border border-[#D4AF37] focus:outline-none focus:border-[#D4AF37]"
          />
        </motion.div>

        <motion.textarea
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          placeholder="Your Message"
          value={message1}
          onChange={(e) => setMessage1(e.target.value)}
          className="w-full bg-[#2E2E2E] text-white rounded-lg p-3 border border-[#D4AF37] focus:outline-none focus:border-[#D4AF37] mt-4"
          rows="6"
          required
        ></motion.textarea>

        <motion.button
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          type="submit"
          disabled={loading}
          className="mt-6 w-full text-black rounded-lg p-3 text-center font-semibold bg-[#D4AF37] focus:outline-none focus:border-[#D4AF37]"
        >
          {loading ? 'Sending' : 'Send Message'}
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
