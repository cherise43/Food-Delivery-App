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
    
    console.log(transactions);
    let transactionsList = transactions.map(item=>{
        return(
            <p>(Item.category):(Item description)</p>
        )
    })
    
    
    return (
        <>
        
            <h1>These are the following transactions</h1>
            <p>transaction category:transaction description</p>
               {transactionsList}
        </>
    )
}
export default Transactions
