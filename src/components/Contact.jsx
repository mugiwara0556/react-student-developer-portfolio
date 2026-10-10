
import { useState } from "react";
import { ContactMessage } from "../models/ContactMessage.js";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFeedback("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const contactMessage = new ContactMessage(formData);

    if (!contactMessage.isValid()) {
      setIsError(true);
      setFeedback("Please enter a valid name, email, and message.");
      return;
    }

    setIsError(false);
    setFeedback("Form validated successfully! No message was sent or stored.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section
      id="contact"
      className="mx-auto grid max-w-6xl gap-12 border-t border-white/10 px-6 py-24 md:grid-cols-2"
    >
      <div>
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-gray-400">
          04 — CONTACT
        </p>

        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
          Have an idea worth building?
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
          Use the form below to start a conversation. For this academic
          project, submission demonstrates the interface and form validation.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-300">
          Name
          <input
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.05]"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>

        <label className="block text-sm font-medium text-gray-300">
          Email
          <input
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.05]"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="block text-sm font-medium text-gray-300">
          Message
          <textarea
            className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.05]"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell me about your idea..."
            required
          />
        </label>

        {feedback && (
          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${isError ? "text-red-400" : "text-emerald-300"}`}
          >
            {feedback}
          </p>
        )}

        <button
          className="rounded-lg bg-emerald-300 px-6 py-3 font-semibold text-black transition-transform hover:-translate-y-0.5"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
