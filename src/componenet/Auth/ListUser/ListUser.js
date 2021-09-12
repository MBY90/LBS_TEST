import React ,{useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { getUser } from '../../../Redux/Action';
import './ListUser.css';
export default function ListUser() {
   const  dispatch=useDispatch();
   const  ListUser=useSelector(state=>state.ListUser.data)
useEffect(() => {
  dispatch (getUser())

}, [])
const Admin=ListUser.filter(a=>a.role=="admin")
console.log("Admin",Admin)

    return (
        <div className="listAdmin">
    <table>
    <div className="containert">
     <tr>
    <th>Nom et Prénon</th>
    <th>Email</th>
    <th>Telephone</th>
    <th>Ville</th>
  </tr>
  </div>
  {Admin.map(a=>(

    <tr>
    <td>{a.fst_name} {a.lst_name} </td>
    <td> {a.email} </td>
    <td>{a.tel}</td>
    <td>{a.city}</td>
    <td> <input type="checkbox" /></td>
    </tr>
  )

  )}
    </table>
        </div>
    )
}
