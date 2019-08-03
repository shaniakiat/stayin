import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktail",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi labore earum autem quas! Itaque cum laboriosam in, ullam debitis pariatur obcaecati corrupti ducimus laudantium fugit totam nisi reiciendis ratione!"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi labore earum autem quas! Itaque cum laboriosam in, ullam debitis pariatur obcaecati corrupti ducimus laudantium fugit totam nisi reiciendis ratione!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi labore earum autem quas! Itaque cum laboriosam in, ullam debitis pariatur obcaecati corrupti ducimus laudantium fugit totam nisi reiciendis ratione!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
