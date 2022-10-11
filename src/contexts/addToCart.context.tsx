import { createContext, useReducer } from "react";
type ProductType = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
};

type InitialValueType = {
  products: ProductType[];
  totalProduct: number;
  totalAmount: number;
};

type Action =
  | { type: "add"; payload: ProductType }
  | { type: "remove"; payload: ProductType };

interface AddToCartType extends InitialValueType {
  dispatch: Function;
};

const initialValue: InitialValueType = {
  products: [],
  totalProduct: 0,
  totalAmount: 0,
};

export const addToCartContent =
  createContext<AddToCartType | undefined>(undefined);

const reducerHandler = (state: InitialValueType, action: Action) => {
  switch (action.type) {
    case "add":
      const productId = action.payload.id;
      const duplicateRecords = state.products.filter((item) => item.id === productId);
      if(duplicateRecords.length) {
        return { ...state, products: state.products, totalProduct: state.products.length, totalAmount: (state.totalAmount + Math.ceil(action.payload.price))};;
      }
      return { ...state, products: [...state.products, action.payload], totalProduct: (state.products.length + 1), totalAmount: (state.totalAmount + Math.ceil(action.payload.price))};

    case "remove":
        const id = action.payload.id;
        const deletedRecords = state.products.filter((item) => item.id !== id);
        return { ...state, products: deletedRecords, totalProduct: deletedRecords.length, totalAmount: (state.totalAmount - Math.ceil(action.payload.price))};

    default:
      console.log('wrong action type pass');
      return state;
  }
};

export const CartContentProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducerHandler, initialValue);
  return (
    <addToCartContent.Provider value={{...state, dispatch}}>
      {children}
    </addToCartContent.Provider>
  );
};
