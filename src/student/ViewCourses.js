import axios, { all } from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/courseSlice";
import CourseCard from "./CourseCard";

const ViewCourses = () => {
  let allCoursesRedux = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3001/").then((res) => {
      dispatch(fetchCourses(res.data));
    });
  }, []);

  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {allCoursesRedux.courses &&
          allCoursesRedux.courses.map((course) => (
            <CourseCard
              key={course._id}
              id={course._id}
              title={course.title}
              price={course.price}
            />
          ))}
      </section>
    </>
  );
};

export default ViewCourses;
