import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import api from '../api';

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await api.post('/logout');
        } catch (error) {
            console.error("Error al salir: ", error.response?.data);
            alert("Error: " + (error.response?.data?.message || "No se ha podido salir"));
        } finally {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }
    return (
        <div>
            <button onClick={handleLogout}
                className="bg-red-500 text-white"
            >
                LogOut
            </button>
        </div>
    )
}