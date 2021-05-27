function Header() {
  return (
    <header className="bg-black">
      <div className="flex items-center justify-end text-gray-500 text-xs border-b border-gray-700 h-8 pr-20">
        <span className="hover:text-white cursor-pointer">
          Trouver une boutique
        </span>
        <span className="ml-8 hover:text-white cursor-pointer">Newsroom</span>
        <span className="ml-8 hover:text-white cursor-pointer">
          Activer votre garantie
        </span>
      </div>
      <div className="flex justify-around items-center h-16 text-sm text-gray-300 font-light">
        <nav className="flex items-center">
          <img
            className="cursor-pointer w-20"
            src="https://cdn.discordapp.com/attachments/691321186797486100/841246324623671296/Dyson-Embleme.png"
            alt="dyson logo"
          />
          <a
            className="ml-6 cursor-pointer hover:text-white"
            href="#qui-sommes-nous"
          >
            Qui sommes nous
          </a>
          <a
            className="ml-6 cursor-pointer hover:text-white"
            href="#diagnostic-stratégique"
          >
            Diagnostic stratégique
          </a>
          <a
            className="ml-6 cursor-pointer hover:text-white"
            href="#segmentation"
          >
            Segmentation
          </a>
          <a
            className="ml-6 cursor-pointer hover:text-white"
            href="#stratégie-web"
          >
            Stratégie web
          </a>
          <a className="ml-6 cursor-pointer hover:text-white" href="#e-contenu">
            E-contenu
          </a>
        </nav>

        <div>
          <span className="border-b border-white cursor-pointer pr-12 pb-1">
            Rechercher des produits et accesoires
          </span>
          <i className="fas fa-search cursor-pointer hover:text-white text-xl"></i>
          <i className="fas fa-shopping-basket text-xl cursor-pointer hover:text-white ml-6"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
