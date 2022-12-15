import twitter from "../pic/icons/twitter.svg";
import github from "../pic/icons/github.svg";
import alien from "../pic/icons/alien.svg";
import Card from "./card";
import { useEffect, useRef } from "react";
import { observer } from "./utilities";
import { v4 as uuidv4 } from "uuid";

const Community = () => {
  const observe_ref = useRef([]);
  const cards_data = [
    {
      link: "https://github.com/TGODTH/GALAXY",
      pic: github,
      title: "Github",
      description:
        "Open-sourced code; open for decentralized contributions and discussions.",
    },
    {
      link: "https://twitter.com/osmosiszone",
      pic: twitter,
      title: "Twitter",
      description:
        "Latest updates on innovations, features, and community highlights.",
    },
  ];
  useEffect(() => {
    observe_ref.current.forEach((card) => {
      observer.observe(card);
      card.classList.add("invisible");
    });
  }, []);
  return (
    <div className="community-container">
      <div className="community-text-container flex-col">
        <h2 className="community-header text-left">
          <img src={alien} alt="community icon" className="card-svg" />
          Explore the community
        </h2>
        <p className="text-left">
          Join the discussion on one of our many forums. Learn about the Osmosis
          ecosystem, meet others, and become an active voice in the space.
        </p>
      </div>
      <div className="community-card-container">
        {cards_data.map((element, index) => {
          return (
            <Card
              key={uuidv4()}
              ref={(el) => (observe_ref.current[index] = el)}
              animatetype="fade-in-left"
              link={element.link}
              pic={element.pic}
              title={element.title}
              description={element.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Community;
