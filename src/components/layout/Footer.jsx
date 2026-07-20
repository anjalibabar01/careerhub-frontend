import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= Company ================= */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="bg-violet-600 p-3 rounded-xl">
                <BriefcaseBusiness
                  className="text-white"
                  size={24}
                />
              </div>

              <h2 className="text-2xl font-bold text-white">
                CareerHub
              </h2>

            </div>

            <p className="text-gray-400 leading-7">
              Connecting talented professionals with top companies
              through a secure, modern and AI-powered recruitment
              platform.
            </p>

            <div className="flex gap-4 mt-8">

              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaFacebookF className="text-white" size={18} />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaXTwitter className="text-white" size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaLinkedinIn className="text-white" size={18} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/anjalibabar01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaGithub className="text-white" size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/YOUR-INSTAGRAM-ID"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaInstagram className="text-white" size={18} />
              </a>

            </div>

          </div>

          {/* ================= Quick Links ================= */}

          <div>

            <h3 className="text-white font-semibold text-xl mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-violet-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/jobs"
                  className="hover:text-violet-400 transition"
                >
                  Jobs
                </Link>
              </li>

              <li>
                <a
                  href="/#companies"
                  className="hover:text-violet-400 transition"
                >
                  Companies
                </a>
              </li>

              <li>
                <a
                  href="/#about"
                  className="hover:text-violet-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/#contact"
                  className="hover:text-violet-400 transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* ================= Resources ================= */}

          <div>

            <h3 className="text-white font-semibold text-xl mb-6">
              Resources
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link
                  to="/career-advice"
                  className="hover:text-violet-400 transition"
                >
                  Career Advice
                </Link>
              </li>

              <li>
                <Link
                  to="/resume-tips"
                  className="hover:text-violet-400 transition"
                >
                  Resume Tips
                </Link>
              </li>

              <li>
                <Link
                  to="/interview-preparation"
                  className="hover:text-violet-400 transition"
                >
                  Interview Preparation
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-violet-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="hover:text-violet-400 transition"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>

          </div>

          {/* ================= Contact ================= */}

          <div>

            <h3 className="text-white font-semibold text-xl mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3">
                <MapPin
                  className="text-violet-400 mt-1"
                  size={18}
                />
                <span>Pune, Maharashtra, India</span>
              </div>

              <div className="flex gap-3">
                <Phone
                  className="text-violet-400 mt-1"
                  size={18}
                />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <Mail
                  className="text-violet-400 mt-1"
                  size={18}
                />
                <span>support@careerhub.com</span>
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8 text-center">

          <p className="text-gray-500">
            © 2026 CareerHub. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;