
import Employee from "./Employees.js"
import EmployeeFilter from './EmployeeFilter'
import './EmployeeDetails.css'
import { useState, useContext } from "react"
import { EmployeeContext } from "./employee-context.jsx"

const EmployeeDetails = (props) =>{

    const employeeCon = useContext(EmployeeContext)
    
    const [filterByYear, setFilteredByYear] = useState('ALL')

    const getFilteredYear = (selectedYear) =>{
        setFilteredByYear(selectedYear)
    }

    const filteredEmployees = employeeCon.items.filter(employee => {
        if(filterByYear==="ALL"){
            return employeeCon.items.map((employee) => (<Employee key={employee.id} EmpId={employee.EmpId} EmpName={employee.EmpName} DOJ={employee.DOJ} /> ) )
        }else{
            return employee.DOJ.getFullYear().toString() === filterByYear;
        }
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