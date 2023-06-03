import { Link } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <div
      key={props.id}
      style={{
        margin: "30px",
        textAlign: "center",
        border: "1px solid black",
        paddingBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <img
        src={props.courseImg}
        style={{
          width: "100%",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
        alt={props.title}
      />
      <h4 style={{ marginTop: "20px" }}>{props.title}</h4>
      <h5>{props.price}</h5>
      <Link to={`/course/${props.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default CourseCard;
