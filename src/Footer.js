import { FaTruck, FaStar, FaExchangeAlt, FaEuroSign } from 'react-icons/fa'

function Footer() {
  return (
    <footer
      className="pb-2 bg-dark-gray text-gray-300 fixed bottom-0 w-full
     text-xs"
    >
      <div className="flex items-start justify-evenly">
        <ul>
          <FaStar className="text-white text-xl relative left-10 mb-1" />
          <li className="text-white">Produits exclusifs</li>
          <li>Des produits exclusivement</li>
          <li>disponibles sur dyson.fr et dans</li>
          <li>nos Dyson demo stores</li>
        </ul>

        <ul>
          <FaTruck className="text-white text-xl relative left-10 mb-1" />
          <li className="text-white">Livraison gratuite</li>
          <li>Pour toutes commandes</li>
          <li>supérieures à 60€</li>
          <li>Livraison en 24h*</li>
        </ul>

        <ul>
          <FaExchangeAlt className="text-white text-xl relative left-12 mb-1" />
          <li className="text-white">Droit de rétraction 30 jours</li>
          <li>14 jours pour un paiement en</li>
          <li>4x sans frais</li>
        </ul>

        <ul>
          <FaEuroSign className="text-white text-xl relative left-14 mb-1" />
          <li className="text-white">Paiement en 4x sans frais</li>
          <li>Echelonner votre paiement en 4x sans frais</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
