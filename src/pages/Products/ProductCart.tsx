import React, { useEffect } from "react";
import { useAddToCart } from "../../hooks/addToCart.hook";

const ProductCart = () => {
  const { products: cartProduct, totalProduct, totalAmount, dispatch: removeProduct } = useAddToCart();

  const onDeleteProduct = (item: any) => {
    removeProduct({type: 'remove', payload: {id: item.id, price: item.price}})
  };

  return (
    cartProduct && (
      <div>
        <div>
          <label><b>Total Product:</b> {totalProduct}</label>
          <label style={{'marginLeft': '10px'}}><b>Total Amount:</b> ${Math.ceil(totalAmount)}</label>
        </div>
        {cartProduct.map((item, index: number) => {
          return (
            <div key={index}>
              <img src={item.imageUrl} width="100px" />
              <div>
                <span>{item.title}</span>
                <button type="button" onClick={() => onDeleteProduct(item)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default ProductCart;
