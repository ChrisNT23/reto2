type Props = {
  restaurant: {
    id: number;
    name: string;
    cuisine: string;
    address: string;
    rating: number;
    reviews: number;
    image: string;
  };
};

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img src={restaurant.image} alt={restaurant.name} className="rounded-lg h-40 object-cover mb-4" />
      <h3 className="font-bold text-lg">{restaurant.name}</h3>
      <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
      <p className="text-sm text-gray-500">{restaurant.address}</p>
      <div className="flex items-center mt-2 mb-4">
        <span className="text-yellow-400 mr-1">★</span>
        <span className="font-semibold">{restaurant.rating}</span>
        <span className="text-gray-400 ml-2">({restaurant.reviews})</span>
      </div>
      <button className="bg-red-600 text-white rounded py-2 font-semibold hover:bg-red-700 transition">
        Programar Visita
      </button>
    </div>
  );
} 