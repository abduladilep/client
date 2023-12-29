import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import Axios from "axios";
import Toast_Comp from "../../../../../components/Toast/Toast_Comp";
import Spinner_comp from "../../../../../components/Spinner/Spinner_comp";
import "./AddCourseModal.css";
import { useDispatch } from "react-redux";
import { fetchCourseInfo } from "../../../../../Redux/course/courseAction";

const AddCourseModal = () => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [courseThumbnail, setCourseThumbnail] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseName, setCourseName] = useState("");
  const [imgLabel, setImgLabel] = useState("Choose photo");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)
 };

 
  const dispatch=useDispatch()

  useEffect(() => {
    setImgLabel(courseThumbnail.name);
  }, [courseThumbnail]);

  const courseFormHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("courseDescription", courseDescription);
    formData.append("img", courseThumbnail);
console.log("course",formData);
    fetch("https://prabhatechlmsserver.onrender.com/post-course", {
      body: formData,
      method: "post",
      headers: {
        authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setToast(true);
        setLoading(false);
        setCourseDescription('')
        setCourseName('')
        setCourseThumbnail('')
        dispatch(fetchCourseInfo())
        dispatch({type:"UPDATE__COURSE__LIST",payload: true})
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleShow}>
        Add Course
      </Button>

      <Toast_Comp
        setToast={setToast}
        renderToast={toast}
        msg="Course Uploaded Successfully"
      />

      <Modal
        size="lg"
        // show={lgShow}
        // onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        show={show}
        // onHide={handleClose}
        
        
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography color="textSecondary" variant="h4">
              Add Course
            </Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {loading && <Spinner_comp />} */}

          <Form onSubmit={courseFormHandler} encType="multipart/form-data">
            <Form.Group>
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                required
                onChange={(e) => setCourseName(e.target.value)}
                value={courseName}
                type="text"
                placeholder="Enter course name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Course Description</Form.Label>

              <Form.Control
                required
                onChange={(e) => setCourseDescription(e.target.value)}
                value={courseDescription}
                as="textarea"
                rows={3}
                placeholder="Enter course Description"
              />
            </Form.Group>
            {/* <Form.Group className="input__file">
              <label>Course Thumbnail</label>
              <br />
              <Form.File
                // required
                type="file"
                filename="img"
                onChange={(e) => setCourseThumbnail(e.target.files[0])}
                id="custom-file"
                custom
                label={imgLabel ? `${imgLabel}` : "Choose photo"}
              />
              
            </Form.Group> */}
 <Form.Group controlId="formCourseThumbnail">
  <Form.Label>Course Thumbnail</Form.Label>
  <Form.Control
    type="file"
    onChange={(e) => setCourseThumbnail(e.target.files[0])}
  />
</Form.Group>

            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCourseModal;

// import React, { useEffect, useState } from "react";
// import { Modal, Form, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import Typography from "@material-ui/core/Typography";
// import Axios from "axios";
// import Toast_Comp from "../../../../../components/Toast/Toast_Comp";
// import Spinner_comp from "../../../../../components/Spinner/Spinner_comp";
// import "./AddCourseModal.css";
// import { fetchCourseInfo } from "../../../../../Redux/course/courseAction";

// const AddCourseModal = () => {
//   console.log("modaaalll");
//   const [show, setShow] = useState(false);
//   const [courseThumbnail, setCourseThumbnail] = useState("");
//   const [courseDescription, setCourseDescription] = useState("");
//   const [courseName, setCourseName] = useState("");
//   const [imgLabel, setImgLabel] = useState("Choose photo");
//   const [loading, setLoading] = useState(false);
//   const [toast, setToast] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     console.log("useeffect");
//     setImgLabel(courseThumbnail.name);
//   }, [courseThumbnail]);

//   const courseFormHandler = (e) => {
//     console.log("mmmmmmmmmmmmmmmmmmmmm");
//     e.preventDefault();
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("courseName", courseName);
//     formData.append("courseDescription", courseDescription);
//     formData.append("img", courseThumbnail);
//    console.log(formData,"ciouh ");
//     fetch("http://localhost:3003/post-course", {
//       body: formData,
//       method: "post",
//       headers: {
//         authorization: "Bearer " + localStorage.getItem("auth_token"),
//       },
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         setToast(true);
//         setLoading(false);
//         setCourseDescription("");
//         setCourseName("");
//         setCourseThumbnail("");
//         dispatch(fetchCourseInfo());
//         dispatch({ type: "UPDATE__COURSE__LIST", payload: true });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <Button
//         color="primary"
//         variant="contained"
//         onClick={handleShow}
//       >
//         Add Course
//       </Button>

//       <Toast_Comp
//         setToast={setToast}
//         renderToast={toast}
//         msg="Course Uploaded Successfully"
//       />

//       <Modal
//         show={show}
//         onHide={handleClose}
//         size="lg"
//         aria-labelledby="example-modal-sizes-title-lg"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>
//             <Typography color="textSecondary" variant="h4">
//               Add Course
//             </Typography>
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {loading && <Spinner_comp />}

//           <Form onSubmit={courseFormHandler} encType="multipart/form-data">
//             <Form.Group>
//               <Form.Label>Course Name</Form.Label>
//               <Form.Control
//                 required
//                 onChange={(e) => setCourseName(e.target.value)}
//                 value={courseName}
//                 type="text"
//                 placeholder="Enter course name"
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Course Description</Form.Label>
//               <Form.Control
//                 required
//                 onChange={(e) => setCourseDescription(e.target.value)}
//                 value={courseDescription}
//                 as="textarea"
//                 rows={3}
//                 placeholder="Enter course Description"
//               />
//             </Form.Group>
//             <Form.Group className="input__file">
//               <label>Course Thumbnail</label>
//               <br />
//               <Form.File
//                 required
//                 type="file"
//                 filename="img"
//                 onChange={(e) => setCourseThumbnail(e.target.files[0])}
//                 id="custom-file"
//                 custom
//                 label={imgLabel ? `${imgLabel}` : "Choose photo"}
//               />
//             </Form.Group>
//             <Button
//               type="submit"
//               color="primary"
//               variant="contained"
//             >
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             color="secondary"
//             variant="contained"
//             onClick={handleClose}
//           >
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default AddCourseModal;

