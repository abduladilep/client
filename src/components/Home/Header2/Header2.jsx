// import React, { useRef } from "react";
// import { Container } from "reactstrap";
// import "./header.css";
// import { useCart } from "../../reducer/cartContext";
// import { Link } from 'react-router-dom';


// const navLinks = [
//   {
//     display: "Home",
//     url: "#",
//   },
//   {
//     display: "Login",
//     url: "#",
//   },

//   // {
//   //   display: "Courses",
//   //   url: "#",
//   // },
//   // {
//   //   display: "Pages",
//   //   url: "#",
//   // },
//   // {
//   //   display: "Blog",
//   //   url: "#",
//   // },
// ];

// const Header = () => {
//   const menuRef = useRef();

//   const menuToggle = () => menuRef.current.classList.toggle("active__menu");
//   const { state: { cart } } = useCart(); // Access cart state from the context

//   return (
//     <header className="header">
//       <Container>
//         <div className="navigation d-flex align-items-center justify-content-between">
//           <div className="logo">
//             <h2 className="d-flex align-items-center gap-1">
//               {/* <span className="before-logo-element"></span> */}
//               <img
//                 width="15%"
//                 height="10%"
//                 src={`../prabha.png`}
//                 alt="Logo"
//                 className="logo-image "
//               />
//             </h2>
//           </div>

//           <div className="nav d-flex align-items-center gap-5">
//             <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
//               <ul className="nav__list">
//                 {navLinks.map((item, index) => (
//                   <li key={index} className="nav__item">
//                     <a href={item.url}>{item.display}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//           </div>
//           <div className="cart-info">
//           <Link to="/cart" className="cart-link">

//               <p className="cart-count">{cart.length}</p>
//               <i className="ri-shopping-cart-line"></i>
//             </Link>
//             </div>

//           <div className="mobile__menu">
//             <span>
//               <i class="ri-menu-line" onClick={menuToggle}></i>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;
import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./header2.css";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RiShoppingCartLine } from 'react-icons/ri';


const Header2 = () => {

const cartItems = useSelector((state) => state.cart.cartItems);
const cartCount = cartItems.reduce((count, item) => count + (item.quantity || 0), 0);

console.log(cartItems.length,"count");


  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <>
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <img
                width="15%"
                height="10%"
                src={`../prabha.png`}
                alt="Logo"
                className="logo-image "
              />
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            {/* <div className="nav__menu" ref={menuRef} onClick={menuToggle}> */}
                 <div className="nav__menu" >

              <ul className="nav__list">
                <li className="nav__item">
                  <Link to="/hom">Home</Link>
                </li>
                <li className="nav__item">
                  <Link to="/login">Login</Link>
                </li>
                <li className="nav__item">
                  <Link to="/cart" className="cart-link">
                  <RiShoppingCartLine className="custom-cart-icon" />
                    {/* <span className="cart-count-inside-icon"> {cartItems.length}</span> */}
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/cart" className="cart-link">
                  {/* <RiShoppingCartLine className="custom-cart-icon" /> */}
                    <span className="cart-count-inside-icon"> {cartItems.length}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          

          <div className="mobile__menu">
            <span>
              {/* <i className="ri-menu-line" onClick={menuToggle}></i> */}
               <i className="ri-menu-line" ></i>


            </span>
          </div>
        </div>
      </Container>
    </header>
    </>
  );
};

export default Header2;
