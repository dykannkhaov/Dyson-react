import Section from './Section'

function Home() {
  return (
    <Section className="pt-10 pl-24">
      <h3 className="text-3xl">
        <div className="mb-8">
          <span className="font-extrabold mr-2">dyson</span>
          <span className="text-blue-500 font-bold mr-2">v15</span>
          <span className="text-gray-500 font-semibold">detect</span>
        </div>
      </h3>
      <h2 className="text-4xl tracking-wider text-gray-700 font-light mb-4">Découvrez notre nouvelle technologie</h2>
      <h2 className="text-4xl tracking-wider text-gray-700 font-light mb-3">
        Son laser révèle la poussière microscopique
      </h2>
      <p className="text-gray-700 font-semibold mb-6">L'aspirateur sans fil Dyson le plus puissant et intelligent.</p>
      <div>
        <button className="py-5 px-6 bg-gray-700 text-white mr-3 hover:bg-gray-800">En savoir plus</button>
        <button className="py-5 px-6 bg-green-600 font-semibold hover:bg-green-700">Achetez maintenant</button>
      </div>
    </Section>
  )
}

export default Home
