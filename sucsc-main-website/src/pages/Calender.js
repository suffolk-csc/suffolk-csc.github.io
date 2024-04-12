import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';

function Calender() {
    return (
        <div>

            
        </div>
        
    );
}
function App() {
    return (
        <Routes>
            <Route path="/calender" element={<Calender />} />
        </Routes>

    );
}

export default App;