import UsersList from './Components/UsersList/index';
import PostsList from './Components/PostsList/index';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

    return (
        <BrowserRouter>
            <Container  className="py-4">
                <Routes>
                    <Route path='/' element={ <UsersList /> } />
                    <Route path='/posts/:userId' element={ <PostsList /> } />
                    <Route path='*' element={ <Navigate to='/' /> } />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App
