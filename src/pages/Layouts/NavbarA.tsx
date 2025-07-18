import { useState } from "react";
import { MdSearch, MdApps, MdPerson, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { Loading } from "./components/Loading";
import { RxHamburgerMenu } from "react-icons/rx";


// import { IoMdMenu } from "react-icons/io";
export const NavbarA = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearchBar = () => {
    setIsOpenSearchBar(!isOpenSearchBar);
  };

   const [loading, setLoading] = useState(false);


  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return (
      <Loading />
    );
  } 

  


  return (
    <div>
      <nav className=" bg-[#00050d] text-white flex justify-between items-center px-4 py-3  top-0 w-full shadow-md z-50">
        
        {/* Lado esquerdo - Links  trocar por Links do React Router */}
        <div className="flex items-center space-x-6 ">



      <div className="md:hidden">

{/* aqui e toda a parte do hamburguer e sidebar */}
      <button onClick={toggleMenu} className="flex items-center space-x-2">
        <RxHamburgerMenu size={28} className="text-white hover:text-gray-300" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-40">
        
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          />
          {/* Sidebar */}
          <div className="absolute top-0 left-0 h-full w-64 bg-[#00050d] p-6 shadow-lg z-50 flex flex-col">
            <button
              className="self-end mb-6 text-white hover:text-gray-300"
              onClick={toggleMenu}
              aria-label="Fechar menu"
            >
              ✕
            </button>

            <div>
              <h1 className="text-white font-bold text-2xl mb-4">
               Prime-flix
              </h1>
            </div>
            <Link
              onClick={() => {
                setLoading(true);
                toggleMenu();
              }}
              to="/"
              className="block text-white hover:text-gray-300 font-medium mb-4"
            >
              Início
            </Link>
            <Link
              onClick={toggleMenu}
              to="/about"
              className="block text-white hover:text-gray-300 font-medium mb-4"
            >
              Filmes
            </Link>
            <Link
              onClick={() => {
                setLoading(true);
                toggleMenu();
              }}
              to="/series"
              className="block text-white hover:text-gray-300 font-medium mb-4"
            >
              Séries
            </Link>
            <Link
              onClick={toggleMenu}
              to="/search"
              className="block text-white hover:text-gray-300 font-medium mb-4"
            >
              Pesquisar
            </Link>
            <Link
              onClick={toggleMenu}
              to="/apps"
              className="block text-white hover:text-gray-300 font-medium mb-4"
            >
              Apps
            </Link>
            <Link
              onClick={toggleMenu}
              to="/profile"
              className="block text-white hover:text-gray-300 font-medium mb-4"
            >
              Perfil
            </Link>
            <Link
              onClick={toggleMenu}
              to="/settings"
              className="block text-white hover:text-gray-300 font-medium mb-4"
            >
              Configurações
            </Link>
          </div>
        </div>
      )}
          </div>

          <Link onClick={() => setLoading(true)} to="/" className=" text-lg text-white hover:text-gray-300 font-medium ">Prime-Flix</Link>
          <Link onClick={() => setLoading(true)} to="/" className=" hidden md:block text-white hover:text-gray-300 font-medium ">Início</Link>
          <Link to="/about" className=" hidden md:block text-white hover:text-gray-300 font-medium">Filmes</Link>
          <Link onClick={() => setLoading(true)} to="/series" className="hidden md:block text-white hover:text-gray-300 font-medium">Séries</Link>
        </div>

        {/* Lado direito - Ícones */}
        <div className="flex items-center space-x-5">
          <button className="cursor-pointer">
< MdSearch size={20} className=" hidden md:block text-white hover:text-gray-300 " onClick={toggleSearchBar} />
          </button>
          
{isOpenSearchBar && (
<div className="absolute top-10 right-10 mt-2 mr-2 bg-[#0a1623] rounded-lg shadow-lg p-3 flex items-start space-x-2 z-50">
  <input
    type="text"
    placeholder="Pesquisar..."
    className="rounded-sm p-4  bg-[#00050d] outline-none text-white text-sm w-48 focus:ring-2 focus:ring-blue-500 transition-all"
    autoFocus
  />
 
</div>
)}

          <Link to="/apps" className=" hidden md:block text-white hover:text-gray-300 ">
            <MdApps size={20} />
          </Link>

          <Link to="/profile" className=" hidden md:block text-white hover:text-gray-300">
            <MdSettings size={20} />

          </Link>
          <div className="hidden md:block bg-blue-600 p-2 rounded-full  hover:border-4  transition-colors">
            <Link to="/profile" className="text-[#c1dce7] hover:text-gray-300">
              <MdPerson size={28} />
            </Link>
          </div>
    
        </div>
      </nav>
    </div>
  );
};