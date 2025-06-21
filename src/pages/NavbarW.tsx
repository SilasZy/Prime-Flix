import { FaMinus, } from "react-icons/fa6";
import { IoCloseOutline } from 'react-icons/io5'; 
import { Images } from "../assets/Images";   
export const NavbarW = () => {


    return(
<div>
<nav className="bg-[#1b2530] text-white flex justify-between items-center px-4 ">
    <div>
<p className="font-sans">Prime video for windows</p>
    </div>

<div className="flex items-center space-x-6">
<a href="/" className="text-white hover:text-gray-300 font-medium">
<FaMinus size={20} />

</a> 
<a href="/" className="text-white hover:text-gray-300 font-medium ">
{Images.map((imagens) => (
<img
                    key={imagens.id}
                    src={imagens.src.imagem}
                    title={imagens.title}
                    style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                    alt="Clear Image"
                   
                    className="w-6 h-6 inline-block"
                />
            ))}
            

</a> 
<a href="/" className="text-white hover:text-gray-300 font-medium">

<IoCloseOutline size={20} />
</a> 

</div>




</nav>




</div>
    )


}