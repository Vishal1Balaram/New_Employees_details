import {createStore} from 'redux'

const employees = [
    {EmpId: 2244, EmpName: "Vishal Balaram", DOJ: new Date(2023, 9, 14) },
    {EmpId: 2246, EmpName: "G Mouli", DOJ: new Date(2023, 10, 11) },
    {EmpId: 2247, EmpName: "A Ravi", DOJ: new Date(2023, 12, 14) },
    {EmpId: 2248, EmpName: "SS Sangeetha", DOJ: new Date(2023, 8, 9) },
  ]

  const employeeReducer = (state= {items: employees}, action) => {

    const updatedEmployees = [...state.items]
  
    if(action.type==='ADD_EXPENCE'){
      const New_Employee_Details = {
        ...action.payload,
        id: Math.random().toString()
    };
    console.log(New_Employee_Details)
        updatedEmployees.push(New_Employee_Details)
        return {items: updatedEmployees}
      }
  
      if(action.type === "REMOVE_EXPENCE"){

      }
      return state
  }

  const employeeStore = createStore(employeeReducer)

  export default employeeStore;