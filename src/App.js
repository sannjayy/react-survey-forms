import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import HomePage from './pages/home';
import FormPage from './pages/form';
import FormStateProvider from './context/form';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <FormStateProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route path='/form/:id' element={<FormPage />} />
                            <Route index element={<HomePage />} />
                        </Route>

                        <Route path='*' element={<h1>404 Page not found</h1>} />
                    </Routes>
                </BrowserRouter>
            </FormStateProvider>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
        </QueryClientProvider>
    );
}

export default App;
