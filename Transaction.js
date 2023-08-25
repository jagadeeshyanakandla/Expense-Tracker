import React from 'react'
// import { userContext } from '../Context/MyContext'
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemText, ListItemIcon } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { List } from '@mui/material';

function Transaction({singleTrans,setTransactions,transactions,handleEdit}) {
    const handleDelete=(id)=>{
        setTransactions(transactions.filter(item=>item.id!==id))
    }
  return (
    <List style={{color:"red"}}>
      <ListItemText primary={singleTrans.text}/>
      <ListItemText primary={singleTrans.price}/>
      <ListItemText primary={singleTrans.day}/>
      <ListItemIcon>
        <DeleteIcon style={{color:"red"}} onClick={()=>handleDelete(singleTrans.id)}/>
        <CreateIcon onClick={()=>handleEdit(singleTrans.id)}/>
      </ListItemIcon>
    </List>
  )
}

export default Transaction
