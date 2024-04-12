import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';

function Gallery() {
    return (
        <div>

            
        </div>
        
    );
}
function App() {
    return (
        <Routes>
            <Route path="/gallery" element={<Gallery />} />
        </Routes>

    );
}

export default App;