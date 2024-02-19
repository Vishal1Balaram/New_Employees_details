import logo from './logo.svg';
import './App.css';
import Employee from './Employees'
import emp from './Employees';
import React, {useState} from 'react'
import EmployeeDetails from './EmployeeDetails';
import AddNewEmp from './AddNewEmp';
import EmpForm from './EmpForm';


const App = () => {

  const employees = [
    {EmpId: 2244, EmpName: "Vishal Balaram", DOJ: new Date(2023, 9, 14) },
    {EmpId: 2246, EmpName: "G Mouli", DOJ: new Date(2023, 10, 11) },
    {EmpId: 2247, EmpName: "A Ravi", DOJ: new Date(2023, 12, 14) },
    {EmpId: 2248, EmpName: "SS Sangeetha", DOJ: new Date(2023, 8, 9) },
  ]

  const [NewEmployeesData, AddEmployee] = useState(employees)

  const getAddedEmpData = (new_employee_data) =>{

    const New_Employee_Details = {
                  ...new_employee_data,
                  id: Math.random().toString()
              }
    console.log(New_Employee_Details)

    AddEmployee((previousEmployees) =>{
      return [New_Employee_Details, ...previousEmployees ]
    } )
  }

  return (
    <div className='bg-main-container' >
        <AddNewEmp >
          <EmpForm onSaveEmployeedata = {getAddedEmpData} />
        </AddNewEmp>
        <EmployeeDetails items={NewEmployeesData} />
       
    </div>
  );
}

export default App;
