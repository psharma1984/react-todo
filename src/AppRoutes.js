import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';

const AppRoutes = ({ selectedList }) => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoContainer selectedList={selectedList} />} />
                <Route path="/new" element={
                    <div style={{ textAlign: 'center' }}>
                        <h1>New Todo List</h1>
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
