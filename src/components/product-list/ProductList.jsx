
const ProductList = ({ products }) =>
{
 
  
  return (
    <div className="card card-body shadow mt-5">
      <h4 className="text-center">Product List</h4>
      <table className="table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={ index }>
              <td>{++index}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                {/* <button className="btn btn-success me-2">+</button>
                 <button className="btn btn-danger">-</button> */}
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
           
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default ProductList;

//ASSIGNMENT

//1. Prevent the same product to be added twice, if it exists, display an error message.
//2. Change the minus button "-" to "Delete", and this should remove the same row that has the delete button
//3. Change the "tr" inside the product list to a reusable component (which receives props).
