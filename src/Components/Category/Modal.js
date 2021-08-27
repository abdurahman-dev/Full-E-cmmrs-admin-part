import Input from '../UI/Input/index'
import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../Redux/Actions';

const ModalCard = (props) => {
    const {status,setShow}=props
    const [categoryName,setCategoryName]=useState('')
    const [categoryId,setCategoryId]=useState('')
    const [categoryImage,setCategoryImage]=useState('')
    const dispatch=useDispatch()
    const category=useSelector((state)=>state.categoryReducer)

    

    const createCategoryList=(categories,options=[])=>{
        for (const category of categories) {
            options.push({
                value:category._id,
                name:category.name
            })
            if(category.children.length>0){
                createCategoryList(category.children,options)
            }
        }
        return options
    }

    const imageHandle=(e)=>{
        setCategoryImage(e.target.files[0]);
    }

   const formSubmit=()=>{
    
    const form=new FormData()
    form.append('name',categoryName)
    form.append('parentId',categoryId)
    form.append('categoryImage',categoryImage)
    dispatch(addCategory(form))

    setCategoryName('')
    setCategoryId('')
    setCategoryImage('')

    setShow(false)
   }
    return (
        <Modal show={status} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Input
            type='text'
            placeholder='Category Name'
            value={categoryName}
            onChange={(e)=>setCategoryName(e.target.value)}
            />
            
           <select className='form-control' value={categoryId} onChange={(e)=>setCategoryId(e.target.value)}>
               <option>Select Category</option>
               {
                   createCategoryList(category.categories)?.map((Option)=><option key={Option.value} value={Option.value}>{
                       Option.name
                   }</option>)
               }
           </select>
           <input  type='file' className="form-control mt-3" onChange={imageHandle} name="categoryImage"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={formSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
};

export default ModalCard;