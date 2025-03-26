function ProductPage() {
    const products = [
      { id: 1, name: "Product 1", description: "This is product 1", price: "$10" },
      { id: 2, name: "Product 2", description: "This is product 2", price: "$20" },
      { id: 3, name: "Product 3", description: "This is product 3", price: "$30" },
    ];
  
    return (
      <div className="product-page">
        <h2>Products</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ProductPage;
  