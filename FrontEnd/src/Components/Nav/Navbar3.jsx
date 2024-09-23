import React from 'react'
import './Navbar3'
import Dropdown from 'react-bootstrap/Dropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar3.css'
const Navbar3 = ({home,district,download,contact}) => {
  return (
    <div className='writer'>
        <a href="home" onClick={home}>Home</a>
        <Dropdown >
      <Dropdown.Toggle variant="" id="drop1" size="sm">
        About
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Department History</Dropdown.Item>
        <Dropdown.Item href="#/action-2">ESM Defination</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Department of Sainik Welfare</Dropdown.Item>
        <Dropdown.Item href='#/action4'>ZSWO officers List</Dropdown.Item>
        <Dropdown.Item href='#/action5'>Department of Sianik Welfare Flowchart</Dropdown.Item>
        <Dropdown.Item href='#/action6'>Zila of Sainik Welfare Flowchart</Dropdown.Item>
        <Dropdown.Item href='#/action4'>Soldiers Independent Rehabilitation Foundation</Dropdown.Item>

      </Dropdown.Menu>
      <a href="District" onClick={district}>District</a>
      
      
      
      
    </Dropdown>
    <Dropdown>
    <Dropdown.Toggle variant='' id='drop2' size="sm">
            Armed Forces Flag Day
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">GR</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Online Donation</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Pan Card</Dropdown.Item>
        <Dropdown.Item href='#/action4'>Form 10 AC & 12A</Dropdown.Item>
        

      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
    <Dropdown.Toggle variant='' id='drop2' size="sm">
            Welfare Schemes
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Ben Fund Scheme Marathi</Dropdown.Item>
        <Dropdown.Item href="#/action-2">WELFARE SCHEMES FROM KENDRIYA SAINIK BOARD NEW DELHI</Dropdown.Item>
        <Dropdown.Item href="#/action-3">WELFARE SCHEME UNDER RMDF</Dropdown.Item>
        <Dropdown.Item href='#/action4'>MAHARASHTRA STATE GOVT. FINANCIAL ASSISTANCE SCHEMES</Dropdown.Item>
        

      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
    <Dropdown.Toggle variant='' id='drop2' size="sm">
            Armed Forces Flag Day
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">GR</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Online Donation</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Pan Card</Dropdown.Item>
        <Dropdown.Item href='#/action4'>Form 10 AC & 12A</Dropdown.Item>
        

      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
    <Dropdown.Toggle variant='' id='drop2' size="sm">
            Right To Information
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">RTI 2023</Dropdown.Item>
        
        

      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
    <Dropdown.Toggle variant='' id='drop2' size="sm">
            Citizen Charter
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Citizen Chater 2023</Dropdown.Item>
        
        

      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
    <Dropdown.Toggle variant='' id='drop2' size="sm">
            Facilities
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Hostel</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Lawns</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Rest House</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Rest House List in Maharashtra</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
    <Dropdown.Toggle variant='' id='drop2' size="sm">
            Recruitment
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Apply Online</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Charter Of Duties</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Exams</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Results</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Small Family Certificate</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Job Advertisements</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
    <Dropdown.Toggle variant='' id='drop2' size="sm">
            Other
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">PCTC Nashik</Dropdown.Item>
        <Dropdown.Item href="#/action-1">SSB 57 Course Application Form PCTC Nashik</Dropdown.Item>
        <Dropdown.Item href="#/action-1">CDS-63 Course</Dropdown.Item>
        

      </Dropdown.Menu>
    </Dropdown>

    <a href="Downloads" onClick={download}>Downloads & Forms</a>
    <a href="contact" onClick={contact}>Contact</a>

    </div>
  )
}

export default Navbar3