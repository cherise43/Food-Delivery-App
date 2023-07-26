// Creates a Function
// Returns Jsx
// Ensures it exports a function
import { useEffect, useState } from "react";

// state(for variables and changing data) and effect(for controlling functions)

function Fetchtransaction(){
    // Renders a list of transactions
    // Get all transactions => using fetch
    // const{stateVar, stateSetterFunction} = useState{'intial value'}
    const[transactions,setTransactions] = useState{[]}:

    //useEffect{()=>{},[]}

    useEffect([])=>{
        fetch("http://localhost:8001/transactions")
        .then(r=>r.json())
        .then(data=>(
            //console.log(data)
            setTransaction(data)
        }
    },[])

    console.log{transaction}
    let transactionlist = transactions.map(item=>[
        return{
            <p>transaction catergory:transaction description</p>
        }
    ]
    return (
         <>
         <h1>These are the following Transactions</h1>
         <p>transaction catergory:transaction description</p>

         </>
    )

export default Fetchtransaction;
   

        
    


