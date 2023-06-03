import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../redux/supportSlice";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const SupportScreen = () => {
  let supportMessagesRedux = useSelector((state) => state.supportMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3001/fetchMessages").then((res) => {
      console.log(res.data);
      dispatch(fetchMessages(res.data));
    });
  }, []);
  console.log(supportMessagesRedux);
  return (
    <>
      <Container className="mt-5">
        <h3>All Messages</h3>
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {supportMessagesRedux.supportMessages &&
              supportMessagesRedux.supportMessages.map((message) => (
                <tr>
                  <td>{message.firstName}</td>
                  <td>{message.lastName}</td>
                  <td>{message.supportMessage}</td>
                  <td>
                    <button>Respond</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default SupportScreen;
