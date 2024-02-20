import { createContext, useReducer, useState } from "react";


export const EmployeeContext = createContext ({
    items: [],
    onSaveEmployeedata: () => {},
});

function employeeReducer(state, action){

  const updatedEmployees = [...state]

  if(action.type==='ADD_EXPENCE'){
    const New_Employee_Details = {
      ...action.payload,
      id: Math.random().toString()
  }
  console.log(New_Employee_Details)
      updatedEmployees.push(New_Employee_Details)
    }

    if(action.type === "REMOVE_EXPENCE"){
      
    }
    return updatedEmployees
}


export default function EmployeeContextProvider({ children }) {
    const employees = [
        {EmpId: 2244, EmpName: "Vishal Balaram", DOJ: new Date(2023, 9, 14) },
        {EmpId: 2246, EmpName: "G Mouli", DOJ: new Date(2023, 10, 11) },
        {EmpId: 2247, EmpName: "A Ravi", DOJ: new Date(2023, 12, 14) },
        {EmpId: 2248, EmpName: "SS Sangeetha", DOJ: new Date(2023, 8, 9) },
      ]

      const [NewEmployeesData, dispatcher] = useReducer(employeeReducer, employees)

      const getAddedEmpData = employee =>{
        dispatcher(
          {
            type: "ADD_EXPENCE",
            payload: employee
          }
        )
      }
  
  const contextValue = {
    items: NewEmployeesData,
    onSaveEmployeedata: getAddedEmpData
  }

  return <EmployeeContext.Provider value={contextValue} >
    {children}
  </EmployeeContext.Provider>
}