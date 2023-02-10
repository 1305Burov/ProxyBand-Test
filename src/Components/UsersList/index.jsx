import { Row } from "react-bootstrap";
import { useGetUsersQuery } from "../../services/usersApi";
import User from './../User/index';

const UsersList = () => {
    const { data = [], isLoading, isError } = useGetUsersQuery();
    
    if (isLoading) return <h2>Loading...</h2>

    if (isError) return <h2>Unexpected error. Try again later.</h2>

    return (
        <Row xs={1} md={'auto'} className="g-4">
            {data.map(user => (
                <User key={user.id} user={user} />
            ))}
        </Row>
    );
}

export default UsersList;
