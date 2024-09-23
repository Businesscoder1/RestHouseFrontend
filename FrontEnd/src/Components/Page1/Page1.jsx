
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page1.css';

const Page1 = ({ onClick }) => {
 
  return (
    <div>
      <div className='pageHead'>
        <h4>Sainik Rest House</h4>
      </div>
      <div>
        <p></p>
      </div>
      <Dropdown id='district'>
        <Dropdown.Toggle variant='' id='drop2' size="lg">
          District
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Sangli</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Kolhapur</Dropdown.Item>
          <Dropdown.Item href=''>Jalgaon</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
      <div className='logRegi'>
        
        <button id='register' onClick={onClick}>Register For RestHouse</button>
      </div>
    </div>
  );
}

export default Page1;
