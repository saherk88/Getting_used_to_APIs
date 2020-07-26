import React, { useState, useEffect } from "react";
import axios from "axios";


function UserList() {
 const [data, setData] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios.get(
       "https://jsonplaceholder.typicode.com/users"
     );
     setData(result.data);
   };
   fetchData();
 }, []);
 return (
    <table style ={{ border:'solid 3px', margin:"10px auto" , borderRadius:'8px',
    textAlign: 'center', borderColor: 'tomato'}}>
    <tr style ={{ color:'green', textDecoration:'underline',
    justifyContent:'center', padding:'15px'}}>
        <th style ={{ padding:'15px'}}>name</th>
        <th style ={{ padding:'15px'}}>username</th>
        <th style ={{ padding:'15px'}}>email</th>
        <th style ={{ padding:'15px'}}>phone</th>
    </tr>
    {
    data.map(item => {return (
        <tr key={item.id}>
            <td className="td1" style ={{ padding:' 10px 20px'}} ><a href={item.url}>{item.name}</a></td>
            <td className="td2"><a href={item.url}>{item.username}</a></td>
            <td className="td3"><a href={item.url}>{item.email}</a></td>
            <td className="td3" style ={{ padding:' 10px 20px'}}><a href={item.url}>{item.phone}</a></td>
        </tr>)}
        )}
</table>

 );
}
export default UserList;