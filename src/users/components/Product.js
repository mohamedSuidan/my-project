import { Link } from "react-router-dom";
import "./product.css";

function Product({ product, img }) {
  return (
    <div className="products">
      <div className="container">
        <div className="text">
          <h2>Products</h2>
          <Link to={"/product"}>View All</Link>
        </div>
        <div className="row">
          {product
            ? product.map((ele) => {
                return (
                  <div className="col-3" key={ele.id}>
                    <div className="card">
                      <div className="img">
                        <img src={`http://localhost:4000/${ele.main_img}`} />
                      </div>
                      <div className="text">
                        <Link to={`/product/${ele.id}`}>{ele.name}</Link>
                        <p>{ele.price}$</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Product;
