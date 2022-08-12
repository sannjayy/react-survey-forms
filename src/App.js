import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import HomePage from './pages/home';
import FormPage from './pages/form';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/form/:id' element={<FormPage />} />
                    <Route index element={<HomePage />} />
                </Route>

                <Route path='*' element={<h1>404 Page not found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
