
import { Heart, Users, Brain, Target } from "lucide-react";

const WhyDifferent = () => {
  const features = [
    {
      icon: Heart,
      title: "Woman's Perspective",
      description: "I coach both men and women, so I know exactly what women find attractive — and what turns them off."
    },
    {
      icon: Brain,
      title: "Emotionally Intelligent",
      description: "Beyond surface tactics, we build genuine confidence and emotional intelligence that creates lasting connections."
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "No endless theory. We focus on practical strategies that get you real dates with quality women."
    },
    {
      icon: Users,
      title: "No Pickup Artist BS",
      description: "Respectful, authentic approaches that honor both you and the women you're interested in."
    }
  ];

  return (
    <section id="why-different" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why I'm Different From Other Dating Coaches
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Most dating advice comes from men guessing what women want. 
            I actually know — because I am one, and I coach them too.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                The Real Talk You Need
              </h3>
              <p className="text-slate-600 mb-6">
                "I've been coaching men for 5 years and women for 3. The biggest revelation? 
                Most dating advice for men is completely wrong about what women actually want. 
                Let me show you what really works."
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" 
                  alt="Dating coach" 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-slate-800">Sarah, Dating Coach</div>
                  <div className="text-sm text-slate-600">Certified Relationship Expert</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <blockquote className="text-slate-700 italic mb-4">
                "Sarah's approach was refreshingly honest. No games, no manipulation — just real strategies 
                that helped me connect with amazing women. I'm now in a 8-month relationship with someone incredible."
              </blockquote>
              <div className="text-sm text-slate-600">— Marcus, 34, Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
