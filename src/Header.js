import { Link } from 'react-router-dom'
import { FaSearch, FaTrashAlt } from 'react-icons/fa'

function Header(props) {
  return (
    <header className="bg-black md:bg-white">
      <div className="flex items-center justify-end text-gray-500 text-xs border-b border-gray-700 h-8 pr-20">
        <span className="hover:text-white cursor-pointer">Trouver une boutique</span>
        <span className="ml-8 hover:text-white cursor-pointer">Newsroom</span>
        <span className="ml-8 hover:text-white cursor-pointer">Activer votre garantie</span>
      </div>
      <div className="flex justify-around items-center h-16 text-sm text-gray-300 font-light">
        <nav className="flex items-center">
          <Link to="/">
            <img
              className="cursor-pointer w-20"
              src="https://cdn.discordapp.com/attachments/691321186797486100/841246324623671296/Dyson-Embleme.png"
              alt="dyson logo"
            />
          </Link>
          <Link to="/about" className="ml-6 cursor-pointer hover:text-white">
            Qui sommes nous
          </Link>
          <Link to="/diagnostic" className="ml-6 cursor-pointer hover:text-white">
            Diagnostic stratégique
          </Link>
          <Link to="/segmentation" className="ml-6 cursor-pointer hover:text-white">
            Segmentation
          </Link>
          <Link to="/strategie" className="ml-6 cursor-pointer hover:text-white">
            Stratégie web
          </Link>
          <Link to="/e-contenu" className="ml-6 cursor-pointer hover:text-white">
            E-contenu
          </Link>
        </nav>
        <div className="hidden lg:flex">
          <span className="border-b border-white cursor-pointer pr-12 pb-1 md:hidden lg:block">
            Rechercher des produits et accesoires
          </span>
          <FaSearch className="cursor-pointer hover:text-white text-xl" />
          <FaTrashAlt className="text-xl cursor-pointer hover:text-white ml-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
