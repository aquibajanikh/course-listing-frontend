import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/courseSlice";
import CourseCard from "./CourseCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import chatBot from "./../assets/icons/robot.png";

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
      <Row xs={1} md={3} className="g-4">
        {allCoursesRedux.courses &&
          allCoursesRedux.courses.map((course) => (
            <Col key={course._id}>
              <CourseCard
                courseImg={course.courseImg}
                key={course._id}
                id={course._id}
                title={course.title}
                price={course.price}
              />
            </Col>
          ))}
      </Row>
      <Link to="/support">
        <img
          src={chatBot}
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
        />
      </Link>
    </>
  );
};

export default ViewCourses;
