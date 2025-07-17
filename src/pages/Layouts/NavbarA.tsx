import { useState } from "react";
import { MdSearch, MdApps, MdPerson, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { Loading } from "./components/Loading";
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
          <Link onClick={() => setLoading(true)} to="/" className="text-white hover:text-gray-300 font-medium">Prime-Flix</Link>
          <Link onClick={() => setLoading(true)} to="/" className="text-white hover:text-gray-300 font-medium">Início</Link>
          <Link to="/about" className="text-white hover:text-gray-300 font-medium">Filmes</Link>

          <Link onClick={() => setLoading(true)} to="/series" className="text-white hover:text-gray-300 font-medium">Séries</Link>
        </div>

        {/* Lado direito - Ícones */}
        <div className="flex items-center space-x-5">
          <a href="/search" className="text-white hover:text-gray-300">
            <MdSearch size={24} />
          </a>
          <a href="/apps" className="text-white hover:text-gray-300">
            <MdApps size={20} />
          </a>
       
           <a href="/profile" className="text-white hover:text-gray-300">
            <MdSettings size={20} />
            
          </a>
<div className="bg-blue-600 p-2 rounded-full  hover:border-4  transition-colors">
      <a href="/profile" className="text-[#c1dce7] hover:text-gray-300">
            <MdPerson size={28} />
          </a>
</div>
<div className="md:hidden">


       <button onClick={toggleMenu}>
         {isOpen ?  'aberto' : 'fechado'}
       </button>
          </div>
        </div>
      </nav>
    </div>
  );
};