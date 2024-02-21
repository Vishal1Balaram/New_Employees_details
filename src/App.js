import logo from './logo.svg';
import './App.css';
import Employee from './Employees'
import emp from './Employees';
import React, {useState} from 'react'
import EmployeeDetails from './EmployeeDetails';
import AddNewEmp from './AddNewEmp';
import EmpForm from './EmpForm';
import { useEffect } from 'react';
import { EmployeeContext } from './employee-context';
import EmployeeContextProvider from './employee-context';
import { UseSelector, useSelector } from 'react-redux';


const App = () => {

  const items = useSelector(state => state.items);

  useEffect(
    () => {
      fetch( 'https://newemployees-a31f0-default-rtdb.firebaseio.com/employee.json' , {
        method: "PUT",
        body: JSON.stringify(items)
      })
    },
    [items]
  );
  
  return (
    <EmployeeContextProvider>
      <div className='bg-main-container' >
        <AddNewEmp >
          <EmpForm />
        </AddNewEmp>
        <EmployeeDetails />  
      </div>
    </EmployeeContextProvider>
    
  );
}

export default App;
