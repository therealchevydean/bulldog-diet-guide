import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "French Bulldog Diet Guide | Safe Foods, BOAS Nutrition & Sensitive Stomach Guide",
  description: "Complete veterinary nutrition guide for French Bulldogs. Discover safe human foods, toxic hazards, allergy-safe proteins, slow-feeder bowls for gas, and joint supplements.",
  keywords: ["French bulldog diet", "can french bulldogs eat", "frenchie nutrition guide", "french bulldog safe foods", "frenchie sensitive stomach"],
  openGraph: {
    title: "French Bulldog Diet Guide | Food Safety & Health Guide",
    description: "Veterinary-informed food safety and nutrition guide designed specifically for French Bulldogs.",
    url: "https://frenchbulldogdietguide.com",
    siteName: "French Bulldog Diet Guide",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-xl font-black text-rose-600 tracking-tight">
              <span>🐶</span>
              <span>FrenchieDietGuide</span>
            </a>
            <nav className="flex items-center gap-6 text-sm font-semibold text-slate-600">
              <a href="/" className="hover:text-rose-600 transition">Food Database</a>
              <a href="/#nutrition-guide" className="hover:text-rose-600 transition">BOAS & Nutrition</a>
              <a href="/#gear" className="hover:text-rose-600 transition">Slow Feeders & Digestion</a>
            </nav>
          </div>
        </header>

        <div className="flex-grow">
          {children}
        </div>

        <footer className="bg-white border-t border-slate-200 mt-20 py-10">
          <div className="max-w-6xl mx-auto px-4 text-center text-slate-500 text-sm space-y-3">
            <p className="font-semibold text-slate-700">French Bulldog Diet Guide &copy; {new Date().getFullYear()} &bull; Built for Frenchie Longevity & Health</p>
            <p className="max-w-xl mx-auto text-xs leading-relaxed text-slate-400">
              Disclaimer: This guide is for educational purposes only and is not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian regarding your dog's allergies and breathing condition.
            </p>
            <p className="text-xs text-slate-400">
              Disclosure: As an Amazon Associate, we earn from qualifying purchases at zero extra cost to you.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
