import { Sparkles, Heart, Gift, ArrowRight } from 'lucide-react';

function App() {
  const handleShopNow = () => {
    window.open('YOUR_SHOPIFY_CHECKOUT_URL', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-red-50">
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-emerald-700" />
            <h1 className="text-2xl font-serif text-emerald-900">Mary's Wreaths</h1>
          </div>
          <button
            onClick={handleShopNow}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
          >
            Shop Now
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
            <p className="text-emerald-800 font-medium flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Handcrafted with Love in Ireland
            </p>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-emerald-900 mb-6 leading-tight">
            Bringing Irish Charm<br />
            <span className="text-red-700">to Your Door</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Each wreath is lovingly handcrafted by Mary, a proud Irish artisan who's been creating
            beautiful Christmas wreaths for over 30 years. Perfect for making your home feel warm
            and festive this holiday season.
          </p>
          <button
            onClick={handleShopNow}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Order Your Wreath Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-emerald-100">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-emerald-700" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-3">Handcrafted with Care</h3>
            <p className="text-gray-600 leading-relaxed">
              Every wreath is made by hand with attention to detail, ensuring each piece is unique
              and beautiful.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-red-100">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-red-700" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-3">Premium Materials</h3>
            <p className="text-gray-600 leading-relaxed">
              Using only the finest natural materials, ribbons, and festive decorations to create
              lasting beauty.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-emerald-100">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Gift className="w-7 h-7 text-emerald-700" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-3">Perfect Gift</h3>
            <p className="text-gray-600 leading-relaxed">
              Share the warmth of an Irish Christmas with family and friends. Each wreath arrives
              beautifully packaged.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-3xl p-12 md:p-16 text-center text-white shadow-xl mb-20">
          <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl md:text-4xl font-serif mb-4">
            Limited Christmas Collection
          </h3>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Each wreath is made to order with love and care. Order now to ensure your wreath
            arrives in time for the holidays.
          </p>
          <button
            onClick={handleShopNow}
            className="inline-flex items-center gap-2 bg-white text-emerald-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Browse Collection
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif text-emerald-900 mb-6">
            About Mary
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Mary has been creating beautiful wreaths from her home in Ireland for over three decades.
            What started as a hobby for decorating her own door has blossomed into a passion for
            spreading Christmas joy to homes across Ireland. Each wreath carries a piece of Irish
            tradition and Mary's dedication to her craft.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            "There's something magical about a handmade wreath on your door during Christmas.
            It welcomes everyone with warmth and joy, and that's what I hope to share with you."
            <span className="block mt-2 text-emerald-800 font-medium">— Mary</span>
          </p>
        </section>
      </main>

      <footer className="bg-emerald-900 text-emerald-100 py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6" />
            <p className="text-xl font-serif">Mary's Wreaths</p>
          </div>
          <p className="text-emerald-200">
            Handcrafted with love in Ireland
          </p>
          <p className="text-sm text-emerald-300 mt-6">
            © 2025 Mary's Wreaths. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
