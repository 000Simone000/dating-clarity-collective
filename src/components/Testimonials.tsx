
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus",
      age: 34,
      profession: "Software Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Sarah completely changed my approach to dating. Within 2 months, I went from zero matches to dating amazing women. Now I'm in a serious relationship with someone incredible.",
      result: "Found serious relationship"
    },
    {
      name: "David",
      age: 38,
      profession: "Marketing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The profile rewrite was a game-changer. My match rate increased 400%, and the quality of women I'm connecting with is so much higher. Sarah knows what she's talking about.",
      result: "400% more matches"
    },
    {
      name: "Alex",
      age: 31,
      profession: "Doctor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Finally, honest feedback about what I was doing wrong. Sarah's coaching helped me build real confidence, not fake pickup artist tactics. I actually enjoy dating now.",
      result: "Built genuine confidence"
    },
    {
      name: "Tom",
      age: 42,
      profession: "Business Owner",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "After my divorce, I had no idea how to date in the modern world. Sarah's coaching got me back out there with confidence. I'm now dating someone wonderful.",
      result: "Successfully re-entered dating"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Real Men, Real Results
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what thoughtful, intelligent men 
            say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-200" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {testimonial.name}, {testimonial.age}
                  </h4>
                  <p className="text-slate-600 text-sm">{testimonial.profession}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-slate-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                <div className="text-sm font-medium text-blue-800">
                  Result: {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Be the Next Success Story?
            </h3>
            <p className="text-slate-600 mb-6">
              Join over 200 men who've transformed their dating lives with honest, 
              effective coaching from a woman's perspective.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Start Your Transformation Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
