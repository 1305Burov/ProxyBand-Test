import { Button, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPostsQuery } from "../../services/postsApi";
import Post from "../Post";


const PostsList = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const { data = [], isLoading, isError } = useGetPostsQuery(userId)

    if (isLoading) return <h2>Loading...</h2>

    if (isError) return <h2>Unexpected error. Try again later.</h2>

    return (
        <>
            <Button variant="outline-primary" className="mb-4" onClick={() => navigate(-1)}>Back</Button>
            <Row xs={1} md={'auto'} className="g-4">
                {data.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </Row>
        </>
    );
}

export default PostsList;
