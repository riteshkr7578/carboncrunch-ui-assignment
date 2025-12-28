import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-hidden">
      
      {/* PURPLE GLOW */}
      <div className="absolute right-0 top-0 w-[420px] h-[420px] bg-purple-600/60 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-10 py-20">

        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LOGO */}
          <h2 className="text-2xl font-bold tracking-wide">
            NFT<span className="text-purple-400">me</span>
          </h2>

          {/* NAV LINKS */}
          <nav className="flex gap-10 text-gray-300">
            <a href="#" className="hover:text-white transition">Explore</a>
            <a href="#" className="hover:text-white transition">Marketplace</a>
            <a href="#" className="hover:text-white transition">Artists</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaTwitter />} />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-white/10" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-300">
          <span className="hover:text-white transition cursor-pointer">
            Privacy policy
          </span>
          <span className="hidden md:block">|</span>
          <span>
            Copyright © Kartik Bansal 2022. All Rights Reserved.
          </span>
          <span className="hidden md:block">|</span>
          <span className="hover:text-white transition cursor-pointer">
            Terms of service
          </span>
        </div>

      </div>
    </footer>
  );
}

/* SOCIAL ICON */
function SocialIcon({ icon }) {
  return (
    <div
      className="w-10 h-10 rounded-full bg-white text-black
                 flex items-center justify-center
                 hover:scale-110 transition cursor-pointer"
    >
      {icon}
    </div>
  );
}
