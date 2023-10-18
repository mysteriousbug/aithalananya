/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "Quantum Computer";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Anarchy-AI LLM-VM to build a Reddit Web-Scraper",
    description:
      " Using Anarchy-AI LLM-VM to build an AI web scraper that finds the most relevant reddit comments given a list of subreddits.",
    url: "https://github.com/mysteriousbug/insightred",
  },
  {
    title: "Classical Model to analyze Amazon Customer reviews ",
    description:
      "Performing sentiment analysis on Amazon customer reviews using Logistic Classification.",
    url: "https://github.com/mysteriousbug/AmazonReviewClassification",
  },
  {
    title: "Classifying Space Rocks using AI",
    description:
      "Using AI Libraries in Python to train a neural network to distinguish rock samples collected from space.",
    url: "https://github.com/mysteriousbug/spacerocks",
  },
  {
    title: "Auto-Regressive Model to Predict Sales",
    description:
      " Designing an ARIMA Model using Python to project sales based on historical data.",
    url: "https://github.com/mysteriousbug/confluentisdevops",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
