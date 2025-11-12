import React, { useState } from 'react'
import Friends from './Friends'
import Splitbill from './Splitbill'

let info = [{ id: 1, name: "gulsan", balance: 200 },
{ id: 2, name: "karthik", balance: -400 },
{ id: 3, name: "veerendra", balance: -200 },
{ id: 4, name: "mahendra", balance: 500 }
]

export default function FriendsList() {
   let [friendsdata,setFriendsdata]=useState(info)
    let [split,setSplit]=useState(false)
    function makesplitvisible(val){
     setSplit(val)
    }
    function handleAddFriend(friend){
        setFriendsdata((u)=>{
            return [...u,friend]
        })
    }
    let [splitdata,setSplitData]=useState("")
   function recievedata(val){
    
    setSplitData(val)
   }
 let [maintainbalance,setMaintainBalanse]=useState('')
 function maintainbal(val){
    setMaintainBalanse(val)
 }
   function toggelebalance(id){
    setFriendsdata((friendsdata)=>{
        return friendsdata.map((friend)=>{
           if(friend.id==id){
             return {...friend,balance:friend.balance-(maintainbalance)}
           }
           else return friend;
        })
    })
   }

    return (
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <Friends totaldata={friendsdata} AddFriend={handleAddFriend} senddata={recievedata} visiblesplit={makesplitvisible}/>
                    </div>
                    <div className="col-4">
                       {split && <Splitbill splitdata={splitdata} toggelebalance={toggelebalance} maintainbal={maintainbal}/>}
                    </div>
                </div>
            </section>
        </>
    )
}
