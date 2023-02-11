import { Card, Col } from "react-bootstrap";

function Post( { post } ) {

    const { title, body } = post;

    return (
        <Col sm={12} md={6} xl={3}>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {body}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Post