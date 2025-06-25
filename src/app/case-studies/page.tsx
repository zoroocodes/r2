// src/app/case-studies/page.tsx
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import CaseStudiesHero from "@/components/ui/CaseStudiesHero"; // ✅ import it

export const metadata = {
  title: "Case Studies | ReputationOne",
  description:
    "Real-world success stories of clients using ReputationOne for AI-powered reputation management.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <CaseStudiesHero />

          {/* Case Study: Sunil Tulsiani */}
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start border border-white/10 p-8 rounded-2xl bg-white/5">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="/sunil.png"
                alt="Sunil Tulsiani"
                width={300}
                height={300}
                className="rounded-2xl object-cover shadow-lg mb-4"
              />
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold">Sunil Tulsiani</h2>
                <p className="text-sm text-gray-400 mt-1">Real Estate Investor, Author</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Reputation Recovery</h3>
              <ul className="space-y-4 text-gray-300 leading-relaxed">
                <li><strong className="text-white">❌ Problem:</strong> Negative coverage & outdated articles dominated Google Page 1.</li>
                <li><strong className="text-white">🧠 Strategy:</strong> Used AI-generated SEO content + media outreach to elevate positive assets and push down harmful links.</li>
                <li><strong className="text-white">🚀 Result:</strong> 80% of negative results buried in 90 days. Verified interviews + features ranked top.</li>
              </ul>
              <blockquote className="mt-6 p-5 bg-black/30 border-l-4 border-pink-500 text-gray-300 italic">
                “What ReputationOne did for my name online was nothing short of magic. I’m finally proud of what people see when they Google me.”
              </blockquote>

              <div className="mt-12 bg-black/30 p-6 rounded-2xl border border-white/10">
                <h4 className="text-xl font-semibold mb-4 text-white">Before vs After: Google Search Impact</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/40 p-4 rounded-lg border border-red-500">
                    <h5 className="text-lg font-medium text-red-400 mb-2">🔴 Before</h5>
                    <ul className="text-sm text-red-300 list-disc list-inside space-y-1">
                      <li>Old fraud allegations in top 3 results</li>
                      <li>Negative forum discussions</li>
                      <li>Outdated articles from 2017–2018</li>
                    </ul>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-green-500">
                    <h5 className="text-lg font-medium text-green-400 mb-2">🟢 After</h5>
                    <ul className="text-sm text-green-300 list-disc list-inside space-y-1">
                      <li>Featured in Forbes & MarketWatch</li>
                      <li>Verified interviews ranked top</li>
                      <li>AI-written bio articles on Page 1</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study: Issam Shalhoub */}
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start border border-white/10 p-8 rounded-2xl bg-white/5 mt-12">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="/issam.png"
                alt="Issam Shalhoub"
                width={300}
                height={300}
                className="rounded-2xl object-cover shadow-lg mb-4"
              />
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold">Issam Shalhoub</h2>
                <p className="text-sm text-gray-400 mt-1">Real Estate</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Discreet Reputation Cleanup</h3>
              <ul className="space-y-4 text-gray-300 leading-relaxed">
                <li><strong className="text-white">❌ Problem:</strong> Negative links and unwanted attention surfaced in Google results.</li>
                <li><strong className="text-white">🧠 Strategy:</strong> Focused on silent suppression of harmful content while avoiding visibility spikes. Prioritized low-profile digital asset growth.</li>
                <li><strong className="text-white">🚀 Result:</strong> All negative results wiped from top pages. Reputation maintained with no new public digital footprint.</li>
              </ul>
              <blockquote className="mt-6 p-5 bg-black/30 border-l-4 border-blue-500 text-gray-300 italic">
                “I wanted peace of mind — no headlines, no noise. ReputationOne delivered exactly that.”
              </blockquote>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}