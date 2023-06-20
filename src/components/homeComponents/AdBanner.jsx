import React from "react";
import icecream from "../../assets/ice-cream.jpg";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
const AdBanner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${icecream})`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.ad_banner}>
        <h3 style={styles.h3}>New Recipe</h3>
        <h1 style={styles.h1}>Blueberry Icream</h1>
        <h3 className={styles.ad_text}>
          A delightful frozen treat bursting with the sweet and tangy flavors of
          fresh blueberries. Its creamy texture and vibrant blue hue make it a
          refreshing and visually appealing dessert option for summer.
        </h3>
        <Link to="/recipe/114">
          <button className={styles.banner_btn}>Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
