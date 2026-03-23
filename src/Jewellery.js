import React, { useEffect, useState } from "react";

const Jewellery = () => {
  const [products, setProducts] = useState([]);

  // =============================
  // 📥 FETCH PRODUCTS
  // =============================
  const fetchProducts = () => {
    fetch("https://disha-ecommerce-backend.onrender.com/jewellery")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data from server");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Invalid data format");
        setProducts(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
        setProducts([]);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // =============================
  // 🛒 BUY NOW
  // =============================
  const handleBuy = (product) => {
    alert(`Buying: ${product.name}`);
  };

  return (
    <section className="price_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Our Jewellery Price</h2>
        </div>

        <div className="price_container">
          {products.length > 0 ? (
            products.slice(0, 10).map((product, index) =>
              product && product.name && product.image ? (
                <div className="box" key={product.id || index}>
                  <div className="name">
                    <h6>{product.name}</h6>
                  </div>

                  <div className="img-box">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>

                  <div className="price">
                    <h6>{product.price}</h6>
                  </div>

                  {/* ✅ BUY NOW ONLY */}
                  <div style={{ marginTop: "10px" }}>
                    <button
                      onClick={() => handleBuy(product)}
                      style={{
                        padding: "6px 12px",
                        background: "#ff9800",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ) : null,
            )
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jewellery;
