import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const res = await axios.post("http://http://e0oowcgs8kk0gkkoks84swso.157.180.35.88.sslip.io/api/auth/login", { email, password });
            setUser(res.data.client);
            localStorage.setItem("token", res.data.token);
        } catch (error) {
            console.error("Erreur de connexion :", error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
