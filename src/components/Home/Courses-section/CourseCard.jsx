import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/cart/cartAction";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUser, faTag,faMoneyBill } from '@fortawesome/free-solid-svg-icons';



const CourseCard =  ({ item })  => {
  // const { imgUrl, title, lesson, students, price } = props.item;
  // const { addToCart } = useCart();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("add to ca");
    dispatch(addToCart(item));
  };

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={item.imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{item.title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
        <p className="price d-flex align-items-center gap-1">
      <FontAwesomeIcon icon={faBookOpen} style={{ color: '#007bff' }} /> {item.lesson} Lesson
    </p>
          <p className="price d-flex align-items-center gap-1">
      <FontAwesomeIcon icon={faTag} /> {item.students}
    </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
        <p className="price d-flex align-items-center gap-1">
      <FontAwesomeIcon icon={faMoneyBill} /> {item.price}K
    </p>

          <p className="enroll d-flex align-items-center gap-1">
          <button className="btn  btn-succe text-success" onClick={handleAddToCart}>Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
// CourseCard.jsx
// import React from "react";
// import { Card } from "react-bootstrap";

// const CourseCard = ({ item, onClick }) => {
//   return (
//     <Card onClick={onClick} style={{ cursor: "pointer" }}>
//       <Card.Img variant="top" src={item.imgUrl} />
//       <Card.Body>
//         <Card.Title>{item.title}</Card.Title>
//         <Card.Text>
//           Lesson: {item.lesson}
//           <br />
//           Students: {item.students}
//           <br />
//           Price: {item.price}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default CourseCard;
