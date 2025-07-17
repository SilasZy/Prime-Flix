import { useState } from "react";
import { MdSearch, MdApps, MdPerson, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { Loading } from "./components/Loading";
import { RxHamburgerMenu } from "react-icons/rx";
// import { IoMdMenu } from "react-icons/io";
export const NavbarA = () => {
 const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  
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
      <nav className=" bg-[#00050d] text-white flex justify-between items-center px-4 py-3 fixed top-0 w-full shadow-md z-50">
        
        {/* Lado esquerdo - Links  trocar por Links do React Router */}
        <div className="flex items-center space-x-6">



      <div className="md:hidden">


       <button onClick={toggleMenu} className="flex items-center space-x-2">  

       
          <RxHamburgerMenu size={28} className="text-white hover:text-gray-300" />
 
         {isOpen ?  (
           <div className="  absolute top-16 flex flex-col bg-[#00050d] p-4 w-40 rounded-md shadow-md">
           <Link onClick={() => setLoading(true)} to="/" className="block text-white hover:text-gray-300 font-medium mb-2">Início</Link>          
           <Link to="/about" className="block text-white hover:text-gray-300 font-medium mb-2">Filmes</Link>         
           <Link onClick={() => setLoading(true)} to="/series" className="block text-white hover:text-gray-300 font-medium mb-2">Séries</Link>
           <Link to="/search" className="block text-white hover:text-gray-300 font-medium mb-2">Pesquisar</Link>
           <Link to="/apps" className="block text-white hover:text-gray-300 font-medium mb-2">Apps</Link>
           <Link to="/profile" className="block text-white hover:text-gray-300 font-medium mb-2">Perfil</Link>
           <Link to="/settings" className="block text-white hover:text-gray-300 font-medium mb-2">Configurações</Link>
         </div>
         ) : null}

       </button>
          </div>

          <Link onClick={() => setLoading(true)} to="/" className=" text-lg text-white hover:text-gray-300 font-medium ">Prime-Flix</Link>
          <Link onClick={() => setLoading(true)} to="/" className=" hidden md:block text-white hover:text-gray-300 font-medium ">Início</Link>
          <Link to="/about" className=" hidden md:block text-white hover:text-gray-300 font-medium">Filmes</Link>
          <Link onClick={() => setLoading(true)} to="/series" className="hidden md:block text-white hover:text-gray-300 font-medium">Séries</Link>
        </div>

        {/* Lado direito - Ícones */}
        <div className="flex items-center space-x-5">
          <Link to="/search" className="hidden md:block text-white hover:text-gray-300 ">
            <MdSearch size={24} />
          </Link>
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