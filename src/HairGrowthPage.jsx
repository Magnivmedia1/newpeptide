import React from "react";

export default function HairGrowthPage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">HAIR HEALTH REPORT</h1>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Learn More</button>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 text-2xl text-sm/7">
        {/* Main Article */}
        <main className="w-full lg:w-3/4 lg:pr-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h2 className="text-6xl font-bold mb-2">
              SLU-PP-332 vs. Your Average Fat Burner: A Clear Winner?
            </h2>
            <p className="text-sm text-white font-bold mb-4 text-left bg-gray-400 p-2 w-50 mt-4">By Paul Taylor | June 2023</p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
              <img src="/images/slu-pp-332.png" alt="Man holding illumiflow" className="w-full rounded" />
               <img src="/images/fat-burner.png" alt="Minoxidil" className="w-full rounded" />
              
            </div>
            {/* <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded">
              Claim Offer Now
            </button> */}
          </section>
         {/*What it is */}
          <section className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6 md:text-left">What It Is: </h3>
            <p className="mb-4 text-gray-500 text-left">
              <strong>SLU‑PP‑332</strong> is a pioneering exercise-mimetic—a
          synthetic molecule that mimics the internal metabolic effects of
          exercise. It works by activating estrogen-related orphan receptors
          (ERRs), revving up energy expenditure, fat oxidation, and
          mitochondrial function—especially in muscle tissue jrenendo.com+9.{" "}
            </p>
            <p className="mb-4 text-gray-500 text-left">
              Typical thermogenic fat burners usually rely on stimulants or herbal
          extracts to rev metabolism and curb appetite. They may boost calorie
          burn, but often bring jitteriness, crashes, or reliance on caffeine.
            </p>
            {/* <ul className="list-disc list-inside text-left inline-block text-green-700">
              <li>Advanced laser technology for total scalp coverage and hair regrowth</li>
              <li>Clinically backed, drug-free solution for real, lasting regrowth</li>
              <li>Tackles the root causes of hair loss, not just the symptoms</li>
              <li>Risk-free 12-month growth guarantee</li>
            </ul> */}
            <div className="mt-6">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded">
                Try illumiflow Now
              </button>
            </div>
          </section>


          {/*How It Works */}
          <section className="text-center mb-12 ">
            <h3 className="text-4xl font-bold mb-6">How It Works: </h3>
                      
            <ul className="list-disc list-inside text-left inline-block text-green-700 mb-4 md:ml-10 ">
              <li><strong>SLU‑PP‑332 activates ERRα/β/γ </strong>triggering
          mitochondrial biogenesis and metabolic pathways normally turned on by
          endurance exercise en.wikipedia.org+4.</li>
              <li>This leads to higher basal energy expenditure and faster fat
          metabolism—without changing diet or exercise routines news.ufl.edu+8.{" "}</li>
              
            </ul>
             <p className="mb-4 text-gray-700 text-left">
             In contrast, fat burners often boost metabolism or suppress appetite,
          but lack deep cellular impact. They're not designed to enhance
          mitochondrial function or mimic exercise’s comprehensive metabolic
          effects.
            </p>
            <div className="mt-6">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded">
                Try illumiflow Now
              </button>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="bg-gray-100 px-4 py-10 rounded-lg mb-12">
            <h3 className="text-xl font-bold mb-4">Side-by-Side Comparison: illumiflow vs. Minoxidil</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white rounded shadow p-6">
              <div>
                <h4 className="font-semibold">illumiflow</h4>
                <ul className="list-disc list-inside text-green-700">
                  <li>Clinically validated regrowth and thickening</li>
                  <li>3x weekly, hands-free, 30 min</li>
                  <li>FDA-cleared, non-invasive</li>
                  <li>Sustainable, stable improvements</li>
                  <li>Comfortable, easy use</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Minoxidil</h4>
                <ul className="list-disc list-inside text-red-700">
                  <li>Moderate regrowth</li>
                  <li>Daily use required</li>
                  <li>Skin irritation, dryness possible</li>
                  <li>Temporary coverage</li>
                  <li>Ongoing hassle</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final Verdict Section */}
          <section className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6">Final Verdict: illumiflow Is the Smarter Choice</h3>
            <p className="mb-4 text-gray-700">
              If you're struggling with thinning hair, patchy regrowth, or hair loss concerns,
              choosing the right solution is essential. Minoxidil may help some men, but its
              one-dimensional approach doesn’t deliver the full results you want.
            </p>
            <ul className="list-disc list-inside text-left inline-block text-green-700">
              <li>Advanced laser technology for total scalp coverage and hair regrowth</li>
              <li>Clinically backed, drug-free solution for real, lasting regrowth</li>
              <li>Tackles the root causes of hair loss, not just the symptoms</li>
              <li>Risk-free 12-month growth guarantee</li>
            </ul>
            <div className="mt-6">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded">
                Try illumiflow Now
              </button>
            </div>
          </section>
        </main>

        {/* Sidebar Widget */}
        <aside className="w-full lg:w-1/4 mt-8 lg:mt-0">
          <div className="sticky top-6 bg-white border border-gray-200 shadow-md p-4 rounded">
            <h4 className="text-lg font-semibold mb-2 text-center">Recommended</h4>
            <div className="flex justify-center mb-3">
              <img src="/illumiflow-widget.png" alt="illumiflow helmet" className="w-3/4" />
            </div>
            <p className="text-sm text-center mb-2">
              Try illumiflow 12 months risk free!
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold w-full py-2 rounded">
              Claim Offer Now
            </button>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white px-4 py-6 text-center text-sm">
        <p>&copy; 2025 HAIR HEALTH REPORT. All rights reserved.</p>
        <p className="mt-2">Disclaimer: This is not medical advice. Speak with a physician before beginning any treatment.</p>
      </footer>
    </div>
  );
}
