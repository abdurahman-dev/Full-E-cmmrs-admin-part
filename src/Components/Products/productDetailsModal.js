import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

const ProductDetailsModal = (props) => {
  const { show, product } = props;
  return (
    <Modal size="lg" show={show} onHide={props.handleClose}>
      <Modal.Header className={"text-center"}>
        <Modal.Title>Product Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={12} md={3}>
            <label>Product Name</label>
          </Col>
          <Col sm={1} md={1}>
            :
          </Col>
          <Col sm={12} md={8}>
            <h5>{product?.ProductName}</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={3}>
            <label>Product Price</label>
          </Col>
          <Col sm={1} md={1}>
            :
          </Col>
          <Col sm={12} md={8}>
            <h5>{product?.price}</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={11} md={3}>
            <label>Product Quantity</label>
          </Col>
          <Col sm={1} md={1}>
            :
          </Col>
          <Col sm={12} md={8}>
            <h5>{product?.quantity}</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={11} md={3}>
            <label>Product Category</label>
          </Col>
          <Col sm={1} md={1}>
            :
          </Col>
          <Col sm={12} md={8}>
            <h5>{product?.category.name}</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={11} md={3}>
            <label>Product Description</label>
          </Col>
          <Col sm={1} md={1}>
            :
          </Col>
          <Col sm={12} md={12}>
            <p>{product?.description}</p>
          </Col>
        </Row>
        <Row>
            <Col>
            {product?.productImg.map((image,ind)=> <div key={ind} className=" mx-2" style={{float:'left'}}>
                <img className="img-fluid rounded" style={{width:'150px',height:"150px"}} src={`http://localhost:2500/public/${image.img}`} alt="" />
            </div>)}
            </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetailsModal;
