import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { contactFormAction } from "../../redux/actions/userAction";
import "./contact.scss";

const Contact = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [disablebtn, setDisablebtn] = useState(false);

  const { message , error} = useSelector(state => state.contact)

  const contactFormHandler = (e) => {
    e.preventDefault();
 

   dispatch(contactFormAction({name,email,message:userMessage}));

   setName("");
   setEmail("");
   setUserMessage("");
   
  };

  useEffect(() => {
    if(message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    };

    if(error){
      toast.error(error);
      dispatch({
        type:"clearError"
      })
    }

  }, [dispatch, message, error]);
  

  return (
    <section className="contact allSection">
      <div className="contactContainer allSectionContainer">
        <h2>Contact Us</h2>

        <form onSubmit={contactFormHandler} encType="multipart/form-data">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />

          <textarea
            placeholder="Message..."
            onChange={(e) => setUserMessage(e.target.value)}
            required
            cols="30"
            rows="10"
          ></textarea>

          <button type="submit" value={disablebtn} onClick={() => setDisablebtn(true)}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
