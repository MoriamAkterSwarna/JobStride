import { useState } from "react";
import { Link } from "react-router";
import { Menu, Plus, X } from "lucide-react";


const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

 function Navbar() {
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
            <div
              className="flex items-center gap-3 cursor-pointer"
             
            >
              <div className="h-9 w-9 rounded-lg bg-linear-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
                JS
              </div>
              <h1 className="text-lg font-bold">
                <span className="text-cyan-500">Job</span>
                <span className="text-purple-500">stride</span>
              </h1>
            </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  className="text-gray-600 hover:text-gray-900 font-medium transition"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              
              <Link to="/add-job" className="bg-linear-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
             <Plus></Plus> Add Job
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white shadow-md md:hidden z-40">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                
                className="block w-full text-left text-gray-700 font-medium"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t space-y-3">
             
                <Link to="/dashboard" className="w-full text-center bg-linear-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2">
                <Plus></Plus> Add Job
                </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;