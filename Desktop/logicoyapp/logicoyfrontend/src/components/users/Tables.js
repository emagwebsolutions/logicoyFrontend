import React from 'react';
import { Table } from 'react-bootstrap';
import {FaTrashAlt, FaRegEdit} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import useUserslogic from './logic/useUserslogic'
import RegForm from './RegForm'

const Tables = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [ids, setIds] = React.useState(false);
   //Users logic
   const {deleteusers} = useUserslogic()


   function editingbox(id){
    setModalShow(true)
    setIds(id)
   }

    return (
      <>

      <div className="scrollY">
        <Table responsive="lg" >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Role</th>
              <th>Residence</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { 
            Object.values(props.output).map((v,i) => { 
              return (
                <tr key={v._id}>
                <td>{i+1}</td>
                <td>{v.fullname}</td>
                <td>{v.phone}</td>
                <td>{v.email}</td>
                <td>{v.role}</td>
                <td>{v.residence}</td>
                <td>
                <div className="actionbtns">

                  <Link to="/#" className="cursor"  
                      onClick={(e)=>{
                        e.preventDefault()
                        deleteusers(v._id)
                      }}
                  >
                  <FaTrashAlt className="text-danger mr-4" />
                  </Link>

                  <Link to="/#"
                        onClick={(e)=>{
                          e.preventDefault()
                          editingbox(v._id)
                        }}
                  >
                  <FaRegEdit className="text-primary" />
                  </Link>
                </div>
                </td>
                </tr>
              )

            })
          }
          </tbody>
        </Table>
      </div>

      <RegForm show={modalShow} output={props.output} id={ids} onHide={() => setModalShow(false)}  />
      </>
    )
 
}

export default Tables;