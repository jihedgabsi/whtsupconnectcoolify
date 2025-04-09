import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Whatsup from "./pages/whatsup";


const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/whatsup" element={<Whatsup />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
