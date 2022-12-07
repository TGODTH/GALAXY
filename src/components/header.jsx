import { v4 as uuidv4 } from 'uuid';
import "./animation.css";

const Header = (props) => {
  const splitLine = (sentence) => {
    sentence = sentence.split("<br/>");
    let result = [sentence[0]];
    for (let i = 1; i < sentence.length; i++) {
      result = result.concat(<br />, sentence[i]);
    }
    console.log(result);
    return result;
  };

  return (
    <header key={uuidv4()}>
      <h1 className={props.side + " fade-in-down"}>
        {splitLine(props.title)}
      </h1>
      <p className={props.side + " fade-in-up"}>
        {splitLine(props.description)}
        <br />
        <a className={"header-link"} href="#">
          {props.link}
        </a>
      </p>
    </header>
  );
};
export default Header;