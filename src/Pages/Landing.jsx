import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <>
    
        <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'100vh',backgroundColor:"white"}}>
        <div className='w-75 p-5'>
            <Row>
                <Col>
                
                    <h2>Employee Management</h2>
                    <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis velit commodi amet alias, corporis vitae aut voluptate! Quos provident officiis veritatis adipisci voluptatum pariatur eaque exercitationem sit, possimus quod. 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda cum odio quas molestiae quasi iste minus, aut excepturi veniam, vel magni, accusamus asperiores error iusto quo illo deserunt perspiciatis autem!</p>
                        <Link to={'/dash'} className='btn btn-success'>Let's Go</Link>
                </Col>
                <Col>
                <img src="https://img.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg?t=st=1729316372~exp=1729319972~hmac=45a29f9a1e763cf64fa05687875222298dfa8b0509b91b3a080eba9df9332375&w=1060" alt="" className='img-fluid w-100' />
                </Col>
            </Row>
        </div>
       
    </div>
    </>
  )
}

export default Landing