import React ,{useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { getUser } from '../../../Redux/Action';
import './.css';
export default function ListEmployee() {
   const  dispatch=useDispatch();
   const  ListUser=useSelector(state=>state.ListUser.data)
useEffect(() => {
  dispatch (getUser())

}, [])
const employee=ListUser.filter(a=>a.role=="employee")
console.log("employee",employee)

    return (

        <div className="listAdmin">
        <button onClick={onPress}></button>
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
