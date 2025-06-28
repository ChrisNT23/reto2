"use client";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula login: cualquier email/password funciona
    if (form.email && form.password) {
      router.push("/dashboard");
    } else {
      setError("Completa todos los campos");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            className="w-full border rounded p-2"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            className="w-full border rounded p-2"
            value={form.password}
            onChange={handleChange}
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-red-600 text-white rounded py-2 font-semibold hover:bg-red-700 transition"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="text-center mt-4 text-sm">
          ¿No tienes una cuenta? <a href="/aplicar" className="text-red-600 font-semibold">Aplicar ahora</a>
        </div>
      </div>
    </div>
  );
} 