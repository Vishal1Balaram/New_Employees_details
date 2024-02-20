import logo from './logo.svg';
import './App.css';
import Employee from './Employees'
import emp from './Employees';
import React, {useState} from 'react'
import EmployeeDetails from './EmployeeDetails';
import AddNewEmp from './AddNewEmp';
import EmpForm from './EmpForm';
import { EmployeeContext } from './employee-context';
import EmployeeContextProvider from './employee-context';


const App = () => {


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
