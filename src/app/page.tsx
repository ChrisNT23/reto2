import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a <span className="text-red-600">FoodiesBNB</span></h1>
        <p className="text-lg text-gray-600 mb-8">Conecta con los mejores restaurantes y vive experiencias gastronómicas únicas.</p>
        <a href="/aplicar" className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition">Quiero ser Foodie</a>
      </div>
    </div>
  );
}
