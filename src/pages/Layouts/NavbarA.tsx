import { useState, useEffect } from "react";
import { MdSearch, MdApps, MdPerson, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { Loading } from "./components/Loading";
import { RxHamburgerMenu } from "react-icons/rx";

const API_KEY = "d6cd063195f11b2ccd29dd8d8929b3f4";

export const NavbarA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearchBar = () => setIsOpenSearchBar(!isOpenSearchBar);

  if (loading) {
    setTimeout(() => setLoading(false), 2000);
    return <Loading />;
  }

 
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setSearchLoading(true);
      try {
        const [moviesRes, seriesRes] = await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${searchTerm}`
          ),
          fetch(
            `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=pt-BR&query=${searchTerm}`
          ),
        ]);

        const moviesData = await moviesRes.json();
        const seriesData = await seriesRes.json();

        setResults([
          ...(moviesData.results || []),
          ...(seriesData.results || []),
        ]);
      } catch (err) {
        console.error("Erro na pesquisa:", err);
        setResults([]);
      } finally {
        setSearchLoading(false);
      }
    }, 500); 

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div>
      <nav className=" bg-[#00050d] text-white flex justify-between items-center px-4 py-3 top-0 w-full shadow-md z-50">
     
        <div className="flex items-center space-x-6">
      
          <div className="md:hidden">
            <button onClick={toggleMenu} className="flex items-center space-x-2">
              <RxHamburgerMenu size={28} className="text-white hover:text-gray-300" />
            </button>
            {isOpen && (
              <div className="fixed inset-0 z-40">
                <div
                  className="absolute inset-0 bg-black opacity-50"
                  onClick={toggleMenu}
                />
                <div className="absolute top-0 left-0 h-full w-64 bg-[#00050d] p-6 shadow-lg z-50 flex flex-col">
                  <button
                    className="self-end mb-6 text-white hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    ✕
                  </button>
                  <h1 className="text-white font-bold text-2xl mb-4">Prime-flix</h1>
                  <Link to="/" className="block text-white hover:text-gray-300 font-medium mb-4">
                    Início
                  </Link>
                  <Link to="/about" className="block text-white hover:text-gray-300 font-medium mb-4">
                    Filmes
                  </Link>
                  <Link to="/series" className="block text-white hover:text-gray-300 font-medium mb-4">
                    Séries
                  </Link>
                </div>
              </div>
            )}
          </div>

         
          <Link to="/" className=" text-lg text-white hover:text-gray-300 font-medium">
            Prime-Flix
          </Link>
          <Link to="/" className=" hidden md:block text-white hover:bg-[#e5e6e7] hover:text-black font-medium rounded-md px-2 py-2 text-center">
            Início
          </Link>
          <Link to="/about" className=" hidden md:block text-white hover:bg-[#e5e6e7] hover:text-black font-medium rounded-md px-2 py-2 text-center">
            Filmes
          </Link>
          <Link to="/series" className="hidden md:block text-white hover:bg-[#e5e6e7] hover:text-black font-medium rounded-md px-2 py-2 text-center">
            Séries
          </Link>
        </div>

        {/* DIREITA */}
        <div className="flex items-center space-x-5 relative">
          {/* BOTÃO DE PESQUISA */}
          <MdSearch
            size={20}
            className=" hidden md:block text-white hover:text-gray-300 cursor-pointer"
            onClick={toggleSearchBar}
          />

          {/* BARRA DE PESQUISA */}
          {isOpenSearchBar && (
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-sm bg-[#00050d] outline-none text-white text-sm w-48 px-2 py-1 border border-gray-600 focus:ring-2 focus:ring-blue-500 transition-all"
                autoFocus
              />

              {/* Resultados em tempo real */}
              {searchTerm && (
                <div className="absolute top-10 left-0 w-64 bg-[#0a1623] rounded-lg shadow-lg p-2 max-h-64 overflow-y-auto z-50">
                  {searchLoading ? (
                    <p className="text-gray-400 text-sm">🔎 Buscando...</p>
                  ) : results.length > 0 ? (
                    results.slice(0, 6).map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-2 p-2 hover:bg-[#1c2633] rounded cursor-pointer"
                      >
                        <Link to={`/detalhes_movie/${item.id}`} className="flex items-center space-x-2">
                          {item.poster_path ? (
                            <div className="w-10 h-14">
                              <img
                                src={`https://image.tmdb.org/t/p/w92${item.poster_path}`}
                                alt={item.title || item.name}
                                className="w-10 h-14 rounded"
                              />
                            </div>
                          ) : (
                            <div className="w-10 h-14 bg-gray-700 rounded flex items-center justify-center text-xs text-gray-300">
                              N/A
                            </div>
                          )}
                          <span className="text-sm truncate">
                            {item.title || item.name}
                          </span>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">Nenhum resultado</p>
                  )}
                  
                </div>
              )}
            </div>
          )}

          <Link to="/apps" className=" hidden md:block text-white hover:text-gray-300 ">
            <MdApps size={20} />
          </Link>
          <Link to="/profile" className=" hidden md:block text-white hover:text-gray-300">
            <MdSettings size={20} />
          </Link>
          <div className="hidden md:block bg-blue-600 p-2 rounded-full hover:border-4 transition-colors">
            <Link to="/profile" className="text-[#c1dce7] hover:text-gray-300">
              <MdPerson size={28} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
