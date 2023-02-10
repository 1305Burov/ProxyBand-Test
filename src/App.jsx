import UsersList from './Components/UsersList/index';
import PostsList from './Components/PostsList/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

    return (
        <BrowserRouter>
            <Container  className="pt-4">
                <Routes>
                    <Route path='/' element={ <UsersList /> } />
                    <Route path='/posts/:userId' element={ <PostsList /> } />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App
