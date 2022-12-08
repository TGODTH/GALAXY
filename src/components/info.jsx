import { Parallax } from "react-scroll-parallax";
import planet from "../pic/mascot/planet-ring.svg";
import stone from "../pic/mascot/stone.svg";
import robot from "../pic/mascot/robot-interface.svg";
import robotsArm from "../pic/mascot/robot-arm.svg";

const Info = () => {
  return (
    <>
      <div className="mascot-container">
        <Parallax translateY={["-120%", "200%"]} scale={["60%", "110%"]}>
          <img src={planet} alt="planet" className="mascot planet" />
        </Parallax>
        <Parallax  translateY={["20%", "-30%"]} easing="easeOut">
          <div>
            <img src={stone} alt="stone" className="mascot stone" />
          </div>
        </Parallax>
        <Parallax><img src={robot} alt="robot using interface" className="mascot robot" /></Parallax>
        <Parallax>
          <img
            src={robotsArm}
            alt="robot's arm pointing to interface"
            className="mascot robot-arm"
          />
        </Parallax>
      </div>
    </>
  );
};

export default Info;
