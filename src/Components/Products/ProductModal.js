import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../Redux/Actions/product.action";
import Input from "../UI/Input";

const ProductModal = (props) => {
  const { status, setShow } = props;
  const [ProductName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [productPicture, setProductPicture] = useState([]);

  const dispatch = useDispatch();
  const totalCategories = useSelector((state) => state.categoryReducer);

  const imageHandle = (e) => {
    setProductPicture([
      ...productPicture,
      e.target.files[0]
    ]);
  };

  const categoryList = (category, myCategories = []) => {
    for (let cat of category) {
      myCategories.push({
        name: cat.name,
        value: cat._id,
      });
      if (cat.children.length > 0) {
        categoryList(cat.children, myCategories);
      }
    }
    return myCategories;
  };

  const addProductHandle = () => {

    const form = new FormData();

    form.append('ProductName',ProductName)
    form.append('price',price)
    form.append('description', description)
    form.append('category', category)
    form.append('quantity', quantity)
    for(let pic of productPicture){
      form.append('ProductPicture', pic)
    }

    dispatch(addProducts(form))
    setProductName('')
    setQuantity('')
    setPrice('')
    setDescription('')
    setCategory('')
    setProductPicture([])

    setShow(false);
  };
  return (
    <Modal show={status} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          Label="Enter Product Name"
          type="text"
          placeholder="Product Name"
          value={ProductName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <Input
          Label="Enter Product Price"
          type="number"
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          Label="Total Quantity"
          type="number"
          value={quantity}
          placeholder="Quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <select
          className="form-control mb-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Select a Category</option>
          {categoryList(totalCategories.categories).map((Option,ind) => (
            <option key={ind} value={Option.value}>
              {Option.name}
            </option>
          ))}
        </select>

        <label>Product Description</label>
        <Form.Control
          as="textarea"
          value={description}
          rows={3}
          onChange={(e) => setDescription(e.target.value)}
        />
        {
          productPicture.map((pic,ind)=><li key={ind}>{
              pic.name
            }</li>)
        }
        <input
          type="file"
          className="form-control mt-3"
          onChange={imageHandle}
          name="productImg"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={addProductHandle}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
