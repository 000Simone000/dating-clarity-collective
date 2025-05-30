
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-slate-800">
            understand<span className="text-blue-600">dating.de</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#why-different" className="text-slate-600 hover:text-slate-800 transition-colors">
              Services
            </a>
            <a href="#services" className="text-slate-600 hover:text-slate-800 transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-slate-600 hover:text-slate-800 transition-colors">
              Success Stories
            </a>
          </div>

          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Book Free Call
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#why-different" className="block px-3 py-2 text-slate-600">
                Why Different
              </a>
              <a href="#services" className="block px-3 py-2 text-slate-600">
                Services
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-slate-600">
                Success Stories
              </a>
              <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Book Free Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
