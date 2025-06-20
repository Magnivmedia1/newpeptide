import React from "react";

export default function HairGrowthPage() {
  const handleClick = () => {
    window.location.href =
      "https://peptidelabsx.com/products/slu-pp-332-1mg-x-60-tablets";
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">HAIR HEALTH REPORT</h1>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
          Learn More
        </button>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 text-2xl text-sm/9">
        {/* Main Article */}
        <main className="w-full lg:w-3/4 lg:pr-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h2 className="text-6xl font-bold mb-2">
              SLU-PP-332 vs. Your Average Fat Burner: A Clear Winner?
            </h2>
            <p className="text-sm text-white font-bold mb-4 text-left bg-gray-400 p-2 w-50 mt-4">
              By Paul Taylor | June 2023
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
              <img
                src="/images/slu-pp-332.png"
                alt="Man holding illumiflow"
                className="w-full rounded"
              />
              <img
                src="/images/fat-burner.png"
                alt="Minoxidil"
                className="w-full rounded"
              />
            </div>
            {/* <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded">
              Claim Offer Now
            </button> */}
          </section>

          {/*What it is */}
          <section className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6 md:text-left">
              What It Is:{" "}
            </h3>
            <p className="mb-4 text-gray-500 text-left">
              <strong>SLU‑PP‑332</strong> is a pioneering exercise-mimetic—a
              synthetic molecule that mimics the internal metabolic effects of
              exercise. It works by activating estrogen-related orphan receptors
              (ERRs), revving up energy expenditure, fat oxidation, and
              mitochondrial function—especially in muscle tissue jrenendo.com+9.{" "}
            </p>
            <p className="mb-4 text-gray-500 text-left">
              Typical thermogenic fat burners usually rely on stimulants or
              herbal extracts to rev metabolism and curb appetite. They may
              boost calorie burn, but often bring jitteriness, crashes, or
              reliance on caffeine.
            </p>
            {/* <ul className="list-disc list-inside text-left inline-block text-green-700">
              <li>Advanced laser technology for total scalp coverage and hair regrowth</li>
              <li>Clinically backed, drug-free solution for real, lasting regrowth</li>
              <li>Tackles the root causes of hair loss, not just the symptoms</li>
              <li>Risk-free 12-month growth guarantee</li>
            </ul> */}
            <div className="mt-6">
              <button
                onClick={handleClick}
                className="relative inline-block text-lg group focus:outline-none"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-58 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-700 group-hover:-rotate-180 ease"></span>
                  <span className="relative font-bold">Try SLU-PP-332 Now</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
              </button>
            </div>
          </section>

          {/*How It Works */}
          <section className="text-center mb-12 ">
            <h3 className="text-4xl font-bold mb-6 md:text-left">
              How It Works:{" "}
            </h3>

            <ul className="list-disc list-inside text-left inline-block text-green-700 mb-4 md:ml-10 ">
              <li>
                <strong>SLU‑PP‑332 activates ERRα/β/γ </strong>triggering
                mitochondrial biogenesis and metabolic pathways normally turned
                on by endurance exercise en.wikipedia.org+4.
              </li>
              <li>
                This leads to higher basal energy expenditure and faster fat
                metabolism—without changing diet or exercise routines
                news.ufl.edu+8.{" "}
              </li>
            </ul>
            <p className="mb-4 text-gray-700 text-left">
              In contrast, fat burners often boost metabolism or suppress
              appetite, but lack deep cellular impact. They're not designed to
              enhance mitochondrial function or mimic exercise’s comprehensive
              metabolic effects.
            </p>
            <div className="mt-6">
               <button
                onClick={handleClick}
                className="relative inline-block text-lg group focus:outline-none"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-58 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-700 group-hover:-rotate-180 ease"></span>
                  <span className="relative font-bold">Try SLU-PP-332 Now</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
              </button>
            </div>
          </section>

          {/*Proven Results (in Mice)*/}
          <section className="text-center mb-12 ">
            <h3 className="text-4xl font-bold mb-6 md:text-left">
              Proven Results (in Mice){" "}
            </h3>

            <ul className="list-disc list-inside text-left inline-block text-green-700 mb-4 md:ml-10 ">
              <li>
                <strong>SLU‑PP‑332:</strong> In obese mice, twice-daily dosing
                for 28 days led to{" "}
                <strong>12% body weight loss, 10× less fat gain,</strong> and no
                change in food intake or activity—mimicking endurance training
                on a cellular level news.ufl.edu+9.
              </li>
              <li>
                It also increased oxidative skeletal muscle fibers and exercise
                endurance by up to 70%, even without increased activity
                jrenendo.com+3.
              </li>
            </ul>
            <p className="mb-4 text-gray-700 text-left">
              Typical fat burners may show modest weight loss (~5 ~10%) but
              often rely on calorie restriction or appetite suppression—with
              little focus on muscle/mitochondria adaptations.
            </p>
            <div className="mt-6">
               <button
                onClick={handleClick}
                className="relative inline-block text-lg group focus:outline-none"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-58 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-700 group-hover:-rotate-180 ease"></span>
                  <span className="relative font-bold">Try SLU-PP-332 Now</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
              </button>
            </div>
          </section>

          {/*Safety & Side Effects*/}
          <section className="text-center mb-12 ">
            <h3 className="text-4xl font-bold mb-6 md:text-left">
              Safety & Side Effects{" "}
            </h3>

            <ul className="list-disc list-inside text-left inline-block text-green-700 mb-4 md:ml-10 ">
              <li>
                <strong>SLU‑PP‑332</strong> caused{" "}
                <strong>
                  no appetite, activity changes, or obvious side effects{" "}
                </strong>{" "}
                in preclinical trials. Still, long-term effects in humans are
                unknown, and human trials haven’t begun news.ufl.edu+9.
              </li>
              <li>
                <strong>Fat burners,</strong> especially stimulant-based ones,
                can cause jitteriness, sleep issues, increased heart rate, and
                tolerance buildup.
              </li>
            </ul>
            {/* <p className="mb-4 text-gray-700 text-left">
             Typical fat burners may show modest weight loss (~5 ~10%) but often
          rely on calorie restriction or appetite suppression—with little focus
          on muscle/mitochondria adaptations.
            </p> */}
            <div className="mt-6">
              
               <button
                onClick={handleClick}
                className="relative inline-block text-lg group focus:outline-none"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-58 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-700 group-hover:-rotate-180 ease"></span>
                  <span className="relative font-bold">Try SLU-PP-332 Now</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
              </button>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="bg-gray-100 px-4 py-10 rounded-lg mb-12">
            <h3 className="text-xl font-bold mb-4">
              Side-by-Side Comparison: illumiflow vs. Minoxidil
            </h3>
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
            <h3 className="text-2xl font-bold mb-6">
              Final Verdict: illumiflow Is the Smarter Choice
            </h3>
            <p className="mb-4 text-gray-700">
              If you're struggling with thinning hair, patchy regrowth, or hair
              loss concerns, choosing the right solution is essential. Minoxidil
              may help some men, but its one-dimensional approach doesn’t
              deliver the full results you want.
            </p>
            <ul className="list-disc list-inside text-left inline-block text-green-700">
              <li>
                Advanced laser technology for total scalp coverage and hair
                regrowth
              </li>
              <li>
                Clinically backed, drug-free solution for real, lasting regrowth
              </li>
              <li>
                Tackles the root causes of hair loss, not just the symptoms
              </li>
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
            <h4 className="text-lg font-semibold mb-2 text-center">
              Recommended
            </h4>
            <div className="flex justify-center mb-3">
              <img
                src="/illumiflow-widget.png"
                alt="illumiflow helmet"
                className="w-3/4"
              />
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
        <p className="mt-2">
          Disclaimer: This is not medical advice. Speak with a physician before
          beginning any treatment.
        </p>
      </footer>
    </div>
  );
}
