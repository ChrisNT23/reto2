"use client";
import Navbar from "../../components/Navbar";
import { restaurants } from "../../utils/mockData";
import RestaurantCard from "../../components/RestaurantCard";
import { useState } from "react";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const filtered = restaurants.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-2">Panel del Foodie</h1>
        <p className="mb-6 text-gray-600">Explora y conecta con restaurantes locales.</p>
        <div className="flex space-x-2 mb-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded font-semibold">Explorar Restaurantes</button>
          <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded font-semibold">Mis Visitas</button>
          <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded font-semibold">Favoritos</button>
          <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded font-semibold">Mi Perfil</button>
        </div>
        <input
          type="text"
          placeholder="Buscar restaurantes por nombre..."
          className="w-full border rounded p-2 mb-6"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map(r => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      </div>
    </div>
  );
} 