import './EmployeeFilter.css'

const EmployeeFilter = props =>{

    const yearFiltered =(event) =>{
        props.onChangeFilter(event.target.value)
    }

    return(
        <div className='filter-main-container' >
             <div className='Employee-details-container' >
                <h1 className='employee-details-heading' >Employee Details:</h1>
             </div>
            <div>
            <label className='filter-label' >Filter by DOJ year:</label>
            <select className='select' value={props.selected} onChange={yearFiltered}  >
                <option value='2019' >2019</option>
                <option value='2020' >2020</option>
                <option value='2021' >2021</option>
                <option value='2022' >2022</option>
                <option value='2023' >2023</option>
                <option value='2024' >2024</option>
                <option value="ALL" >ALL</option>
            </select>
            </div>
        </div>
    )
}


export default EmployeeFilter

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// {/* <FontAwesomeIcon icon="fa-solid fa-filter" /> */}