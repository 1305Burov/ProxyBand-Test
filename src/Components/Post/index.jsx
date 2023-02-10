import { Card, Col } from "react-bootstrap";

function Post( { post } ) {

    const { title, body } = post;

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
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