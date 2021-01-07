import React from 'react'

const Form = ({Additem,items,input,setInput,Update,Remove}) => {
    
   const handler =(e) => {
        setInput({...input,[e.target.name]:e.target.value})
       }
    

   const onSubmit = (e) => {
        e.preventDefault();
        Additem();
        console.log(items);
        
       input.activity = "";
       input.schedule="";
       input.summary="";
     }
    return (
        
        <section>
          <div>
             <form onSubmit={onSubmit} className="form">
                <h5><label>ACTIVITY:</label></h5> 
                <div>
                    <input type="text"  name="activity" value={input.activity} placeholder="Enter your Activity" className="text" onChange={handler} required/>
                </div>
                <h5> <label>SCHEDULED AT:</label></h5>
                <div>
                   <input type="date" placeholder="Enter date" name="schedule" value={input.schedule} className="date" onChange={handler} required/>
                </div>
                <h5><label>SUMMARY:</label></h5>  
                <div>
                   <textarea placeholder="write small notes......." name="summary" value={input.summary} className="area" onChange={handler} required></textarea>
                </div>
                <div>
                    <input type="submit" value ='SAVE'className="button"/>
                </div>
                
            </form>
              </div>
        <div >
                <ul> 
                    {items.map(task =>{  
                       return(   
                    <div key={task.id} className = "itemlist">
                            <li >{task.activity}</li>
                            <li>{task.schedule}</li> 
                            <li>{task.summary}</li> 
                            <button onClick={()=> Update(task.id)} className="update">UPDATE</button>
                            <button onClick={()=>Remove(task.id)} className="delete">DELETE</button> 
                        </div>)})}
                </ul>
                    
        </div>
            
            
        </section>
        
    )
}

export default Form
