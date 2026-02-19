import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard');
            }

        } catch (error) {
            console.error("Error al entrar: ", error.response?.data);
            alert("Error: " + (error.response?.data?.message || "No se ha podido entrar"));
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 font-sans shadow-xl">
            <div className="bg-white flex flex-col rounded-xl shadow-2xl shadow-gray-200/50 p-10 w-full max-w-md relative overflow-hidden">

                <div className="absolute top-6 left-10 w-17 h-1 bg-[#00C950] rounded"></div>

                <div className="mt-4 mb-8">
                    <h1 className="text-[#1A1C1E] text-4xl font-bold tracking-tight mb-2">
                        Iniciar sesión
                    </h1>
                    <p className="text-gray-400 text-base">
                        ¡Bienvenido de nuevo! Inicia sesión para continuar.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-bold text-[#49454F] ml-1">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Introduce tu email"
                            className="rounded-2xl border border-gray-200 bg-white p-4 text-gray-700 outline-none focus:ring-2 focus:ring-[#00C950]/20 focus:border-[#00C950] transition-all placeholder:text-gray-300"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-bold text-[#49454F] ml-1">Contraseña</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Introduce tu contraseña"
                            className="rounded-2xl border border-gray-200 bg-white p-4 text-gray-700 outline-none focus:ring-2 focus:ring-[#00C950]/20 focus:border-[#00C950] transition-all placeholder:text-gray-300"
                        />
                    </div>
                </div>

                <button
                    onClick={handleLogin}
                    className="mt-10 bg-[#00C950] hover:bg-[#00b347] text-white text-lg font-bold py-4 rounded-2xl transition-all shadow-lg shadow-[#00C950]/30 active:scale-[0.98]">
                    Entrar
                </button>

                <div className="mt-10 text-center flex justify-center space-x-2 text-sm">
                    <span className="text-gray-500 font-medium">¿No tienes una cuenta?</span>
                    <button className="text-[#00C950] font-bold hover:underline decoration-2 underline-offset-4">
                        Crear una cuenta
                    </button>
                </div>

            </div>
        </div>
    )
}