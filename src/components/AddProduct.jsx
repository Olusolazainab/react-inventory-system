import {useState} from "react";

function AddProduct({ newProduct }) {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleChangeProductName = (e) => {
    setProductName(e.target.value);
  }

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  }

  const handleAddProduct = (e) => {
      e.preventDefault();
      let prod = { name: productName, quantity: quantity };
      
      newProduct(prod);
  }

  return (
    <div className="card shadow">
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label>Product Name</label>
            <input type="text" name="productName" value={productName} className="form-control" onChange={handleChangeProductName} placeholder="Product Name" />
          </div>
          <div className="mb-3">
            <label>Quantity</label>
            <input type="number" name="quantity" value={quantity} className="form-control" onChange={handleChangeQuantity} placeholder="Quantity" />
          </div>
          <button onClick={handleAddProduct} className="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct;
