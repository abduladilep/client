// cartActions.js
import { message } from "antd";

export const addToCart = (course) => {
    console.log(course,"courese");
    message.success("Item Added to the Cart");
    return {
      type: "ADD_TO_CART",
      payload: course,
    };

  };
  