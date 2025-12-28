import TrendingCard from "./TrendingCard";

export default function TrendingSection() {
  return (
    <section className="bg-gradient-to-br from-black via-purple-900 to-black text-white py-32">
      <div className="max-w-7xl mx-auto px-10">

        {/* HEADER */}
        <div className="max-w-xl mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Trending This Week
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">

          <TrendingCard
            image="/card1.png"
            title="Sebastian"
            subtitle="Golden Flower"
            price="2.3 ETH"
          />

          <TrendingCard
            image="/card2.png"
            title="Ferhat Deniz"
            subtitle="Golden Flower"
            price="2.3 ETH"
          />

          <TrendingCard
            image="/card3.png"
            title="Javier Miranda"
            subtitle="Golden Flower"
            price="2.3 ETH"
          />

          <TrendingCard
            image="/card4.png"
            title="Polina Kondrashova"
            subtitle="Golden Flower"
            price="2.3 ETH"
          />

          <TrendingCard
            image="/card5.png"
            title="Milad Fakurian"
            subtitle="Golden Flower"
            price="2.3 ETH"
          />

          <TrendingCard
            image="/card6.png"
            title="Erick Butler"
            subtitle="Golden Flower"
            price="2.3 ETH"
          />

        </div>
      </div>
    </section>
  );
}
