import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ratingType = {
  rating: number;
};

const Stars = ({ rating }: ratingType) => {
  const tempArray = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          // <i className="fa-solid fa-star star"></i>
          <FontAwesomeIcon icon={faStar} className="star" />
        ) : rating >= number ? (
          // <i className="fa-solid fa-star-half-stroke star"></i>
          <FontAwesomeIcon icon={faStarHalfStroke} className="star" />
        ) : (
          // <i className="fa-regular fa-star star"></i>
          <FontAwesomeIcon icon={faStar} className="empty" />
        )}
      </span>
    );
  });

  return <div>{tempArray}</div>;
};

export default Stars;
