const artists = [
  { name: "Ferhat Deniz", img: "/artist1.png" },
  { name: "Sebastian", img: "/artist2.png" },
  { name: "Javier Miranda", img: "/artist3.png" },
  { name: "Erick Butler", img: "/artist4.png" },
];

export default function PopularArtists() {
  return (
    <section className="px-8 py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/40 via-black to-black -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Popular Artists</h2>
          <button className="border border-white px-5 py-2 rounded-md">
            View all Artists ↗
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {artists.map((a) => (
            <div key={a.name}>
              <img
                src={a.img}
                className="w-28 h-28 rounded-full mx-auto object-cover"
              />
              <p className="mt-4">{a.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
