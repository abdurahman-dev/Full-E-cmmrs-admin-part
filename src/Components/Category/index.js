import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions";
import LeyOut from "../Layout";
import ModalCard from "./Modal";

const Category = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const category = useSelector((state) => state.categoryReducer);
  

  const renderCategories = (categories) => {
    const myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li className="" key={category.name}>
          {category.name}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : (
            ""
          )}
        </li>
      );
    }
    return myCategories;
  };

  return (
    <LeyOut sidebar>
      <Container>
        <Row className="mt-4">
          <Col md={12} className="shadow rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2>Categories</h2>
              </div>
              <div>
                <button className="btn btn-info" onClick={handleShow}>
                  Add Category
                </button>

                <ModalCard
                  handleClose={handleClose}
                  setShow={setShow}
                  status={show}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          {<ul className="">{renderCategories(category.categories)}</ul>}
        </Row>
      </Container>
    </LeyOut>
  );
};

export default Category;
