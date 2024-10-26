import { useEffect, useState } from "react";
import { Error } from "@/components/Error";
import { ObjTable } from "../ObjTable";
import { Spinner } from "../Spinner";
import { ComponentsEmail } from "../microComponents";
import { ComponentsMap } from "../microComponents";
/* Добавил config сюда*/
const 
   config = {
    columns: [
      { title: 'id', content: users => users.id },
      { title: 'name', content: ({ name })=> name }, 
      { title: 'username', content: ({ username })=> username }, 
      { title: 'address', content: ({ address })=> <ComponentsMap city={`${address.city}`}/>}, 
      { title: 'email', content: ({ email })=> <ComponentsEmail email={email}/>}, 
   ]
}; 


export function Fetcher({ url }) {
    const 
       [data, setData] = useState(null),
       [error, setError] = useState(null);

       useEffect(()=> {
async function go() {
  setData(null);
  setError(null);
    try {
    const 
       response = await fetch(url),
       result = await response.json();

      setData(result)
    } catch (err) {
      setError(err)
    }
};
go();
       },[url]);
       if(error)
         return <Error error={error}/> 
       if(data)
         return <ObjTable data={data} config={config}/>
         return <Spinner/>   
    }