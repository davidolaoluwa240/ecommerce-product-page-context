// Store
import { DataProvider } from "./context/DataContext";

// Components
import NavBar from "./components/shared/NavBar";
import ProductDetails from "./components/ui/product/ProductDetails";

function App() {
  return (
    <>
      <DataProvider>
        <header className="header">
          <NavBar />
        </header>

        <main className="main">
          <ProductDetails />
        </main>
      </DataProvider>
    </>
  );
}

export default App;
