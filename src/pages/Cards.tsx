import { FaChevronRight } from "react-icons/fa";

export const Cards = () => {
  return (
    <div className="flex flex-col items-start justify-start ms-14 mt-20 h-screen">
      <div className="flex flex-row mb-4 gap-10">
        <h1 className="text-2xl font-roboto font-semibold mb-4 drop-shadow-lg text-white">
          Melhores Séries
        </h1>
        <h1 className="text-2xl font-roboto font-semibold mb-4 drop-shadow-lg text-white flex items-center gap-2 cursor-pointer ">
          Veja mais <FaChevronRight className="text-white text-sm mt-[5px]" />
        </h1>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Example card */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4 w-64">
        <img
        src="https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
        alt="Stranger Things"
        className="rounded-md mb-3 h-40 w-full object-cover"
        />
        <h2 className="text-lg font-semibold text-white mb-1">Stranger Things</h2>
        <p className="text-gray-300 text-sm mb-2">Mistério, Drama, Fantasia</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-1 px-4 rounded">
        Assistir agora
        </button>
      </div>
      {/* Add more cards as needed */}
    </div>
    </div>
  );
};
