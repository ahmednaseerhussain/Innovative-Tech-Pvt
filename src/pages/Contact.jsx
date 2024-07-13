import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ParticlesContainer from "../components/ParticlesContainer/ParticlesContainer";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8c72xmv",
        "template_56nkay7",
        {
          from_name: form.name,
          to_name: "Ahmed Naseer Hussain",
          from_email: form.email,
          to_email: "ahmednaseerhussain@gmail.com",
          message: form.message,
        },
        "VKKNFWUT-SVZz6ell"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className=" flex xl:flex-row flex-col-reverse overflow-hidden"
    >
      <motion.div
        variants={{}}
        className="flex-[0.75] bg-white dark:bg-black dark:text-white p-8"
      >
        {/* <p className="text-3xl sm:text-3xl font-semibold">Get in touch</p> */}
        <p className=" text-2xl sm:text-3xl font-semibold">Contact <span className="text-gradient font-bold text-[48px]">.</span></p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="bg-white dark:bg-black dark:text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-gray-200 dark:bg-gray-800 py-4 px-6 placeholder:text-secondary dark:placeholder-gray-400 text-black dark:text-gray-100 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className=" bg-white dark:bg-black dark:text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-gray-200 dark:bg-gray-800 py-4 px-6 placeholder:text-secondary dark:placeholder-gray-400 text-black dark:text-gray-100 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="bg-white dark:bg-black dark:text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-gray-200 dark:bg-gray-800 py-4 px-6 placeholder:text-secondary dark:placeholder-gray-400 text-black dark:text-gray-100 rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="primary-btn text-lg font-medium"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={{}}
        className=" bg-white dark:bg-black xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
      {/* <ParticlesContainer className='h-full'/> */}
        {/* Add any content or component for the right side of the contact section */}
      </motion.div>
    </div>
  );
};

export default Contact;
