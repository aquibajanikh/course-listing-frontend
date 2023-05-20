import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const IndividualCourses = () => {
  let allCoursesRedux = useSelector((state) => state.courses);
  const { id } = useParams();
  const currentCourse = allCoursesRedux.courses.filter(
    (course) => course._id === id
  );

  return (
    <>
      {currentCourse &&
        currentCourse.map((course) => (
          <div key={course._id}>
            <h2>{course.title}</h2>
            <h3>{course.price}</h3>
            <h3>{course.category}</h3>
            <h3>{course.duration}</h3>
            <button>Enrol Now</button>
          </div>
        ))}
    </>
  );
};

export default IndividualCourses;
