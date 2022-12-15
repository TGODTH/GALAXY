import { Parallax } from "react-scroll-parallax";
import planet from "../pic/mascot/planet-ring.svg";
import stone from "../pic/mascot/stone.svg";
import robot from "../pic/mascot/robot-interface.svg";
import robotsArm from "../pic/mascot/robot-arm.svg";
import InfoCard from "./infoCard";
import { getInfo, observer } from "./utilities";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const Info = () => {
  const observe_ref = useRef([]);
  useEffect(() => {
    observe_ref.current.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  return (
    <>
      <div className="info">
        <div className="mascot-container fade-in">
          <Parallax
            scale={["90%", "120%"]}
            translateX={["10%", "-20%"]}
            className="mascot-div"
          >
            <img src={planet} alt="planet" className="mascot planet" />
          </Parallax>
          <Parallax translateY={["-10%", "0%"]} className="mascot-div">
            <img
              src={robot}
              alt="robot using interface"
              className="mascot robot"
            />
          </Parallax>
          <Parallax translateY={["-10%", "0%"]} className="mascot-div">
            <img
              src={robotsArm}
              alt="robot's arm pointing to interface"
              className="mascot robot-arm"
            />
          </Parallax>
          <Parallax
            translateY={["30%", "-20%"]}
            easing={[0.17,0.67,0.8,1]}
            className="mascot-div"
          >
            <img src={stone} alt="stone" className="mascot stone" />
          </Parallax>
        </div>
        <h2 className="info">The largest UniverseChain DEX</h2>
        <div className="infoCard-container">
          {getInfo().map((element, index) => {
            return (
              <InfoCard
                key={uuidv4()}
                ref={(el) => (observe_ref.current[index] = el)}
                animatetype = "fade-in-up"
                title={element.title}
                data={element.data}
                link={element.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Info;
