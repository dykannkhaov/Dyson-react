import Header from './Header'
import Section from './Section'
import Home from './Home'
import About from './About'
import Diagnostic from './Diagnostic'
import Segmentation from './Segmentation'
import Strategie from './Strategie'
import Econtenu from './Econtenu'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/diagnostic">
            <Diagnostic />
          </Route>
          <Route path="/segmentation">
            <Segmentation />
          </Route>
          <Route path="/strategie">
            <Strategie />
          </Route>
          <Route path="/e-contenu">
            <Econtenu />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App
