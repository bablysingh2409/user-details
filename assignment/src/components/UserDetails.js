import { useEffect,useState } from "react";
import axios from 'axios';
import './userDetails.css'

function UserDetails(){
    const [user,setUser]=useState({});

    useEffect(()=>{
      axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((res)=>{
        const userData=res.data.results;
        console.log(userData);
        let firstName=userData[0].name.first;
        console.log(firstName);
        let lstName=userData[0].name.last;
        console.log(lstName);
        let gender=userData[0].gender;
        console.log(gender);
        let phoneNum=userData[0].phone;
        console.log(phoneNum)
        let img=userData[0].picture.large;
        console.log(img)
        setUser({firstName,lstName,gender,phoneNum,img})
      })
    },[])
    return(
        <div className="user-details-container">
          <div className="user-details">
           <div className='img-container'><img src={user.img} alt="user img"/></div>
           <div className="details">
            <div className="user-name">
              <h2> Name: 
                <span>{user.firstName} {user.lstName}</span>
              </h2>
            </div>
            <h2>Phone Number: <span>{user.phoneNum}</span></h2>
            <h2>Gender: <span>{user.gender}</span></h2>
            </div>
            </div>
            
        </div>
    )
}

export default UserDetails