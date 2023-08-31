import React from "react";
import { Country, State } from "country-state-city";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// scss
import "./shipping.scss";
import Heading from "../../layout/heading/Heading";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [hNo, setHNo] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "addShippingInfo",
      payload: {
        country,
        state,
        city,
        hNo,
        pinCode,
        phoneNo,
      },
    });

    navigate("/confirmorder");
  };
  return (
    <section className="shippingSection ">
      <div>
        <Heading heading={"Shipping Details"} />
      </div>
      <main>
        <form onSubmit={submitHandler}>
          <div>
            <label>Country</label>

            <select
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>

          {country && (
            <div>
              <label>State</label>
              <select
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
          )}

          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="Enter City"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div>
            <label>H.No.</label>
            <input
              type="text"
              placeholder="Enter House No."
              value={hNo}
              onChange={(e) => setHNo(e.target.value)}
            />
          </div>

          <div>
            <label>Pin Code</label>
            <input
              type="number"
              placeholder="Enter Pincode"
              required
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>
          <div>
            <label>Phone No.</label>
            <input
              type="number"
              placeholder="Enter Phone No."
              value={phoneNo}
              required
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
