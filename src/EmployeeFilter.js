import './EmployeeFilter.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const EmployeeFilter = props =>{


    const yearFiltered =(event) =>{
        props.onChangeFilter(event.target.value)
    }

    return(
        <div className='filter-main-container' >
            <FontAwesomeIcon icon="fa-solid fa-filter" />
            <label className='filter-label' >Filter by DOJ year:</label>
            <select className='select' value={props.selected} onChange={yearFiltered}  >
                <option value='2019' >2019</option>
                <option value='2020' >2020</option>
                <option value='2021' >2021</option>
                <option value='2022' >2022</option>
                <option value='2023' >2023</option>
                <option value='2024' >2024</option>
            </select>
        </div>
    )
}


export default EmployeeFilter