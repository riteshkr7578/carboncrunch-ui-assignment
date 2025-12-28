export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-hidden">
      
      {/* ================= HERO TOP ================= */}
      <div className="max-w-7xl mx-auto px-10 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Discover Rare <br />
            Collections Of <br />
            Art & NFT’s
          </h1>

          <p className="text-gray-300 max-w-md mb-8">
            Create, explore, & collect digital art NFTs
          </p>

          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-md font-medium hover:opacity-90 transition">
            Explore
          </button>

          {/* STATS */}
          <div className="flex gap-14 mt-16">
            <Stat value="32k+" label="Artwork" />
            <Stat value="20k+" label="Auctions" />
            <Stat value="10k+" label="Artists" />
          </div>
        </div>
{/* RIGHT CARD STACK */}
<div className="relative hidden lg:block w-full h-[620px]">

  {/* PURPLE GLOW */}
  <div className="absolute right-8 top-40 w-[480px] h-[520px] bg-purple-600/50 blur-[160px]" />

  {/* BACK CARD */}
  <div
    className="absolute right-28 top-24
               w-[300px] h-[480px]
               rotate-[18deg]
               z-10"
    style={{ transformOrigin: "center" }}
  >
    <div className="w-full h-full rounded-2xl border-4 border-white overflow-hidden">
      <img
        src="/hero-2.png"
        alt="NFT Back"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* FRONT CARD */}
  <div
    className="absolute right-6 top-40
               w-[340px] h-[520px]
               rotate-[-10deg]
               z-20"
    style={{ transformOrigin: "center" }}
  >
    <div className="w-full h-full rounded-2xl border-4 border-white overflow-hidden shadow-2xl">
      <img
        src="/hero-1.png"
        alt="NFT Front"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

</div>

      </div>

      {/* ================= FEATURED ARTWORK SECTION ================= */}
      <div className="max-w-7xl mx-auto px-10 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/art.png"
            alt="Bitcoin Artwork"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Bitcoin <br /> Art Work
          </h2>

          <p className="text-gray-400 mb-10">
            Created by <span className="text-pink-500">Jonathan Borba</span>
          </p>

          <div className="flex gap-16 mb-12">
            <div>
              <p className="text-gray-400 text-sm mb-1">Current Bid</p>
              <p className="text-3xl font-bold">1.09 ETH</p>
              <p className="text-gray-400 text-sm">$1,835</p>
            </div>

            <div className="border-l border-white/20 pl-10">
              <p className="text-gray-400 text-sm mb-1">Auction Ends In</p>
              <div className="flex gap-6 text-center">
                <Time value="18" label="Hours" />
                <Time value="57" label="Minutes" />
                <Time value="14" label="Seconds" />
              </div>
            </div>
          </div>

          <button className="bg-white text-black px-8 py-3 rounded-md font-medium flex items-center gap-2 hover:opacity-90 transition">
            View Art Work →
          </button>
        </div>
      </div>
    </section>
  );
}

/* SMALL COMPONENTS */
function Stat({ value, label }) {
  return (
    <div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

function Time({ value, label }) {
  return (
    <div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-gray-400 text-xs">{label}</p>
    </div>
  );
}
