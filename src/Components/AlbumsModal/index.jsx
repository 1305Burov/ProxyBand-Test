import { Modal, Button, ListGroup } from 'react-bootstrap'
import { useGetAlbumsQuery } from '../../services/albumsApi';
import { Card } from 'react-bootstrap';

function AlbumsModal({ show, handleClose, user }) {
    const { data = [], isLoading, isError } = useGetAlbumsQuery(user.id)

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title> { user.name } Albums</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Card style={{ width: '100%' }}>
                <ListGroup variant="flush">
                    {isError ? (
                        <h2>Oh no, there was an error</h2>
                    ) : isLoading ? (
                        <h2>Loading...</h2>
                    ) : data ? (
                        data.map(album => <ListGroup.Item key={album.id}>{album.title}</ListGroup.Item> )
                    ) : null}
                </ListGroup>
            </Card>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AlbumsModal