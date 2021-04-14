import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {registerUser} from '../redux/actions/auth'
const Register = (props) => {
    
  let [data,setData]=useState({
    name:"",
    email:'',
    password:''
  });
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(e.target.value);
  }
  const handleSubmit=()=>{
      if(name=='' || email=='' || password == '') return alert('empty value not allowed');
      else props.registerUser(name,email,password);
  }
  let {name,email,password} =data;
    return (   
     <div >
        <label>Name</label><br/>
        <input name="name" type="text" value={name} onChange={(e)=>handleChange(e)}/><br/>
        <label>E-mail</label><br/>
        <input name="email" type="email" value={email} onChange={(e)=>handleChange(e)}/><br/>
        <label>Password</label><br/>
        <input name="password" type="password" value={password} onChange={(e)=>handleChange(e)}/><br/>
        <button type="submit" onClick={()=>handleSubmit()}>submit</button>    
     </div>
    )
}

const mapStateToProps=state=>({
    isLoggedIn:state.isLoggedIn
})
export default connect(mapStateToProps,{registerUser})( Register)
