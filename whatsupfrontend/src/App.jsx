import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Whatsup from "./pages/whatsup.jsx";


const App = () => {
    return (
        
            <Router>
                <Routes>
                    <Route path="/whatsup" element={<Whatsup />} />
                </Routes>
            </Router>
        
    );
};

export default App;
