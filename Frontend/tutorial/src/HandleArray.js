import React from 'react'
import { Table } from 'react-bootstrap'

const HandleArray = (props) => {
  const students=[
    {
      name:"shivam",
      email:"2020uce0060",
      branch:"civil"
    },
    {
      name:"kumar",
      email:"2020uce0060",
      branch:"civil"
    },
    {
      name:"shivu",
      email:"2020uce0060",
      branch:"civil"
    }
  ]
  return (
    <div>
        <p>Hello From Handle Array</p>
        <Table >
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Branch</th>
          </tr>
          {
            students.map((data)=>
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.branch}</td>
              </tr>
            )
          }
        </Table>
    </div>
  )
}

export default HandleArray