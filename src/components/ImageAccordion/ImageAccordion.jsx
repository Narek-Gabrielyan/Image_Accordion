import React, { useState, useEffect } from "react";
import "./ImageAccordion.css";

export const ImageAccordion = ({ items }) => {
  const [active, setActive] = useState(0);
  const handleToggle = (index) => setActive(index);

  useEffect(() => {
    document.title = items[active]?.header || "Image Accordion";
    const faviconLink = document.querySelector("link[rel='icon']");
    if (faviconLink) {
      faviconLink.href = items[active]?.mapCountry || "favicon/map.png";
      document.head.appendChild(faviconLink);
    } else {
      const newFaviconLink = document.createElement("link");
      newFaviconLink.rel = "icon";
      newFaviconLink.href = items[active]?.mapCountry || "favicon/map.png";
      document.head.appendChild(newFaviconLink);
    }
  }, [active, items]);

  return (
    <section className="image-accordion">
      {items.map((item, index) => {
        const isActive = active === index ? "active" : "";
        const mapImage = item.mapCountry ?? "favicon/map.png";
        return (
          <article
            key={item.image}
            className={`image-accordion-item ${isActive}`}
            onClick={() => handleToggle(index)}
          >
            <img src={item.image} />
            <div className="content">
              <span className="icon-container">
                <img src={mapImage} alt="map icon" />
              </span>
              <div>
                <h2>{item.header}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
