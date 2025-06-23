import React from "react";

export default function HairGrowthPage() {
  const handleClick = () => {
    window.location.href =
      "https://peptidelabsx.com/products/slu-pp-332-1mg-x-60-tablets";
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-4 flex flex-col md:flex-row gap-2 justify-between items-center">
        <h1 className="text-4xl font-bold text-center">MODERN HEALTH REPORTING</h1>
        <button
        onClick={handleClick}
         className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
          Learn More
        </button>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 text-2xl text-lg/9">
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
            <p className="mb-4 text-gray-500 text-left text-lg/9">
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


          {/*Beyond Fat Loss*/}
          <section className="text-center mb-12 ">
            <h3 className="text-4xl font-bold mb-6 md:text-left">
              Beyond Fat Loss{" "}
            </h3>
            
            <p className="mb-4 text-gray-700 text-left">
              <strong>SLU‑PP‑332</strong> shows broad metabolic potential: improved
          insulin sensitivity, possible benefits for heart/kidney health,
          enhanced muscle endurance, and mitochondrial health .{" "}
            </p>
            <p className="mb-4 text-gray-700 text-left">
              Most fat burners focus narrowly on fat loss—often requiring caloric
          deficits or additional exercise for broader health impact
            </p>
           
          </section>

          {/* Comparison Section */}
          <section className="bg-gray-100 py-6 rounded-lg mb-12">
            <h3 className="text-4xl font-bold mb-2 text-center">
              Side-by-Side Comparison <br/> <span className="text-2xl ">SLU-PP-332 vs. Typical Fat Burner</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-1 ">
              <div>
             <table className="w-full border-separate border-spacing-0 rounded-xl overflow-hidden my-8">
  <thead>
    <tr>
      <th className=" text-center text-md p-4">Feature</th>
      <th className="bg-[#5e2c83] text-white text-center font-black text-md p-5">SLU-PP-332</th>
      <th className="text-center text-md p-4">Typical Fat Burner</th>
    </tr>
  </thead>
  <tbody>
    {[
      ["Activates Exercise Pathways", true, false],
      ["Increases Endurance + Muscle Fiber", true, false],
      ["No Stimulants / Jitters", true, false],
      ["Fat Loss Without Diet Change", true, false],
      ["Mitochondrial Boosting", true, false],
      ["Appetite Suppression", false, true],
      ["Caffeine or Thermogenics", false, true],
    ].map(([feature, slu, fat], idx) => (
      <tr key={feature} className={idx % 2 === 0 ? "bg-[#f3f0f8]" : "bg-white"}>
        <td className="text-left  pl-6 p-4 text-md">{feature}</td>
        <td className="text-center  p-4 text-[8px] bg-[#5e2c83] font-semibold">
          <span className={slu ? "text-white  font-extrabold p-2 rounded-full bg-green-600" : "text-red-500 font-extrabold text-lg"}>{slu ? "✓" : "X"}</span>
        </td>
        <td className="text-center p-4 text-sm">
          <span className={fat ? "text-white text-[8px] font-extrabold p-2 rounded-full bg-green-600" : "text-red-500 font-extrabold  text-lg "}>{fat ? "✓" : "X"}</span>
        </td>
      </tr>
    ))}
  </tbody>
</table>


                </div>
            </div>
          </section>

          {/* Final Verdict Section */}
          <section className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6 md:text-left ">
              Final Take: SLU‑PP‑332 Is the Smarter Choice
            </h3>
            <p className="mb-4 text-gray-700 text-left">
              SLU‑PP‑332 offers a revolutionary leap forward compared to
          conventional fat burners—by activating actual exercise pathways at the
          cellular level. In mice, it delivered impressive results: serious fat
          reduction, improved endurance, no appetite suppression, and no evident
          side effects. Fat burners, by contrast, are often limited in scope and
          burdened by side effects.
            </p>
             <p className="mb-4 text-gray-700 text-left">
             <strong>However,</strong> SLU‑PP‑332 remains in preclinical
          <strong>stages</strong> — meaning all claims are based on animal
          studies. Human trials are still needed to confirm its safety and
          real-world efficacy.
            </p>           
            
          </section>

           {/*Conclusion */}
          <section className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6 md:text-left ">
              Conclusion:
            </h3>
            <p className="mb-4 text-gray-700 text-left">
              If you’re after an option that actually mimics exercise metabolism
          (based on lab results), SLU‑PP‑332 is a game-changer—if it proves safe
          and effective in humans. Traditional fat burners might offer modest
          results faster, but with trade-offs: stimulants, side effects, and
          limited metabolic depth
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
        </main>

        {/* Sidebar Widget */}
        <aside className="w-full lg:w-1/4 mt-8 lg:mt-0">
          <div className="sticky top-6 bg-white border border-gray-200 shadow-md p-4 rounded">
            <h4 className="text-lg font-semibold mb-2 text-center">
              Recommended
            </h4>
            <div className="flex justify-center mb-3">
              <img
                src="/images/slu-pp-332.png"
                alt="illumiflow helmet"
                className="w-3/4"
              />
            </div>
            <p className="text-md text-center font-bold mb-2">
              Try SLU-PP-332 25% off!
            </p>
            <button 
            onClick={handleClick}
            className="bg-red-600 hover:bg-red-700 text-white font-bold w-full py-2 rounded">
              Claim Offer Now
            </button>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white px-4 py-6 text-center text-md">
        <h1 className="text-center text-4xl font-bold mb-4">MODERN HEALTH REPORTING</h1>
        <p>This is an advertisement, not an actual news article, blog, or consumer protection update. The owner of this site may receive compensation for purchases made through links on this site. Models are used for illustrative purposes only. This site is for informational and advertising purposes only and does not offer medical advice.</p>
        <p>&copy; 2025 MODERN HEALTH REPORTING. All rights reserved.</p>
        <p className="mt-2">
          Disclaimer: This is not medical advice. Speak with a physician before
          beginning any treatment.
        </p>
      </footer>
    </div>
  );
}
