import logo from './logo.svg';
import './App.css';
import {Fragment, useState} from "react";
import ReactDOM from 'react-dom';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Card from "./components/UI/Card";
import Cart from "./components/Cart/Cart";
import CaffeMenu from "./components/Provv/CafeMenu/CaffeMenu";
import RegistrationForm from "./components/Provv/RegistationForm/RegistrationForm";
import Modal from "./components/UI/Modal";
import CartProvider from "./store/CartProvider";

function App() {

    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    }
    const hideCartHandler = () => {
        setCartIsShown(false)
    }
    return (
        <CartProvider>
            {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
            <Header onShowCard={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
