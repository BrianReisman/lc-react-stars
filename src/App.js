import "./App.css";
import { useState } from "react";
import { Root, StarDiv, StarsContainer } from "./App.elements";

const App = () => {
  const [stars, setStars] = useState(0);
  const [highestHoverEl, setHighestHoverEl] = useState(0);
  const arrOf5 = [1, 2, 3, 4, 5];

  const clickHandler = (e) => setStars(e.target.id);
  const mouseOverHandler = (e) => setHighestHoverEl(e.target.id);
  const mouseOutHandler = () => setHighestHoverEl(0);

  const activeEl = (el) => (
    <StarDiv
      onClick={clickHandler}
      id={el}
      className="active"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    />
  );

  const notActiveEl = (el) => (
    <StarDiv
      onClick={clickHandler}
      id={el}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    />
  );

  const StarDivsToDisplay = arrOf5.map((el) => {
    if (!highestHoverEl) {
      if (el <= stars) return activeEl(el);
      else return notActiveEl(el);
    } else {
      if (el <= highestHoverEl) return activeEl(el);
      else return notActiveEl(el);
    }
  });

  return (
    <Root>
      <StarsContainer>{StarDivsToDisplay}</StarsContainer>
    </Root>
  );
};

export default App;
