import { useState } from 'react'
import { ArrowUpRight, Send, Linkedin, BookOpen } from 'lucide-react'

export function Connect() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production this would send an email — for now we show confirmation
    setSubmitted(true)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's connect</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            I'm always open to conversations about marketing, revenue growth, or new opportunities. Choose your preferred way to get in touch.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr,400px] gap-12">
            {/* Left: Links */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find me on</h2>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/tomball"
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-5 p-6 rounded-xl border border-gray-100 hover:border-[hsl(264,67%,52%)]/20 hover:shadow-lg hover:shadow-purple-100/20 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0A66C2] flex items-center justify-center shrink-0">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-0.5">LinkedIn</h3>
                  <p className="text-sm text-gray-500">Connect with me professionally. Let's expand our networks.</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[hsl(264,67%,52%)] transition-colors" />
              </a>

              {/* Substack */}
              <a
                href="https://substack.com/@tomball"
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-5 p-6 rounded-xl border border-gray-100 hover:border-[hsl(152,55%,42%)]/20 hover:shadow-lg hover:shadow-green-100/20 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#FF6719] flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-0.5">Substack</h3>
                  <p className="text-sm text-gray-500">Read my writing on marketing, leadership, and B2B growth.</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[hsl(152,55%,42%)] transition-colors" />
              </a>

              {/* Info block */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-2">Prefer email?</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Use the contact form to send me a message directly. I'll get back to you within a few days. Or find me through LinkedIn if you'd prefer a quicker response.
                </p>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 h-fit">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Send a message</h2>
              <p className="text-sm text-gray-400 mb-6">I'll get back to you.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-[hsl(152,55%,42%)]/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-5 h-5 text-[hsl(152,55%,42%)]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Message sent!</h3>
                  <p className="text-sm text-gray-500">Thanks for reaching out, {form.name}. I'll be in touch soon.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                    className="mt-4 text-sm text-[hsl(264,67%,52%)] font-medium hover:underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(264,67%,52%)]/20 focus:border-[hsl(264,67%,52%)]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(264,67%,52%)]/20 focus:border-[hsl(264,67%,52%)]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(264,67%,52%)]/20 focus:border-[hsl(264,67%,52%)] resize-none"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[hsl(264,67%,52%)] text-white font-medium rounded-lg hover:bg-[hsl(264,67%,46%)] transition-colors"
                  >
                    <Send className="w-4 h-4" /> Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
