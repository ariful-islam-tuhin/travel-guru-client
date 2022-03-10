import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./MyOrder.css"

const MyOrder = () => {

    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    useEffect(() => {
        const uri = `http://localhost:5000/myorder/${user?.email}`;
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setMyOrder(data));
    }, [user.email]);
    
    // =============

    const handleDelete = (id) => {
        const proceed = window.confirm("are you sure, you want to delete!!!");
        if (proceed) {
          fetch(`http://localhost:5000/myorder/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                alert("deleted successfully");
                const remainingBooking = myOrder.filter(
                  (deletebooking) => deletebooking._id !== id
                );
                setMyOrder(remainingBooking);
              }
            });
        }
      };



    return (
        <Container className="py-5">
        <Row xs={1} md={3} className="g-4">
          {myOrder.map((order) => (
            <Col key={order?._id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={order?.placeImg}
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>{order?.placeName}</Card.Title>
                  <Card.Text>{order?.placeDescriptions.slice(0, 50)}</Card.Text>
                  <p>{order?.addres}</p>
                  <p>{order?.phone}</p>
                  <p>${order?.placePrice}</p>
                  <p>status: {order?.status}</p>
                  <button
                    className="delet-btn bg-danger"
                    onClick={() => handleDelete(order?._id)}
                  >
                    delete
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default MyOrder;