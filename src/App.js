import React,{useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';


function App() {
      const [items,setItems] = useState([
        {
            activity:"swimming",
            schedule:"2020-07-20",
            summary:"i will swim with four friends to get my mind refreshed",
            id:1
        }])
        const [input,setInput] = useState(
          {
              activity:"",
              schedule:"",
              summary:"",
          })
  
        
       const Additem =() =>{
        const itemgroup = {
          activity:input.activity,
          schedule:input.schedule,
          summary:input.summary,
          id:Math.random()*1000
        }

         setItems([...items,itemgroup]);
        
       }
       const Remove =(id)=>{ 
         
         let itemz =items.filter((task) => task.id !== id)
         setItems(itemz)
               }

      const Update =(id)=>{ 
        let updateitem =items.filter((task) => task.id !== id)
        let selecteditem = items.find((task)=>task.id === id)
        console.log(selecteditem)
        setInput(selecteditem)
        setItems(updateitem)
            }

  return (
    
      <section className="App"> 
        <Header/> 
        <Form Additem={Additem} items={items} input={input} setInput={setInput}
         Update={Update} Remove={Remove} />
    
      </section>
    
  );
}

export default App;
