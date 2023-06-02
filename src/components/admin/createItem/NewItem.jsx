import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItemAction } from "../../../redux/actions/itemAction";

import toast from "react-hot-toast";
import "./newItem.scss";

const NewItem = () => {
  const [itemNumber, setItemNumber] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemImage,setItemImage] = useState("");
    const [imagePrev,setImagePrev] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.item);

 

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImagePrev(e.target.value)
    console.log(file)
    
  
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
        if(Reader.readyState === 2){
           setItemImage(file)
          
        }
    }
}



  const formSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.append("itemNumber", itemNumber);
    myForm.append("itemName", itemName);
    
    myForm.append("file",itemImage);
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
      <section className="largeContainer allSection">
        <div className=" smallSection allSectionContainer">
          <div>
            <h2>CREATE NEW PRODUCT</h2>
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
                  setItemNumber(e.target.value)
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
                onChange= {imageHandler}
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
