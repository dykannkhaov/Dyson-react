import { Link, useLocation } from 'react-router-dom'
import { FaSearch, FaTrashAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClick = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const closeMenuOnDesktop = (e) => {
      if (e.target.innerWidth >= 1024) {
        if (!isMenuOpen) return
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', closeMenuOnDesktop)
    return () => {
      window.removeEventListener('resize', closeMenuOnDesktop)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const location = useLocation()


  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <div
      className={`relative px-4 flex justify-between lg:justify-around lg:items-center h-16 text-sm text-gray-300 font-light
    ${isMenuOpen ? 'mb-56' : 'mb-0'}`}
    >
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

      <div className="flex items-center">
        <span className="border-b border-white cursor-pointer pr-12 pb-1 hidden lg:block">
          Rechercher des produits et accesoires
        </span>
        <nav id="hamnav" className="lg:hidden">
          <label
            htmlFor="hamburger"
            className="inline-block text-gray-400 hover:text-white text-3xl cursor-pointer"
            onClick={handleClick}
          >
            &#9776;
          </label>
          <input type="checkbox" id="hamburger" className="hidden" />

          {isMenuOpen ?
            <div id="hamitems" className="bg-black absolute left-0 bottom-0 transform translate-y-full w-full">
              <Link to="/about" className="box-border block text-white border-t hover:bg-gray-900 text-lg p-2">
                Qui sommes nous
              </Link>
              <Link to="/diagnostic" className="box-border block text-white border-t hover:bg-gray-900 text-lg p-2">
                Diagnostic stratégique
              </Link>
              <Link to="/segmentation" className="box-border block text-white border-t hover:bg-gray-900 text-lg p-2">
                Segmentation
              </Link>
              <Link to="/strategie" className="box-border block text-white border-t hover:bg-gray-900 text-lg p-2">
                Stratégie web
              </Link>
              <Link to="/e-contenu" className="box-border block text-white border-t hover:bg-gray-900 text-lg p-2">
                E-contenu
              </Link>
            </div>
            : null
          }



        </nav>
        <FaSearch className="cursor-pointer hover:text-white text-xl lg:block hidden" />
        <FaTrashAlt className="text-xl cursor-pointer hover:text-white ml-6 lg:block hidden" />
      </div>
    </div>
  )
}

export default Nav
