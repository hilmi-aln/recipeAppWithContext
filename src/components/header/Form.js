import "./Header.css";

const Form = ({questionHandle, handleSubmit, mealTime}) => {
  
  return (
    <form className='search-bar' onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" onChange={questionHandle}/>
        <button>Search</button>
        <select name="mealType" id="mealType" onChange={mealTime}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Tea Time</option>
        </select>
    </form>
  )
}

export default Form