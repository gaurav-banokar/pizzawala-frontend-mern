import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItemAction } from "../../../redux/actions/itemAction";

import toast from "react-hot-toast";
import "./newItem.scss";
import Heading from "../../layout/heading/Heading";

const NewItem = () => {
  const [itemNumber, setItemNumber] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.item);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImagePrev(e.target.value);

    const Reader = new FileReader();
    if(file) {
      Reader.readAsDataURL(file);
  
      Reader.onload = () => {
        if (Reader.readyState === 2) {
          setItemImage(file);
          console.log(file)
        }
      };
      
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.append("itemNumber", itemNumber);
    myForm.append("itemName", itemName);

    myForm.append("file", itemImage);
    myForm.append("itemPrice", itemPrice);

    dispatch(createItemAction(myForm));
    setItemNumber("");
    setItemName("");
    setImagePrev("");
    setItemPrice("");
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
  }, [dispatch, message, error]);

  return (
    <>
      <section className="largeContainer">
        <div className=" smallSection">
          <div>
            <Heading heading={"Create New Product"} />
          </div>

          <div className="productForm">
            <form
              onSubmit={formSubmitHandler}
              encType="multipart/form-data"
              className="productMainForm"
            >
              <input
                type="number"
                name="itemNumber"
                onChange={(e) => {
                  setItemNumber(e.target.value);
                }}
                placeholder="Product Number"
                value={itemNumber}
              />
              <input
                type="text"
                name="itemName"
                onChange={(e) => {
                  setItemName(e.target.value);
                }}
                placeholder="Product Name"
                value={itemName}
              />
              <input
                type="file"
                name="itemImage"
                onChange={imageHandler}
                value={imagePrev}
              />
              <input
                type="number"
                name="itemPrice"
                onChange={(e) => {
                  setItemPrice(e.target.value);
                }}
                placeholder="Price"
                value={itemPrice}
              />
              <button type="submit" className="submitBtn">
                Create
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewItem;
