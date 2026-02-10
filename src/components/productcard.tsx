type ProductCardProps = {
  name: string;
  price: number;
};

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 text-center">
      
      {/* Image Placeholder */}
      <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-semibold">
        Product Image
      </div>

      <h2 className="text-xl font-bold mt-4">
        {name}
      </h2>

      <p className="text-green-600 font-semibold mt-2">
        Rs {price}
      </p>

      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}