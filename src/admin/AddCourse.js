import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";
import { addCourse } from "../redux/courseSlice";
import { useDispatch } from "react-redux";

function AddCourse() {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [courseCategory, setCourseCategory] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      <h2 className="mb-5">Add a course</h2>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="courseTitle">
          <Form.Label column sm={2}>
            Course Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              onChange={(e) => setCourseTitle(e.target.value)}
              value={courseTitle}
              type="text"
              placeholder="Course Title"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="courseDuration">
          <Form.Label column sm={2}>
            Course Duration
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              onChange={(e) => setCourseDuration(e.target.value)}
              value={courseDuration}
              type="text"
              placeholder="Course Duration"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="courseCategory">
          <Form.Label column sm={2}>
            Course Category
          </Form.Label>
          <Col sm={10}>
            <Form.Select
              onChange={(e) => setCourseCategory(e.target.value)}
              defaultValue="Choose..."
            >
              <option>Choose...</option>
              <option value="Technology">Technology</option>
              <option value="Business">Business</option>
              <option value="Creatives">Creatives</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="coursePrice">
          <Form.Label column sm={2}>
            Course Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              onChange={(e) => setCoursePrice(e.target.value)}
              value={coursePrice}
              type="text"
              placeholder="Course Price"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              onClick={(e) => {
                e.preventDefault();
                axios
                  .post("http://localhost:3001/addCourse", {
                    title: courseTitle,
                    price: coursePrice,
                    category: courseCategory,
                    duration: courseDuration,
                  })
                  .then(setUserMessage("Added!"))
                  .then(
                    dispatch(
                      addCourse({
                        title: courseTitle,
                        price: coursePrice,
                        category: courseCategory,
                        duration: courseDuration,
                      })
                    )
                  );
              }}
              type="submit"
            >
              Create Course
            </Button>
          </Col>
        </Form.Group>
      </Form>
      <h3>{userMessage}</h3>
    </Container>
  );
}

export default AddCourse;
