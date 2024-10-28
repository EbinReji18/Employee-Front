import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addEmployee } from '../Api/allApi';
import { Row,Col } from 'react-bootstrap';
import { toast } from 'react-toastify';


function Add({depend}) {

const [show, setShow] = useState(false);
const [user, setUser] = useState({
  firstname: "",lastname: "",age: "",qualification: "",email: ""
})

  const handleAdd=async()=>{
    const {firstname,lastname,age,qualification,email}=user
    if(!firstname || !lastname || !age || !qualification || !email){
      toast.error("Enter valid Data")
    }else{
      const res=await addEmployee(user)
        if(res.status == 200){
          toast.success("Employee Added")
          depend(res)
          handleClose()
          setUser({firstname: "",lastname: "",age: "",qualification: "",email: ""})
        }else{
          toast.error("failed To Add")
        }
    }
  }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

    <button className='btn btn-success' onClick={handleShow}>Add Employee</button>


     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>
                <input type="text" placeholder="First Name" name="firstname" onChange={(e)=>{setUser({...user,firstname:e.target.value})}} className='form-control mb-2' />
                <input type="text" placeholder="Last Name" name="lastname" onChange={(e)=>{setUser({...user,lastname:e.target.value})}}  className='form-control mb-2' />
                <input type="number" placeholder="Age" name="age" onChange={(e)=>{setUser({...user,age:e.target.value})}} className='form-control mb-2' />
                <input type="text" placeholder="Qualification" name="qualification" onChange={(e)=>{setUser({...user,qualification:e.target.value})}} className='form-control mb-2' />
                <input type="email" placeholder=" Email" name="email" onChange={(e)=>{setUser({...user,email:e.target.value})}}  className='form-control mb-2' />
                </Col>

            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Add