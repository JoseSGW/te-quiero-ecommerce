import React, {useState, useEffect} from 'react';
import moment from 'moment';
import "moment/locale/es";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
// import Fondo from '../../../img/imagen_principal-15447.jpg'
import {CreateUser, DisabledButton, ErrorsSpan, Out, Cancel, RadioButton} from './RegisterScreen.styles';
import { getCountries } from '../../../actions/users';
import {useDispatch, useSelector} from "react-redux"
import { AuthContainer } from '../LoginScreen/LoginScreen.styles';
import {addToCart} from "../../../actions/shoppingActions.js"
import { addToWishlist } from "../../../actions/wishlistActions";

const RegisterScreen = () => {
  moment.locale("es");
  const currentMonth = moment().format('MMMM');

  const history = useHistory();
  const dispatch= useDispatch();

  const [input, setInput]= useState({
      name: "",
      surname:"",
      email:"",
      gender: "",
      username:"",
      password: "",
      repeatPassword:""

      })
  const[errors, setErrors]= useState({
      name:"Error",
      surname:"Error",
      email:"Error",
      gender: "Error",
      username: "Error",
      country: "",
      password: "Error",
      didntMatch: ""
  })
  const[availability, setAvailability]= useState("")
  const cart= useSelector((state)=> state.products.cart )
 const countries = useSelector((state)=>state.users.countries)
 const wish = useSelector((state) => state.products.wish);

 function validate(input, val){
      let errors= {
          name:"",
          surname:"",
          email: "",
          gender: "",
          username: "",
          password:"",
          didntMatch: ""
      };
      // let errors1= {
      //     ...errors, [val]:""
      // }
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


      if (!input.name){
        errors.name= 'Debe escribir su nombre';
      } 
      else if(errors.name>0){
          errors.surname=""
      }
      else if(!input.surname){
          errors.surname="Debe escribir su apellido"
      }
      else if(input.surname>0){
          errors.surname=""
      }
      else if (!input.email){
          errors.email="Debe colocar un email"
      } 
      else if (input.email && !(re.test(input.email)) ) {
          errors.email="Debe colocar un email válido"
      }
      else if (input.gender==0){
        errors.gender="Debe seleccionar una opción"
    }
    
      else if (input.username==0){
          errors.username="Debe elegir un usuario"
      }
      else if (!input.password){
          errors.password = 'Debe escribir su contraseña';
      }
      else if (input.password && input.password.length<6){
          errors.password="Su contraseña debe tener al menos 6 carácteres"   
      }
               
      else if (input.password !== input.repeatPassword){
          errors.didntMatch="Las contraseñas no coinciden"
      }
      else if (errors.username || errors.password || errors.name || errors.surname || errors.email) {
          errors.sendError="Debe completar los campos"
      } 
        
      // if (input.didntMatch){
      //     errors.sendError= "Las contraseñas deben coincidir"
      // }
      // if (errors.password=="Su contraseña debe tener al menos 6 carácteres" && errors.username.length==0 && errors.password.length==0 && errors.name.length ==0 && errors.surname.length==0 && errors.email.length){
      //     errors.sendError="Su contraseña debe tener al menos 6 carácteres"
      // }
      return errors;
      }


  function methodLogin(e){
      e.preventDefault();
      axios({
          method:"post",
          data: {
              username: input.username,
              password: input.password,
              name: input.name,
              surname: input.surname,
              email:input.email,
              gender: input.gender,
              country: input.country,
              monthDate: currentMonth
          }, 
          withCredentials:true,
          url: "http://localhost:3001/users/addUser",
        }).then((res)=> {
            
            if (res.data.msg =="Usuario creado correctamente"){
          
            wish.map(async (el)=>{
               await dispatch(addToWishlist(el.id, res.data.id))}
            )    
                        
          cart.map(async (el)=>{
              console.log("Pasando", res.data.id, el.id, el.quantity)
              await dispatch(addToCart(res.data.id, el.id, el.quantity))
  
          })}})
          
        .then(()=>{
  
               history.push('/create/succes');
          })
  
    }
     
 

      function handleInputChange(e){
       
        
          let val= e.target.value
          setInput({...input,
              [e.target.name]: e.target.value});
          setErrors(validate({
              ...input, [e.target.name]: e.target.value
          }, val));

          

          if (e.target.name === "username" && e.target.value.length>0){
              const username= e.target.value
              fetch(`http://localhost:3001/users/find?user=${username}`)
              .then(response=>setAvailability(response.status))
              
          }
         

      }    
     

      function showSubmitButton() {
          if (errors.username.length > 0 || errors.password.length > 0||
               errors.name.length>0 || errors.surname.length>0 || errors.email.length>0 || errors.didntMatch.length>0)
              return <DisabledButton type="submit" disabled>Crear Cuenta</DisabledButton>
  
          return  <button type="submit" onClick={methodLogin}> Crear Cuenta</button> 
      }
      
      function showNameErrors() {
          if (errors.name.length>0 && errors.name!== "Error"){
              return <ErrorsSpan>Debe escribir su Nombre</ErrorsSpan>
          } 
       }
       function showSurnameErrors() {
          if (errors.surname.length>0 && errors.surname!=="Error"){
              return <ErrorsSpan>Debe escribir su Apellido</ErrorsSpan>
          } else {return null}
       }
       function showEmailErrors() {
          if (errors.email.length >0 && errors.email!=="Error" ){
              return <ErrorsSpan>{errors.email}</ErrorsSpan>
          } 
       }

      function showUsernameErrors() {
          if (errors.username.length>0 && errors.username!=="Error" ){
              return <ErrorsSpan>Debe escribir su usuario</ErrorsSpan>
          } 
       }
       function showPasswordErrors() {
           if (errors.password.length>0 && errors.password!=="Error" && errors.password!=="Debe completar su contraseña"){
               return <ErrorsSpan >{errors.password}</ErrorsSpan>
           } 
      }
      function showMatchErrors() {
          if (errors.didntMatch.length>0 && errors.password==0){
              return <ErrorsSpan >{errors.didntMatch}</ErrorsSpan>
          } 
     }
     function showGenderErrors() {
        if (errors.gender.length>0 && errors.gender!=="Error" && errors.gender!=="Debe seleccionar una opción" ){
            return <ErrorsSpan >{errors.didntMatch}</ErrorsSpan>
        } 
   }

    function showAvailability() {
    if (errors.username==0) {
        if (availability && availability== 400) {
            return <Cancel><CancelIcon/><p>El usuario no está disponible</p> </Cancel>
        } else if (availability&& availability==200)  {
            return  <span><CheckCircleRoundedIcon/><p>El usuario está disponible</p> </span>
        }
    }}

    function handleOptionChange(e){
        e.preventDefault()
        if (e.target.value === 'Argentina' || e.target.value === 'Colombia' || e.target.value === 'Chile') {
            setInput({...input, country: e.target.value})
        } else {
            setInput({...input, country: 'other'})
        }
    }
    function handleInputGender(e) {
        e.preventDefault()
        setInput({...input, gender: e.target.id})
    }

    const Fondo = 'https://res.cloudinary.com/dwqr4s7gp/image/upload/v1617406569/fype6lr4ra9tsy4tndfi.jpg';

  return (
      <AuthContainer>
      <Out>
     <CreateUser>
         <img src={Fondo}/>
          <form>
              <h2>CREAR CUENTA</h2>
              
                  <label>Nombre</label>
                  <input name="name" value={input.name} placeholder="Cosme" onChange={handleInputChange} type="text"></input>
                  {showNameErrors()}

                  <label>Apellido</label>
                  <input name="surname" value={input.surname}  placeholder="Fulanito" onChange={handleInputChange} type="text"></input>
                  {showSurnameErrors()}

                  <label >Email</label>
                  <input name="email" value={input.email} onChange={handleInputChange} placeholder="imaginary@gmail.com" type="text"></input>
                  {showEmailErrors()}

                  <label>País
                  <select onChange={handleOptionChange}>
                      {countries.map((option) => (
                          <option value={option.name}>{option.name}</option>
                      ))}
                  </select></label>
                  
                  <p>Sexo</p>
                  <div>
                    <RadioButton><label for="male">Masculino<input name="gender" value={input.gender} onChange={handleInputGender} type="radio" id="male"/></label></RadioButton>
                    {showGenderErrors()}
                    <RadioButton><label for="female">Femenino<input name="gender" value={input.gender} onChange={handleInputGender} type="radio" id="female"/></label>  </RadioButton>
                    {showGenderErrors()}
                    <RadioButton><label for="other">Otro<input name="gender" value={input.gender} onChange={handleInputGender} type="radio" id="other"/></label>  </RadioButton>
                    {showGenderErrors()}
                  </div> 
                
                  <label >Username</label>
                  <input name="username" value={input.username} placeholder="cosme123" onChange={handleInputChange} type="text"></input> 
                  {showAvailability()}
                  {showUsernameErrors()}

                  <label >Contraseña</label>
                  <input name="password" value={input.password} onChange={handleInputChange} type="password"></input>
                  {showPasswordErrors()}
                  
                  <label>Repetir Contraseña</label>
                  <input name="repeatPassword" value={input.repeatPassword} onChange={handleInputChange} type="password"></input>
                   {showMatchErrors()}
             {/* <button   type="submit" onClick={methodLogin} > Ingresar</button> */}
               {showSubmitButton()}
          </form>
       </CreateUser></Out>
       </AuthContainer>
      )
}

export default RegisterScreen