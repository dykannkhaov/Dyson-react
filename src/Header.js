import { FaSearch } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'

function Header(props) {
  return (
    <header className="bg-black">
      <div className="flex items-center justify-end text-gray-500 text-xs border-b border-gray-700 h-8 pr-20">
        <span className="hover:text-white cursor-pointer">Trouver une boutique</span>
        <span className="ml-8 hover:text-white cursor-pointer">Newsroom</span>
        <span className="ml-8 hover:text-white cursor-pointer">Activer votre garantie</span>
      </div>
      <div className="flex justify-around items-center h-16 text-sm text-gray-300 font-light">
        <nav className="flex items-center">
          <img
            className="cursor-pointer w-20"
            src="https://cdn.discordapp.com/attachments/691321186797486100/841246324623671296/Dyson-Embleme.png"
            alt="dyson logo"
            onClick={() => props.setPage('homepage')}
          />
          <a
            className="ml-6 cursor-pointer hover:text-white"
            href="#qui-sommes-nous"
            onClick={() => props.setPage('introduction')}
          >
            Qui sommes nous
          </a>
          <a
            className="ml-6 cursor-pointer hover:text-white"
            href="#diagnostic-stratégique"
            onClick={() => props.setPage('diagnostic')}
          >
            Diagnostic stratégique
          </a>
          <a
            className="ml-6 cursor-pointer hover:text-white"
            href="#segmentation"
            onClick={() => props.setPage('segmentation')}
          >
            Segmentation
          </a>
          <a
            className="ml-6 cursor-pointer hover:text-white"
            href="#stratégie-web"
            onClick={() => props.setPage('strategie')}
          >
            Stratégie web
          </a>
          <a
            className="ml-6 cursor-pointer hover:text-white"
            href="#e-contenu"
            onClick={() => props.setPage('e-contenu')}
          >
            E-contenu
          </a>
        </nav>
        <div className="flex">
          <span className="border-b border-white cursor-pointer pr-12 pb-1">Rechercher des produits et accesoires</span>
          <FaSearch className="cursor-pointer hover:text-white text-xl" />
          <FaTrashAlt className="text-xl cursor-pointer hover:text-white ml-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
