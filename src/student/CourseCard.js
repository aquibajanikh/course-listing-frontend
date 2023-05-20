import { Link } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <div
      key={props.id}
      style={{
        width: "30%",
        margin: "50px",
      }}
    >
      <h2>{props.title}</h2>
      <h3>{props.price}</h3>
      <Link to={`/${props.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default CourseCard;
