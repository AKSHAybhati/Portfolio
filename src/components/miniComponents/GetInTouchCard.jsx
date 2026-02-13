import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

const GetInTouchCard = ({ close }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
    emailjs.send(
      "service_ge9e4dn",     
      "template_jzeqo1i",    
      form,
      "e3SoElfsp1BR9yfjs"       
    )
    .then(() => {
      alert("Message sent ✅");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      alert("Failed ❌");
    });
  };

  return (
    <div className="flex flex-col gap-5 w-2/4">
      <div
        className="close cursor-pointer font-bold text-2xl flex justify-end"
        onClick={close}
      >
        <i class="bi bi-x-lg"></i>
      </div>
      <div className="name flex gap-5">
        <div className="nameCard flex flex-col w-1/2 justify-center gap-3">
          <div className="topname">Name</div>
          <input
          name="name"
          value={form.name}
          onChange={handleChange}
            className="px-5 py-3 border border-gray-200 border-b-1 rounded-lg focus:outline-none"
            placeholder="Your Name"
          ></input>
        </div>
        <div className="emailCard flex flex-col flex-1 justify-center gap-3">
          <div className="topname">Email</div>
          <input
          name="email"
          value={form.email}
          onChange={handleChange}
            className="px-5 py-3 border border-gray-200 rounded-lg focus:outline-none"
            placeholder="your@email.com"
          ></input>
        </div>
      </div>
      <div className="emailCard flex flex-col gap-3">
        <div className="topname">Message</div>
        <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
          className="px-5 py-3 border border-gray-200 rounded-lg h-32 focus:outline-none resize-none"
          placeholder=""
        ></textarea>
      </div>
      <motion.div
        whileTap={{ scale: 0.92, y: 2 }}
        onClick={sendEmail}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="button flex justify-center bg-black text-slate-200 p-5 rounded-full"
      >
        <div className="message">Send Message</div>
      </motion.div>
    </div>
  );
};

export default GetInTouchCard;
