
import { ArrowRight, Sparkles } from "lucide-react";

import { Link } from "react-router";
import { LiveStatsDemo } from "./LiveStatsDemo";

export function HeroSection() {


  return (
    <section className="relative min-h-screen flex items-center py-20 bg-linear-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-gray-100">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-cyan-600">
                Smart Job Tracking Made Simple
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Track Every
              <br />
              <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                Job Application
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Stay organized, monitor your progress, and increase your success
              rate with a clean and powerful job tracking dashboard.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              
              <Link to="/dashboard" className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-md text-lg font-medium">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>

              <button
                size="lg"
                variant="outline"
                className="h-12 px-6 text-lg font-semibold"
              >
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-6">
              <div className="text-sm font-semibold text-gray-900">
                10,000+ job seekers
              </div>
              <div className="text-sm text-gray-500">
                are tracking their success with us
              </div>
            </div>
          </div>

          {/* Right Side - Demo Preview */}
          <div className="relative">
            <div className="rounded-2xl shadow-xl border bg-white p-6">
              <LiveStatsDemo />
            </div>

            {/* Simple highlight card */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg border rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Offer Received!</div>
                  <div className="text-xs text-gray-500">
                    Google • 2 mins ago
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}