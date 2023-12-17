import React,{useState} from 'react'
import Menu from './Components/Menu';
import Categories from './Components/Categories';
import items from './Components/data';
import "./index.css"

const allCategories = ['All', ...new Set(items.map((item)=>item.category))]

function App() {

  const [menuItems,setMenuItems] = useState(items)
  const [categories,setCategories] = useState(allCategories)

  const filterItem=(category)=>{
    if(category === 'All'){
      setMenuItems(items)
      return;
    }
    const newItem = items.filter((item)=>item.category === category);
    setMenuItems(newItem);
  }
  return (
    <>
     <div className="menu section">
      <div className="title">
        <h2>OUR TEAM MEMBERS</h2>
        <div className="underline"></div>
      </div>
      <Categories categories = {categories} filterItem={filterItem}/>
      <Menu items = { menuItems} />
     </div>
    </>
  );
}

export default App;
