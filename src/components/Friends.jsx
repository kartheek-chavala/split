import React, { useState } from 'react'

export default function Friends({ totaldata,AddFriend,senddata,visiblesplit}) {
  
 let [friend,setFriend]=useState('')
 
 function handlesubmit(e){
 e.preventDefault()
 if(friend!=0){
  let newfriend={id:Math.round(Math.random()*30),name:friend,balance:0}
 AddFriend(newfriend)
 
 setFriend("")
 
 }
 }
 function handlesplit(data){
  visiblesplit(true)
  senddata(data)
  
 }
 

  return (
    <>
      <section className="container-fluid">
        <div className="row">
          <div className="col">
            <table className="table">
              <tbody>
                {totaldata.map((data)=>{ 
                  let {id,name,balance}=data
                  return <tr key={id}>
                  
                  <td>{name}</td>
                  <td>{balance<0?`${name}ows u ${balance}`:`u ows ${balance} to ${name}`}</td>
                  <td><button className='btn btn-info' onClick={()=>{handlesplit(data)}}>split</button></td>
                </tr>
                })
                }
              </tbody>
            </table>
              <form onSubmit={handlesubmit}>
               <div className='input-group me-2'>
                 <input type="text" value={friend}  className='form-control' onChange={(e)=>{setFriend(e.target.value)}}/>
                <input type="submit" value="add friend" className='btn btn-primary'/>
               </div>
              </form>
          </div>
        </div>

      </section>
    </>
  )
}
