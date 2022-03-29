import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import './AllOrder.css'


const AllOrder = () => {
    const [AllOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch("https://powerful-temple-24287.herokuapp.com/allorder")
            .then((res) => res.json())
            .then((data) => setAllOrder(data));
    }, [AllOrder]);


    // delet from all-order 
    const handleDelete = (id) => {
        const proceed = window.confirm("are you sure, you want to delete!!!");
        if (proceed) {
            fetch(`https://powerful-temple-24287.herokuapp.com/myorder/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remainingOrder = AllOrder.filter(
                            (deletebooking) => deletebooking._id !== id
                        );
                        setAllOrder(remainingOrder);
                    }
                });
        }
    };
    // update from all-order
    const handleUpdate = (id) => {
        const updatestatus = AllOrder.find((update) => update?._id === id);
        updatestatus.status = "approved";

        const uri = `https://powerful-temple-24287.herokuapp.com/myorder/${id}`;
        fetch(uri, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatestatus),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("updated successfully");
                }
            });
    };


    return (
        <div>
            <h5>All order of user </h5>
            <Container className="py-5">
                <Row xs={1} md={3} className="g-4">
                    {AllOrder.map((order) => (
                        <Col key={order?._id}>
                            <Card className='card'>
                                <Card.Img 
                                    variant="top"
                                    src={order?.placeImg}
                                    className="card-img border rounded"
                                />
                                <Card.Body >
                                    <Card.Title>{order?.placeName}</Card.Title>
                                    <Card.Text>{order?.placeDescriptions.slice(0, 50)}</Card.Text>
                                    
                                        <p> address: {order?.addres}</p>
                                        <div className='line-height'>
                                        <p>mobile: {order?.phone}</p>
                                        <p> Price: ${order?.placePrice}</p>
                                        <p>status: {order?.status}</p>
                                    </div>
                                    <button
                                        className="delete-btn me-3"
                                        onClick={() => handleDelete(order?._id)}
                                    >
                                        delete
                                    </button>
                                    <button
                                        className="update-btn me-3"
                                        onClick={() => handleUpdate(order?._id)}
                                    >
                                        {order?.status}
                                    </button>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    );
};

export default AllOrder;