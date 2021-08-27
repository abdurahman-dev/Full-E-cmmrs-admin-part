import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import LeyOut from "../Layout";
import ProductDetailsModal from "./productDetailsModal";
import ProductModal from "./ProductModal";

// const renderTable=()=>{
//   return (
//     "asd"
//   );
// }

const Product = () => {
  const [show, setShow] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [productDetail, setProductDetail] = useState(null);

  const products = useSelector((state) => state.productReducer);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseProductDetail = () => setShowProductDetail(false);

  const handleShowProductDetail = (product) => {
    setProductDetail(product)
    setShowProductDetail(true);
  };


  return (
    <LeyOut sidebar>
      <Container>
        <Row className="mt-4">
          <Col md={12} className="shadow rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2>Products</h2>
              </div>
              <div>
                <button className="btn btn-info" onClick={handleShow}>
                  Add Product
                </button>
                <ProductModal
                  handleClose={handleClose}
                  setShow={setShow}
                  status={show}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Table responsive="md" bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {products.products
                  ? products.products.map((product, ind) => (
                      <tr
                        onClick={() => handleShowProductDetail(product)}
                        key={ind} style={{cursor:"pointer"}}
                      >
                        <td>{ind + 1}</td>
                        <td>{product.ProductName}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.category.name}</td>
                      </tr>
                    ))
                  : ""}
              </tbody>
              
            </Table>
          </Col>
        </Row>
      </Container>
      <ProductDetailsModal
    product={productDetail}
      handleClose={handleCloseProductDetail}
      setShow={showProductDetail}
      show={showProductDetail}
    />
    </LeyOut>
  );
};

export default Product;
