
import Employee from "./Employees.js"
import EmployeeFilter from './EmployeeFilter'
import './EmployeeDetails.css'
import { useState } from "react"

const EmployeeDetails = (props) =>{
    
    const [filterByYear, setFilteredByYear] = useState('2021')

    const getFilteredYear = (selectedYear) =>{
        setFilteredByYear(selectedYear)
    }

    const filteredEmployees = props.items.filter(employee => {
        return employee.DOJ.getFullYear().toString() === filterByYear;
    }) 

    let noDataMessage = <p>No Data Found</p>

    if(filteredEmployees.length>0){
        noDataMessage = filteredEmployees.map((employee) => (<Employee key={employee.id} EmpId={employee.EmpId} EmpName={employee.EmpName} DOJ={employee.DOJ} /> ) )
        
    }


    return(
        
        <div className='employee-del-container' >
            <EmployeeFilter selected={filterByYear} onChangeFilter={getFilteredYear} />
            {noDataMessage}

        </div>
       
    )
}

export default EmployeeDetails