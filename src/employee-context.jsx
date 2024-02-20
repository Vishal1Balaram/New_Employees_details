import { createContext, useState } from "react";


export const EmployeeContext = createContext ({
    items: [],
    onSaveEmployeedata: () => {},
});


export default function EmployeeContextProvider({ children }) {
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

  const contextValue = {
    items: NewEmployeesData,
    onSaveEmployeedata: getAddedEmpData
  }

  return <EmployeeContext.Provider value={contextValue} >
    {children}
  </EmployeeContext.Provider>


}