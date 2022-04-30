import {useState} from "react";
import './App.css';
import AddProduct from "./components/AddProduct";
import ProductList from "./components/product-list/ProductList";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  function collectNewProduct(newProd){ //collect data from the intermediary as a parameter
    if (allProducts === newProd)
    {
      alert("product already exist")
      
}
   setAllProducts([ ...allProducts, newProd ]); //add new element to the existing array using array destructuringl.o
  }

  return (
    <div className="container">
      <h2 className="text-center mb-3">Inventory Management App</h2>
      <AddProduct newProduct={collectNewProduct} />
      <ProductList products={allProducts} />
    </div>
  );
}

export default App;
