import React, {Component} from 'react';
import DestinationItem from "./DestinationItem";
/*
const TableHead = () => {
  return(
    <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
      <th>Action</th>
    </tr>
  </thead>
  ) 
}

const TableBody = (props) => {
  const rows = props.characterData.map((row,index) =>  {
    return (
      <tr key = {index}>
      <td>{row.name} </td>
      <td>{row.job} </td>
      <td>
        <button onClick ={()=> props.removeCharacter(index) } >Delete</button>
      </td>
      </tr>
    )
  })
  return <tbody> {rows} </tbody>
}

const Table = (props) => {

    const {characterData, removeCharacter} = props
    return (
      <table>
        <TableHead />
        <TableBody characterData= {characterData} removeCharacter = {removeCharacter} />
      </table>
    )
    */


   
   class Table extends Component {
   
     render() {
       let { data } = this.props;
       return (
         <div>
           <h1>Here are your best Travel Destinations</h1>
           {data !== null &&
           data !== undefined &&
           data.length > 0 ?
             data.map(item => <DestinationItem {...item} key={item.id}/>)
             :
             <div>No destinations found.</div>
           }
         </div>
       );
     }
   }
export default Table