export default function JoinCommunity() {
  return (
    <section className="bg-gradient-to-br from-black via-purple-900 to-black py-32">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="absolute -inset-6 bg-purple-600/40 blur-3xl rounded-3xl" />
          <img
            src="/cta.png"
            alt="Community Artwork"
            className="relative rounded-3xl shadow-2xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-10 text-white">
            Join The Community <br />
            And Get The Best NFT <br />
            Collection
          </h2>

          <button
            className="bg-gradient-to-r from-purple-500 to-pink-500
                       px-10 py-4 rounded-lg
                       text-white font-semibold tracking-wide
                       hover:opacity-90 transition"
          >
            JOIN COMMUNITY
          </button>
        </div>

      </div>
    </section>
  );
}
