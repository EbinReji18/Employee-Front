import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col,Row } from 'react-bootstrap';
import { updateEmployee } from '../Api/allApi';

function Edit() {

  const [data, setData] = useState([])
  const [refresh,setRefresh] = useState()
  const [update, setUpdate] = useState({
    firstname:"", lastname:"", age:"", qualification:"",email:"",_id:""
  })

    const [show,setShow] = useState(false);

    useEffect(() => {
      diplayData()
  }, [refresh])


    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleUpdate=async(id,details)=>{
      const {firstname,lastname,age,qualification}=details
      if(!firstname || !lastname || !age || !qualification ){
          toast.error('Enter Valid Data')
      }else{
          const res2=await updateEmployee(id,details)
          // console.log(res2);
          if(res2.status==200){
              toast.success("Update Success")
              diplayData()
              handleClose()
              setUpdate({ firstname:"",lastname:"",age:"",qualification:"",email
                  :"",_id:""})
          }else{
              toast.error('Something Went Wrong')
              console.log(res2);
          }
      }
    }


  return (
    <>
        <button className='btn  mx-3' onClick={handleShow}><i className="fa-solid fa-pen-to-square" /></button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>
                <input type="text" placeholder="First Name" name="firstname" onChange={(e)=>{setUser({...update,firstname:e.target.value})}}  className='form-control mb-2' />
                <input type="text" placeholder="Last Name" name="lastname" onChange={(e)=>{setUser({...update,lastname:e.target.value})}}  className='form-control mb-2' />
                <input type="number" placeholder="Age" name="age" onChange={(e)=>{setUser({...update,age:e.target.value})}}  className='form-control mb-2' />
                <input type="text" placeholder="Qualification" name="qualification" onChange={(e)=>{setUser({...update,qualification:e.target.value})}}  className='form-control mb-2' />
                <input type="email" placeholder=" Email" name="email" onChange={(e)=>{setUser({...update,email:e.target.value})}}  className='form-control mb-2' />
                </Col>

            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit