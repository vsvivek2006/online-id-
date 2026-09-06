import { Star, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Mumbai, MH',
    avatar: 'RS',
    avatarBg: 'from-emerald-500 to-teal-600',
    platform: 'Laser247',
    rating: 5,
    text: 'Bhai ekdum mast service hai! 2 minute mein ID mil gayi aur pehli withdrawal bhi 5 minute mein aa gayi. WhatsApp pe bahut fast response milta hai. Highly recommended!',
    timeAgo: '2 days ago',
    verified: true,
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Ahmedabad, GJ',
    avatar: 'PP',
    avatarBg: 'from-violet-500 to-purple-600',
    platform: 'Lotus365',
    rating: 5,
    text: 'Maine pehle kaafi platforms try kiye but yahan ka support sabse best hai. 24/7 available rehte hain aur koi bhi problem instantly solve hoti hai. Lotus365 ka ID liya tha, ab Betbhai9 bhi le liya.',
    timeAgo: '5 days ago',
    verified: true,
  },
  {
    id: 3,
    name: 'Arjun Singh',
    location: 'Jaipur, RJ',
    avatar: 'AS',
    avatarBg: 'from-amber-500 to-orange-600',
    platform: 'Betbhai9',
    rating: 5,
    text: 'IPL season mein yahan se ID liya tha. Zero deduction pe withdrawal aur odds bhi ekdum tight milte hain. Support team ne raat 2 baje bhi help ki. Jabardast platform hai!',
    timeAgo: '1 week ago',
    verified: true,
  },
  {
    id: 4,
    name: 'Vikram Nair',
    location: 'Kochi, KL',
    avatar: 'VN',
    avatarBg: 'from-sky-500 to-blue-600',
    platform: 'Silver Exchange',
    rating: 5,
    text: 'Silver Exchange ke liye ID liya. ₹100 mein shuru kiya aur ab regularly use karta hoon. Withdrawal speed unbelievable hai — 3 minute flat! Ye log genuine hain.',
    timeAgo: '2 weeks ago',
    verified: true,
  },
  {
    id: 5,
    name: 'Deepak Yadav',
    location: 'Lucknow, UP',
    avatar: 'DY',
    avatarBg: 'from-rose-500 to-pink-600',
    platform: 'Laser247',
    rating: 5,
    text: 'Dost ne refer kiya tha, pehle thoda doubt tha. Lekin ID milte hi sab clear ho gaya. Process bilkul smooth hai, ek baar try karo aur phir aur kahin nahi jaoge.',
    timeAgo: '3 weeks ago',
    verified: true,
  },
  {
    id: 6,
    name: 'Sneha Joshi',
    location: 'Pune, MH',
    avatar: 'SJ',
    avatarBg: 'from-teal-500 to-emerald-600',
    platform: 'Lotus365',
    rating: 5,
    text: 'Mujhe thodi help chahiye thi ID activate karne mein — team ne screen share karke guide kiya. Itna patient support maine pehle kabhi nahi dekha. 10/10 experience.',
    timeAgo: '1 month ago',
    verified: true,
  },
];

interface TestimonialsProps {
  onNavigate?: (path: string) => void;
}

const getPlatformSlug = (platformName: string) => {
  switch (platformName.toLowerCase()) {
    case 'laser247':
      return '/reviews/laser247';
    case 'lotus365':
      return '/reviews/lotus365';
    case 'betbhai9':
      return '/reviews/betbhai9';
    case 'silver exchange':
      return '/reviews/silver-exchange';
    default:
      return '/all-cricket-id';
  }
};

export default function Testimonials({ onNavigate }: TestimonialsProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
            Real User Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Trusted by <span className="text-emerald-700">10,000+ Players</span> Across India
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Every review is from a verified user who has activated and used their Cricket ID through our platform.
          </p>
        </div>

        {/* Aggregate Rating Badge */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 px-4 sm:px-5 py-3 bg-white border border-slate-200 rounded-2xl shadow-2xs max-w-full text-center">
            <div>
              <div className="text-3xl font-black text-slate-900 leading-none">4.9</div>
              <div className="text-[10px] text-slate-500 font-medium mt-0.5">out of 5</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-200" />
            <div>
              <div className="flex items-center justify-center gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Based on 10,000+ reviews</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-200" />
            <div className="flex items-center justify-center gap-1.5 text-emerald-700">
              <BadgeCheck className="w-5 h-5 fill-emerald-100" />
              <span className="text-xs font-bold">All Verified</span>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs hover:border-emerald-300 transition-all p-5 flex flex-col gap-4"
            >
              {/* Top: Avatar + Name + Verified */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 aspect-square rounded-full bg-gradient-to-br ${t.avatarBg} text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-slate-900 text-sm leading-tight">{t.name}</span>
                      {/* Verified Badge */}
                      {t.verified && (
                        <BadgeCheck
                          className="w-4 h-4 text-emerald-600 shrink-0"
                          aria-label="Verified user"
                        />
                      )}
                    </div>
                    <span className="text-slate-400 text-[11px] font-medium">{t.location}</span>
                  </div>
                </div>

                {/* Platform Review Link */}
                <a
                  href={getPlatformSlug(t.platform)}
                  onClick={(e) => handleNav(e, getPlatformSlug(t.platform))}
                  className="shrink-0 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wide hover:bg-emerald-100 hover:border-emerald-300 transition-colors"
                  title={`${t.platform} Review`}
                >
                  {t.platform}
                </a>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Footer: Time + Verified badge label */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-slate-400 text-[11px] font-medium">{t.timeAgo}</span>
                {t.verified && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                    <BadgeCheck className="w-3 h-3" />
                    Verified User
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
