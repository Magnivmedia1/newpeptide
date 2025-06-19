import React from "react";

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffffff",
    color: "#333",
    lineHeight: 1.6,
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: "#5e2c83",
    color: "#fff",
    textAlign: "center",
    padding: "2rem 1rem",
  },
  h1: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
  },
  comparisonBanner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2rem 15rem",
    flexWrap: "wrap",
  },
  comparisonItem: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "1rem",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  },
  tab: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#ccc",
    margin: "0 0.25rem",
    borderRadius: "8px",
    cursor: "pointer",
  },
  activeTab: {
    backgroundColor: "#5e2c83",
    color: "#fff",
  },
  section: {
    maxWidth: "900px",
    margin: "auto",
    padding: "2rem 1rem",
  },
  h2: {
    color: "#5e2c83",
    margin: "2rem 0 1rem",
  },
  p: {
    marginBottom: "1rem",
  },
  button: {
    backgroundColor: "#5e2c83",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "inline-block",
    margin: "1rem 0",
    textDecoration: "none",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    margin: "2rem 0",
    borderRadius: "12px",
    overflow: "hidden",
  },
  th: {
    backgroundColor: "#5e2c83",
    color: "#fff",
    padding: "1rem",
    fontSize: "1rem",
    textAlign: "center",
  },
  td: {
    padding: "1rem",
    textAlign: "center",
    fontSize: "0.95rem",
  },
  tdFirst: {
    textAlign: "left",
    paddingLeft: "1.5rem",
  },
  checkmark: { color: "green", fontSize: "1.2rem" },
  crossmark: { color: "red", fontSize: "1.2rem" },
  footer: {
    backgroundColor: "#5e2c83",
    color: "#fff",
    textAlign: "center",
    padding: "2rem 1rem",
  },
  input: {
    padding: "0.5rem",
    width: "250px",
    marginRight: "0.5rem",
    borderRadius: "6px",
    border: "none",
  },
  subscribeForm: {
    marginTop: "1rem",
  },
  footerText: {
    textAlign: "left",
    maxWidth: "900px",
    margin: "2rem auto 0 auto",
  },
  "@media(maxWidth: 600px)": {
    comparisonBanner: { flexDirection: "column", margin: "1rem" },
    input: { width: "100%", margin: "0.5rem 0" },
  },
};

export default function ComparisonPage() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.h1}>
          SLU-PP-332 vs. Your Average Fat Burner: A Clear Winner?
        </h1>
      </header>

      <div style={styles.comparisonBanner}>
        <div style={styles.comparisonItem}>
          <img
            src="/images/slu-pp-332.png"
            alt="SLU-PP-332 Bottle"
            style={styles.image}
          />
          <div style={styles.tabs}>
            <div style={{ ...styles.tab, ...styles.activeTab }}>SLU-PP-332</div>
          </div>
        </div>

        <div style={styles.comparisonItem}>
          <img
            src="/images/fat-burner.png"
            alt="Typical Fat Burner Bottle"
            style={styles.image}
          />
          <div style={styles.tabs}>
            <div style={styles.tab}>Typical Fat Burner</div>
          </div>
        </div>
      </div>

      <section style={styles.section}>
        <h2 style={styles.h2}>What It Is:</h2>
        <p style={styles.p}>
          SLU-PP-332 is a groundbreaking compound designed to activate exercise
          pathways and enhance endurance without traditional stimulants.
        </p>

        <h2 style={styles.h2}>How It Works</h2>
        <p style={styles.p}>
          SLU-PP-332 activates ERRγ to mimic exercise by boosting mitochondria
          and muscle efficiency.
        </p>
        <a href="#" style={styles.button}>
          Try SLU-PP-332 Now
        </a>

        <h2 style={styles.h2}>Proven Results (in Mice)</h2>
        <p style={styles.p}>
          SLU-PP-332 showed dramatic fat loss in mice without exercise.
        </p>

        <a href="#" style={styles.button}>
          Try SLU-PP-332 Now
        </a>

        <h2 style={styles.h2}>Safety & Side Effects</h2>
        <p style={styles.p}>
          SLU-PP-332 is non-stimulant, with minimal side effects.
        </p>

        <h2 style={styles.h2}>Beyond Fat Loss</h2>
        <p style={styles.p}>
          SLU-PP-332 supports endurance, recovery, and metabolism.
        </p>

        <h2 style={styles.h2}>Side-by-Side Comparison</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Feature</th>
              <th style={styles.th}>SLU-PP-332</th>
              <th style={styles.th}>Typical Fat Burner</th>
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
              <tr
                key={feature}
                style={{ backgroundColor: idx % 2 === 0 ? "#f3f0f8" : "#fff" }}
              >
                <td style={{ ...styles.td, ...styles.tdFirst }}>{feature}</td>
                <td style={styles.td}>
                  {slu ? (
                    <span style={styles.checkmark}>✔️</span>
                  ) : (
                    <span style={styles.crossmark}>✖️</span>
                  )}
                </td>
                <td style={styles.td}>
                  {fat ? (
                    <span style={styles.checkmark}>✔️</span>
                  ) : (
                    <span style={styles.crossmark}>✖️</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={styles.h2}>Final Take</h2>
        <p style={styles.p}>
          SLU-PP-332 leads with science and endurance benefits beyond basic fat
          burning.
        </p>

        <h2 style={styles.h2}>Conclusion:</h2>
        <p style={styles.p}>
          If you're tired of the same old stimulant-heavy burners, SLU-PP-332
          offers a safer, research-backed, performance-forward solution.
        </p>

        <a href="#" style={styles.button}>
          Try SLU-PP-332 Now
        </a>
      </section>

      <footer style={styles.footer}>
        <h2 style={styles.h2}>Subscribe & Save!</h2>
        <p>
          Sign up below and be the first to know about new products and
          promotions!
        </p>
        <div style={styles.subscribeForm}>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />
          <button style={styles.button}>Subscribe</button>
        </div>

        <div style={styles.footerText}>
          <p>
            <strong>PEPTIDE LABS X</strong>
            <br />
            Full spectrum lab-grade supplements. Based in the USA.
          </p>
          <p>
            <strong>Contact:</strong>
            <br />
            Phone: (775) 374-3150
            <br />
            Email: support@peptidelabsx.com
            <br />
            Mailing Address: 2340 Paseo Del Prado, Ste D203, Las Vegas, NV 89102
          </p>
        </div>
      </footer>
    </div>
  );
}
