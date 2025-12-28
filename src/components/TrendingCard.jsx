export default function TrendingCard({ image, title, subtitle, price }) {
  return (
    <div className="group">

      {/* IMAGE */}
      <div className="rounded-2xl overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-[420px] object-cover
                     transition duration-500
                     group-hover:scale-105"
        />
      </div>

      {/* INFO */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>

        <span className="text-pink-500 font-medium">
          {price}
        </span>
      </div>
    </div>
  );
}
