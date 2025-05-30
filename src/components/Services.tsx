
import { Calendar, FileText, ArrowRight, Clock, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "1:1 Confidence Clarity Call",
      subtitle: "Personal Dating Coaching Session",
      price: "€150",
      duration: "90 minutes",
      description: "Deep-dive session where we analyze your dating patterns, build confidence strategies, and create your personalized action plan.",
      features: [
        "Complete dating life audit",
        "Confidence-building techniques",
        "Conversation strategies that work",
        "Body language & presence coaching",
        "Personalized action plan",
        "2 weeks of follow-up support"
      ],
      cta: "Book Your Call",
      popular: true
    },
    {
      icon: FileText,
      title: "Profile Glow-Up",
      subtitle: "Dating App Bio Audit + Rewrite",
      price: "€75",
      duration: "48-hour turnaround",
      description: "Professional dating profile makeover that showcases your best self and attracts quality matches.",
      features: [
        "Complete profile audit",
        "Bio rewrite from scratch",
        "Photo selection guidance",
        "Platform-specific optimization",
        "Match rate improvement tips",
        "One round of revisions"
      ],
      cta: "Upgrade My Profile"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Choose Your Path to Dating Success
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you need comprehensive coaching or just want to optimize your dating profile, 
            I have the solution that fits your needs and timeline.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-sm border-2 transition-all hover:shadow-lg ${service.popular ? 'border-blue-200 relative' : 'border-gray-100'}`}>
              {service.popular && (
                <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                  <p className="text-slate-600">{service.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold text-blue-600">{service.price}</div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock size={16} />
                  <span>{service.duration}</span>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${service.popular 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}>
                {service.cta}
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Not sure which option is right for you?
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium underline">
            Schedule a free 15-minute discovery call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
