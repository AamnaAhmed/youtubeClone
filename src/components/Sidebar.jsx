import React from 'react'
import { Stack } from '@mui/material'
import { categories } from "../utils/constants"
// console.log(categories);


const Sidebar = ({selectedCategory, setSelectedCategory}) => (
   <Stack direction="row" sx={{ overflow: "auto", height: {sx: 'auto', md:'90%', }, flexDirection: {md: 'column'}}}>
        {categories.map((cat) => (
            <button 
            className="category-btn" 
            key={cat.name} 
            onClick={() => setSelectedCategory(cat.name)}
            style ={{background: cat.name === selectedCategory && '#FC1503', color:'white'}}>
             <span style={{ color: cat.name ===selectedCategory ? "white":"red", marginRight: '15px'}}><cat.icon/></span>
            <span style={{ opacity: cat.name === selectedCategory ? '1': '0.8'}}>{cat.name}</span>
            </button>
                
        ))} 

   </Stack>

)

export default Sidebar
