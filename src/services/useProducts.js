import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const useProducts = () => {
  const dispatch = useDispatch();
  async function fetchAPI() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      dispatch({ type: "START", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAPI();
  },[]);
};

export default useProducts;
