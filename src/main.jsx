import React from "react";
import ReactDOM from "react-dom/client";
import HairGrowthPage from "./HairGrowthPage"; // import your component
import './index.css'; // Global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HairGrowthPage />
  </React.StrictMode>
);
