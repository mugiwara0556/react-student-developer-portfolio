function Contact() {
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
          project, submission simply demonstrates the interface and form
          structure.
        </p>
      </div>

      <form
        className="space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="block text-sm font-medium text-gray-300">
          Name
          <input
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.05]"
            type="text"
            placeholder="Your name"
          />
        </label>

        <label className="block text-sm font-medium text-gray-300">
          Email
          <input
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.05]"
            type="email"
            placeholder="you@example.com"
          />
        </label>

        <label className="block text-sm font-medium text-gray-300">
          Message
          <textarea
            className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.05]"
            rows="5"
            placeholder="Tell me about your idea..."
          />
        </label>

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