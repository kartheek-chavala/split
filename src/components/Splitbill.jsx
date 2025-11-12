import React, { useState } from 'react'

export default function Splitbill({splitdata,toggelebalance,maintainbal}) {
  let {id ,name,balance}=splitdata
  let [totalexpense,setTotalExpense]=useState("")
  let [yourexpense,setYourExpense]=useState("")
  let [friendexpense,setFriendExpense]=useState("")
  function handlefriendexpense(e){
    e.preventDefault()
    if(totalexpense!=0&&yourexpense!=0){
    let friendshare=totalexpense-yourexpense
    setFriendExpense(friendshare)
    

    maintainbal(friendshare)
    toggelebalance(id)
  }

  
  }
  return (
    <>
    <section className="container-fluid">
      <div className="row">
        <div className="col border mt-3">
          <form>
           <fieldset>split with {name}
             <input type="text" placeholder='total expense' className='form-control mb-3 mt-3' value={totalexpense} onChange={(e)=>{setTotalExpense(e.target.value)}}/>
            <input type="text"  placeholder='your expense' className='form-control mb-3' value={yourexpense} onChange={(e)=>{setYourExpense(e.target.value)}}/>
            <input type="text" placeholder='your friends expense' className='form-control mb-3' value={friendexpense}  />
            <button className='btn btn-info' onClick={handlefriendexpense}>click</button><br />
            <label >who paid bill</label>
            <select className='form-select mt-2'>
              <option value="you">you</option>
              <option value="name">{name}</option>
            </select>
           </fieldset>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}
