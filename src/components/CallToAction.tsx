
import { ArrowRight, Calendar, MessageCircle, CheckCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop Wondering "What If" — Start Knowing "What Works"
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Every day you wait is another day of missed connections. 
            Let's get you the clarity and confidence you need to attract amazing women.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="bg-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-800">Book Your Free Discovery Call</h3>
            </div>
            <p className="text-slate-600 mb-6">
              15-minute conversation to understand your specific situation and see if we're a good fit. 
              No pressure, just honest advice about your next steps.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-slate-600">Completely free, no strings attached</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-slate-600">Get personalized advice immediately</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-slate-600">See if my approach resonates with you</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2">
              Schedule Free Call
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">We Talk (15 mins)</h4>
                  <p className="text-slate-300">I learn about your dating challenges and goals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">I Give You Clarity</h4>
                  <p className="text-slate-300">Honest feedback about what's working and what isn't.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">You Decide</h4>
                  <p className="text-slate-300">Choose if you want to work together or go solo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-slate-300">Men Coached</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">5 Years</div>
              <div className="text-slate-300">Coaching Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 understanddating.de · Helping thoughtful men create genuine connections
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
