import { ShieldAlert, Mail, MessageCircle, Globe, PhoneCall, Headphones } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

interface ComplianceFooterProps {
  onNavigate: (path: string) => void;
}

export default function ComplianceFooter({ onNavigate }: ComplianceFooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Row 1: 18+ Regulatory Warning & Responsible Gaming Banner */}
        <div className="bg-slate-800/80 rounded-2xl p-4 sm:p-6 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-12 h-12 aspect-square rounded-xl bg-rose-500/20 border-2 border-rose-500 text-rose-400 flex items-center justify-center font-black text-lg shrink-0">
              18+
            </div>
            <div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <h2 className="text-white font-bold text-sm">Age Restriction &amp; Financial Risk Warning</h2>
              </div>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                Participation in real-money sports gaming involves financial risk and may be habit-forming. You must be 18 years of age or older to use this service.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigate('/responsible-gaming')}
              className="min-h-[48px] px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-xs transition-colors"
            >
              Responsible Gaming Policy
            </button>
          </div>
        </div>

        {/* Row 2: Business Transparency & Verified Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 aspect-square rounded-lg bg-emerald-700 text-white font-black flex items-center justify-center text-sm">
                C
              </div>
              <span className="text-white font-extrabold text-base tracking-tight">
                Online Cricket ID Provider Network
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              India’s most trusted Cricket ID provider network. Get your 100% verified online betting ID within 2 minutes with instant UPI deposits, 24/7 fast cashouts, and zero withdrawal fees for Laser247, Lotus365, Betbhai9, and Silver Exchange.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-2xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: wa.link/onlinecricketid</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="min-h-[48px] px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-2 shadow-2xs transition-colors"
              >
                <Headphones className="w-4 h-4 text-emerald-400" />
                <span>24/7 WhatsApp Support</span>
              </button>
            </div>
          </div>

          {/* Official Contact Info */}
          <div className="space-y-2.5">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider">
              Official Business Contact
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:support@onlinecricketid.games" className="hover:text-emerald-400 transition-colors">
                  support@onlinecricketid.games
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 VIP Customer Care Helpline</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>www.onlinecricketid.games</span>
              </li>
              <li className="text-[11px] text-slate-500 pt-1">
                Helpdesk Hours: 24 Hours, 7 Days a Week, 365 Days a Year
              </li>
            </ul>
          </div>

          {/* Quick Legal Links */}
          <div className="space-y-2.5">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider">
              Support &amp; Legal Policies
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-emerald-400 text-emerald-400 font-semibold transition-colors py-1 text-left block"
                >
                  24/7 Official Support &amp; Contact Hub
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/legal')}
                  className="hover:text-emerald-400 text-slate-300 font-medium transition-colors py-1 text-left block"
                >
                  Legal, Privacy &amp; Compliance Hub
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/privacy-policy')}
                  className="hover:text-emerald-400 transition-colors py-1 text-left block"
                >
                  Privacy Policy &amp; Data Security
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/terms-and-conditions')}
                  className="hover:text-emerald-400 transition-colors py-1 text-left block"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/responsible-gaming')}
                  className="hover:text-emerald-400 transition-colors py-1 text-left block"
                >
                  Responsible Gaming Guidelines
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/all-cricket-id')}
                  className="hover:text-emerald-400 transition-colors py-1 text-left block"
                >
                  Master 88+ Cricket ID Directory
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Row 3: Statutory Legal Disclaimer (India Online Gaming Act 2025 Compliance) */}
        <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-400 font-semibold">Important Legal Notice:</strong> In accordance with the Online Gaming Act, 2025 and applicable state regulations in India, real-money sports gaming may be restricted in certain states (including Andhra Pradesh, Telangana, Assam, and Odisha). This platform helps players safely connect with verified and licensed international cricket exchanges.
          </p>
          <p>
            Players must be 18+ and are advised to check local state rules before depositing funds. Please play responsibly, set personal spending limits, and enjoy cricket gaming as entertainment.
          </p>
        </div>

        {/* Row 4: Bottom Copyright */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© 2026 Online Cricket ID Provider. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <span>SSL 256-Bit Encrypted</span>
            <span>•</span>
            <span>Zero Withdrawal Fees</span>
            <span>•</span>
            <span>2-Min WhatsApp Setup</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
