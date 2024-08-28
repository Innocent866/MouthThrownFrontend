import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import axios from "axios"; // Make sure axios is imported

const DeleteModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`https://mouththrown.onrender.com/api/item/deleteproduct/${id}`);
      console.log(res);
      window.location.reload(); // Optionally, you could use a callback to update the parent state instead of reloading
      setShow(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ul className="list-unstyled" onClick={handleShow}>
        <button className="btn d-flex align-items-center gap-3 btn-danger p-2">
          Delete <AiOutlineDelete />
        </button>
      </ul>

      <Modal show={show} onHide={handleClose} className="">
        <Modal.Body className="text-white text-center rounded pb-5 bg-dark">
          <div onClick={handleClose} className="text-end" style={{ cursor: "pointer" }}>
            <IoIosCloseCircle />
          </div>
          <p style={{ color: "#B5B5B5" }}>
            Are you sure you want to delete this product?
          </p>
          <div className="d-flex justify-content-center text-center gap-5 mt-5">
            <button onClick={() => handleDelete(props.id)} className="btn d-flex align-items-center gap-3 btn-danger p-2">
              Delete <AiOutlineDelete />
            </button>
            <button onClick={handleClose} className="btn d-flex align-items-center gap-3 btn-primary p-2">
              Close <AiOutlineCloseSquare />
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteModal;
