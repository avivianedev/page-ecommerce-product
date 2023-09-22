import Navbar from "./components/Navbar"
import Product from "./components/Product"
import { Provider } from "./context/Provider"


export default function App() {

  return (
    <>
      <Provider>
        <header>
          <Navbar />
        </header>
        <main>
          <Product />
        </main>
      </Provider>
    </>
  )
}


