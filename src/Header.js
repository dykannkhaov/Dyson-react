import { Link } from 'react-router-dom'
import { FaSearch, FaTrashAlt, FaAlignJustify } from 'react-icons/fa'

function Header(props) {
  return (
    <header className="bg-black">
      <div className="flex items-center justify-end text-gray-500 text-xs border-b border-gray-700 h-8 pr-20">
        <span className="hover:text-white cursor-pointer">Trouver une boutique</span>
        <span className="ml-8 hover:text-white cursor-pointer">Newsroom</span>
        <span className="ml-8 hover:text-white cursor-pointer">Activer votre garantie</span>
      </div>
      <div className="flex justify-between lg:justify-around lg:items-center h-16 text-sm text-gray-300 font-light">
        <nav className="flex items-center">
          <Link to="/">
            <img
              className="cursor-pointer w-20"
              src="https://cdn.discordapp.com/attachments/691321186797486100/841246324623671296/Dyson-Embleme.png"
              alt="dyson logo"
            />
          </Link>
          <Link to="/about" className="lg:block hidden ml-6 cursor-pointer hover:text-white">
            Qui sommes nous
          </Link>
          <Link to="/diagnostic" className="lg:block hidden ml-6 cursor-pointer hover:text-white">
            Diagnostic stratégique
          </Link>
          <Link to="/segmentation" className="lg:block hidden ml-6 cursor-pointer hover:text-white">
            Segmentation
          </Link>
          <Link to="/strategie" className="lg:block hidden ml-6 cursor-pointer hover:text-white">
            Stratégie web
          </Link>
          <Link to="/e-contenu" className="lg:block hidden ml-6 cursor-pointer hover:text-white">
            E-contenu
          </Link>
        </nav>
        <div className="lg:flex flex items-center">
          <span className="border-b border-white cursor-pointer pr-12 pb-1 hidden lg:block">
            Rechercher des produits et accesoires
          </span>
          <FaAlignJustify className="lg:hidden text-2xl cursor-pointer mr-4 hover:text-white" />
          <FaSearch className="cursor-pointer hover:text-white text-xl lg:block hidden" />
          <FaTrashAlt className="text-xl cursor-pointer hover:text-white ml-6 lg:block hidden" />
        </div>
      </div>
    </header>
  )
}

export default Header
