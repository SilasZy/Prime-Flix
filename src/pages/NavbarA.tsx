import { MdSearch, MdApps, MdPerson, MdSettings } from "react-icons/md";

export const NavbarA = () => {
  return (
    <div>
      <nav className="bg-[#00050d] text-white flex justify-between items-center px-4 py-3">
        {/* Lado esquerdo - Links */}
        <div className="flex items-center space-x-6">
          <a href="/" className="text-white hover:text-gray-300 font-medium">Prime Video</a>
          <a href="/products" className="text-white hover:text-gray-300">Início</a>
          <a href="/about" className="text-white hover:text-gray-300">Filmes</a>
          <a href="/contact" className="text-white hover:text-gray-300">Séries</a>
                   <a href="/teste" className="text-white hover:text-gray-300">Route teste</a>
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
       
          
        </div>
      </nav>
    </div>
  );
};