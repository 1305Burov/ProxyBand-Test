import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AlbumsModal from './../AlbumsModal/index';

function User({ user }) {
    const { id, name, email } = user;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-4 text-muted">{email}</Card.Subtitle>
                        <Link to={`/posts/${id}`}><Button variant="primary">posts</Button></Link>
                        <Button variant="primary" className="mx-2" onClick={handleShow}>albums</Button>
                    </Card.Body>
                </Card>
            </Col>

            { show && <AlbumsModal handleClose={handleClose} show={show} user={user} /> }
        </>
    )
}

export default User