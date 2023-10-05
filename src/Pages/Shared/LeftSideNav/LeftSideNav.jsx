import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch("categories.json")
        .then (res => res.json())
        .then(data=>setCategories(data))

    },[])
    
    return (
        <div className="space-y-3">
            <h3 className="text-2xl">All Category News {categories.length}</h3>
            {
                categories.map(category=><Link 
                    to={`/category/${category.id}`}
                    className='flex ml-4 font-semibold'
                     key={category.id} >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;