
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Login from "./components/login/Login";
import Header from "./components/layout/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About"
import Cart from "./components/cart/Cart";
import NewItem from "./components/admin/createItem/NewItem";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/footer/Footer";
import ConfirmOrder from "./components/cart/confirmOrder/ConfirmOrder";
import Shipping from "./components/cart/shipping/Shipping";
import PaymentSuccess from "./components/cart/paymentSuccess/PaymentSuccess";
import EmptyCart from "./components/cart/emptyCart/EmptyCart";
import MyProfile from "./components/profile/MyProfile";
import MenuSection from "./components/menuSection/MenuSection";
import MyOrders from "./components/myOrders/MyOrders";
import Payment from "./components/payment/Payment";
import OrderDetails from "./components/myOrders/OrderDetails";
import Loader from "./components/loader/Loader";
import NotFound from "./components/layout/notFound/NotFound";

import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/userAction";
import { ProtectedRoute } from "protected-route-react";
import { getAllItemsByCategoryAction } from "./redux/actions/itemAction";
import OrdersNotFound from "./components/myOrders/OrdersNotFound";



//styles
import "./styles/app.scss";



function App() {

  const dispatch = useDispatch();

  const {  error, user } = useSelector((state) => state.auth);
  const isAuthenticated = true;

  useEffect(() => {
    if (error) {
      dispatch({
        type: "clearError"
      })
    }
  }, [dispatch, error])

  useEffect(() => {
    dispatch(loadUser())
    dispatch(getAllItemsByCategoryAction())

  }, [dispatch])


  return (
    <div className="App">

      {
        (<Router>
          <Header isAuthenticated={isAuthenticated} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<MenuSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/cart" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Cart /></ProtectedRoute>} />
            <Route path="/me" element={<ProtectedRoute isAuthenticated={isAuthenticated}><MyProfile admin={user && user.role === "admin"} /></ProtectedRoute>} />
            <Route path="/shipping" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Shipping /></ProtectedRoute>} />

            <Route path="/confirmorder" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ConfirmOrder /></ProtectedRoute>} />
            <Route path="/paymentprocess" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Payment /></ProtectedRoute>} />
            <Route path="/paymentsuccess" element={<ProtectedRoute isAuthenticated={isAuthenticated}><PaymentSuccess /></ProtectedRoute>} />
            <Route path="/myorders" element={<ProtectedRoute isAuthenticated={isAuthenticated}><MyOrders /></ProtectedRoute>} />
            <Route path="/myorders/order/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><OrderDetails /></ProtectedRoute>} />
            <Route path="/order/notFound" element={<OrdersNotFound />} />
            <Route path="/emptycart" element={<EmptyCart />} />

            <Route path="/admin/item/new" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><NewItem admin={user && user.role === "admin"} /></ProtectedRoute>} />

            <Route path="/loader" element={<Loader />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </Router>
        )

      }
      <Toaster />
    </div>
  );
}

export default App;
