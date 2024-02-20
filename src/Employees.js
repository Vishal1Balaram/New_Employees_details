import './Employees.css'
import React, {useState} from 'react'
import EmployeeDOJ from './EmployeeDOJ.js'
import Essentials from './Essentials.js';


const Employee = (props) => {

    const EmpId = props.EmpId
    
    // const [EmpName, setEmpName] =  useState(props.EmpName)
    

    const moreAboutHandler = () =>{
        
        console.log('More Details Button is Clicked')
    }
    
    
    return(
        <Essentials className='empDel-container'  >
           
            <h1 className='EmpId-heading'>EmpId: <span className='span-empId' > {EmpId}</span> </h1>
            <p className='emp-name' >EmpName: {props.EmpName}</p>
            <EmployeeDOJ DOJ={props.DOJ} />
            <div className='more-button-container' >
                <button onClick={moreAboutHandler} className='Delete-button' >Delete</button>
            </div>
        </Essentials>

        
    )
}

export default Employee