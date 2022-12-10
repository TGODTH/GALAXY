import { Parallax } from "react-scroll-parallax";
import planet from "../pic/mascot/planet-ring.svg";
import stone from "../pic/mascot/stone.svg";
import robot from "../pic/mascot/robot-interface.svg";
import robotsArm from "../pic/mascot/robot-arm.svg";
import InfoCard from "./infoCard";
import { getInfo } from "./utilities";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const Info = () => {
  let observe_ref = useRef([]);
  const observe = new IntersectionObserver(() => {}, []);
  useEffect(() => {
    console.log("observer_el ", observe_ref.current);
  }, []);
  return (
    <>
      <div className="mascot-container">
        <Parallax
          scale={["90%", "120%"]}
          translateX={["10%", "-20%"]}
          className="mascot-div"
        >
          <img src={planet} alt="planet" className="mascot planet" />
        </Parallax>
        <Parallax className="mascot-div">
          <img
            src={robot}
            alt="robot using interface"
            className="mascot robot"
          />
        </Parallax>
        <Parallax className="mascot-div">
          <img
            src={robotsArm}
            alt="robot's arm pointing to interface"
            className="mascot robot-arm"
          />
        </Parallax>
        <Parallax
          translateY={["50%", "-20%"]}
          easing={[0.38, 1.02, 0.82, 0.63]}
          className="mascot-div"
        >
          <img src={stone} alt="stone" className="mascot stone" />
        </Parallax>
      </div>
      <div className="info">
        <h2 className="info">The largest UniverseChain DEX</h2>
        <div className="infoCard-container">
          {getInfo().map((element, index) => {
            return (
              <a
                key={uuidv4()}
                ref={(el) => (observe_ref.current[index] = el)}
                href={element.link}
                className="infoCard"
              >
                <InfoCard
                  title={element.title}
                  data={element.data}
                  link={element.link}
                />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Info;
