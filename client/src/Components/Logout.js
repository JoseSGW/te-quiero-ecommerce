import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {logout, setUser} from "../actions/users"
import {useHistory} from "react-router-dom"
import { removeAll } from '../actions/shoppingActions';
import { removeAllWish } from '../actions/wishlistActions';


export default function Logout() {
  const dispatch= useDispatch();
  const history = useHistory();

  function handleClick(e){
    e.preventDefault();
    dispatch(logout())    
    console.log("Estoy haciendo logout")
    dispatch(setUser(null, null))
    dispatch(removeAll())
    dispatch(removeAllWish())

    history.push("/")

}
    return (
      <div>
          <button onClick={handleClick} type="submit">LogOut</button>
      </div>
        )
}