import './Filter.css'
const Filter = (props) => {
    const onSelectHandler = (events) =>{
         console.log('On Select Handler', events.target.value)
         props.onFilterChangeProps(events.target.value)
    }
    return(
        <div className="filter">
            <div className="filter_control">
                <lable>Filter By Year</lable>
                <select value= {props.onFilterChangeProps}onChange={onSelectHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                </select>
            </div>
        </div>
    )
}
export default Filter