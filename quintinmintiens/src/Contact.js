import "./index.css";
import React, { useRef, useState } from "react";
import anime from "animejs";
import emailjs from "@emailjs/browser";
import toast, { ToastContainer } from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8hcjgvj",
        "template_h0kmann",
        formRef.current,
        "_peCRG-S1XgJ9cyir"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({ name: "", email: "", message: "" });
          toast.success("Message sent successfully!", {
            duration: 5000,
            type: "success",
            icon: "🚀",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again later.", {
            duration: 5000,
            type: "error",
            icon: "❌",
          });
        }
      );
  };

  const contactRef = React.createRef();
  const formTitleRef = React.createRef();

  const handleClick = () => {
    const form = formRef.current;
    const contact = contactRef.current;
    const formTitle = formTitleRef.current;

    anime({
      targets: contact,
      translateY: ["0%", "-100%"],
      easing: "easeOutExpo",
      duration: 1000,
    });

    anime({
      targets: formTitle,
      opacity: 0,
      easing: "easeOutExpo",
      duration: 500,
      delay: 500,
      complete: function () {
        form.style.display = "block";
        anime({
          targets: form,
          translateY: ["100%", "0%"],
          easing: "easeOutExpo",
          duration: 1000,
        });
      },
    });
  };
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-medium mb-2">Contact</h2>
          <p className="text-lg text-gray-600">Get in touch with me</p>
        </div>
        <div className="max-w-md mx-auto">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="px-8 py-2 rounded-lg text-white bg-purple-600 hover:bg-purple-700"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
