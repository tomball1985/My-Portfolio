import { ArrowUpRight, Mail, BookOpen } from 'lucide-react'
import { LinkedinIcon } from '../components/ui/linkedin-icon'

export function Connect() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's connect</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Excited to discuss new opportunities and learn from those sharing content on marketing, growth, GTM and AI.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
          <div className="space-y-6">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tomball"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-xl border border-gray-100 hover:border-[hsl(264,67%,52%)]/20 hover:shadow-lg hover:shadow-purple-100/20 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0A66C2] flex items-center justify-center shrink-0">
                <LinkedinIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-0.5">LinkedIn</h3>
                <p className="text-sm text-gray-500">Connect and say hello.</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[hsl(264,67%,52%)] transition-colors" />
            </a>

            {/* Email */}
            <a
              href="mailto:tom.ball@live.co.uk"
              className="group flex items-center gap-5 p-6 rounded-xl border border-gray-100 hover:border-[hsl(264,67%,52%)]/20 hover:shadow-lg hover:shadow-purple-100/20 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[hsl(264,67%,52%)] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-0.5">Email</h3>
                <p className="text-sm text-gray-500">For the more formal exchange.</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[hsl(264,67%,52%)] transition-colors" />
            </a>

            {/* Substack — Coming Soon */}
            <div className="flex items-center gap-5 p-6 rounded-xl border border-gray-100 bg-gray-50/50">
              <div className="w-14 h-14 rounded-xl bg-[#FF6719] flex items-center justify-center shrink-0 opacity-70">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-bold text-gray-900">Substack</h3>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">Coming soon</span>
                </div>
                <p className="text-sm text-gray-500">Writing on marketing, GTM and AI experiments.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}
