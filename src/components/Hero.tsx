
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Stop Guessing.
              <br />
              <span className="text-blue-600">Start Connecting.</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Get honest feedback from a woman's perspective. No pickup lines, no mind games — 
              just real strategies that create genuine attraction and lasting connections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg flex items-center justify-center gap-2">
                Book Your Confidence Clarity Call
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-slate-400 transition-colors font-medium text-lg">
                View Profile Glow-Up
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Free 15-min discovery call</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Woman's perspective guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>No pickup artist BS</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face" 
                alt="Confident man smiling" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-slate-800 mb-1">200+</div>
              <div className="text-sm text-slate-600">Men coached to success</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">5★</div>
              <div className="text-sm text-slate-600">Average rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
