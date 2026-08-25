import { MessageCircle, Mail, Globe } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

export default function Footer() {
  return (
    <footer className="bg-[#01100a] border-t border-emerald-500/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <span className="text-white font-extrabold text-lg">C</span>
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-lg">Online Cricket ID</span>
                <span className="block text-emerald-400 text-xs font-medium tracking-wider uppercase">Trusted Provider</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Trusted Cricket ID Provider offering instant activation for Online Cricket ID, IPL Cricket ID, and All Cricket IDs with 24/7 support. Best Online Betting ID with fast withdrawals and competitive odds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'ID Types', href: '#id-types' },
                { label: 'How to Get ID', href: '#how-to-get' },
                { label: 'IPL 2026', href: '#ipl-2026' },
                { label: 'FAQs', href: '#faqs' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  WhatsApp: wa.link/onlinecricketid
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Globe className="w-4 h-4 text-emerald-400" />
                www.onlinecricketid.xyz
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-emerald-400" />
                support@onlinecricketid.xyz
              </li>
            </ul>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="border-t border-white/5 pt-8 mb-6">
          <p className="text-gray-500 text-xs leading-relaxed max-w-4xl">
            <strong className="text-gray-400">Disclaimer:</strong> As of August 2026, real-money online games including cricket betting are banned under the Online Gaming Act, 2025 in India. This website is for informational purposes only. Please consult a qualified lawyer for specific legal advice regarding online betting in your jurisdiction. We do not promote or facilitate illegal activities. Users are solely responsible for complying with applicable laws in their region.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Online Cricket ID. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">Terms & Conditions</a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">Responsible Gaming</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
