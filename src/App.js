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
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { sendEmployeesData } from './store';


const App = () => {

  const items = useSelector(state => state.items);
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(sendEmployeesData(items))
    },
    [items, dispatch]
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
