"use client";
import { useState } from "react";
import { saveApplication } from "../utils/storage";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    ciudad: "",
    instagram: "",
    motivo: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveApplication(form);
    setSuccess(true);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Aplicar como Foodie</h2>
      {success ? (
        <div className="text-green-600 text-center font-semibold">
          ¡Gracias por aplicar! Pronto nos pondremos en contacto.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="nombre"
            placeholder="Nombre completo"
            className="w-full border rounded p-2"
            value={form.nombre}
            onChange={handleChange}
            required
          />
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
            name="ciudad"
            placeholder="Ciudad"
            className="w-full border rounded p-2"
            value={form.ciudad}
            onChange={handleChange}
            required
          />
          <input
            name="instagram"
            placeholder="Instagram (@usuario)"
            className="w-full border rounded p-2"
            value={form.instagram}
            onChange={handleChange}
            required
          />
          <textarea
            name="motivo"
            placeholder="¿Por qué quieres ser foodie?"
            className="w-full border rounded p-2"
            value={form.motivo}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white rounded py-2 font-semibold hover:bg-red-700 transition"
          >
            Enviar aplicación
          </button>
        </form>
      )}
    </div>
  );
} 