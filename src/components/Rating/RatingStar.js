import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  const countStar = 3;
  return (
    <div class="rating-star">
      {[...Array(5)].map((x, index) => {
        if (index < countStar) {
          return (
            <span>
              <img src={blackstarIcon} alt="star-icon" />
            </span>
          );
        } else {
          return (
            <span>
              <img src={starIcon} alt="star-icon" />
            </span>
          );
        }
      })}
    </div>
  );
}

export default RatingStar;
