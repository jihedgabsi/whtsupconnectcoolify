import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Whatsup from "./pages/whatsup.jsx";


const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Whatsup />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
