// Returns  Jsx 
// Exports the components 
// Use state(changing data) and effect(controlling functions)
import { useEffect, useState } from "react"


function Transactions (){
    const[transactions,setTransactions] = useState([])
    //useEffect{{}=>{},[]} ()=>{}


     useEffect(()=>{
        fetch ("http://localhost:3000/transactions")
        .then (r=>r.json())
        .then (data=>{
            console.log(data)
            setTransactions(data)
        })
     },[])
    // hooks
    // sidefunctions
    // return
    

   
    
    return (
        <table>
        <thead>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
        </thead>
        <tbody>
            {transactions.map((transaction => (
                <tr>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.date}</td>
                </tr>
            )
          ))} 
        </tbody>
    </table>
    )
}
export default Transactions
