import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950 overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(6, 182, 212, 0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-800/50">
          {/* Brand */}
          <div className="space-y-3">
            <span className="text-xl font-bold tracking-widest">
              <span className="text-cyan-400">ALTI</span>
              <span className="text-slate-50">SCAN</span>
            </span>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Experts en photogrammétrie, inspection technique et imagerie
              aérienne par drone.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              Suivez-nous
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Altiscan. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Conçu avec
            <span className="text-cyan-600 mx-1">▲</span>
            précision
          </p>
        </div>
      </div>
    </footer>
  );
}
