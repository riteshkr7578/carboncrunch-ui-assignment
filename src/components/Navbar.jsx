export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-black via-purple-900 to-black px-8 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="flex items-center">
          <img
            src="logo.png" 
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* RIGHT: Nav links + button */}
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex items-center gap-8 text-white text-sm">
            <li className="cursor-pointer hover:text-purple-400 transition">
              About us
            </li>
            <li className="cursor-pointer hover:text-purple-400 transition">
              Store
            </li>
            <li className="cursor-pointer hover:text-purple-400 transition">
              Games
            </li>
          </ul>

          <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
