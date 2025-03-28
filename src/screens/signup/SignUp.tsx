import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import DataApi from "../../Apis/DataApi";
import { Errors, formDataInterface, } from "./SignupInterfaces";
import { errorsObj, formDataObj } from "./SignupInterfaceConst";

function SignUp() 
{
  const [formdata, setFormdata] = useState<formDataInterface>(formDataObj);
  const [errors,setError] = useState<Errors>(errorsObj);
  const [isChanged,setIsChanged] = useState(false);
  const [isSubmitted,setIsSubmitted] = useState(false);
  const [isSubmitClicked,setIsSubmitClicked] = useState(false);
  const [inputName,setInputName] = useState("");

  const onFormSubmit = (event:FormEvent<HTMLElement>)=>{
      event.preventDefault();
      const newErrors = validateFormData(formdata);
      console.log(newErrors);
      setError(newErrors);
      setIsSubmitClicked(true);
      const hasErrors = Object.values(newErrors).some(error => error !== "");
      if(!hasErrors){
          console.log(formdata);
          const dataApi =  DataApi();
          dataApi.postUserData(JSON.stringify(formdata));
          setIsSubmitted(true);
      }
      else{
        alert("Please check all The fields");
      }
  }
  
  const handleOnchange=(event:ChangeEvent<HTMLInputElement>)=>
  {
      event.preventDefault();
      setIsChanged(true);
      validateFormData(formdata);
      console.log(formdata);
      const {name, value}  = event.target;
      setInputName(event.target.name);
      setFormdata({
        ...formdata,[name]:value
      });
  }

const validateFormData = useCallback((data:formDataInterface)=>
{
    const errors:Errors={
      name: "",
      email: "",
      phoneNo: "",
      password: "",
      confirmPassword: ""
    };
    //user Validations
    if(!(data.name)){
      errors.name="Name should not be empty"; 
    }
    else if(data.name.length < 4){
      errors.name="Name should Have atlease 4 letters"; 
    }
    else{
      errors.name="";
    }

    //email Validations
    if(!(data.email)){
      errors.email="Email should not be empty"; 
    }
    else if(!/^[^\s@]+(\.[^\s@]+)*@[^\s@]+\.[^\s@]+$/.test(data.email)){
      errors.email="Please Enter Valid Email ID"; 
    }
    else{
      errors.email="";
    }

    //phone number validation
    if(!(data.phoneNo)){
        errors.phoneNo="Phone Number should not be empty"; 
      }
      else if(!/^\d{10}$/.test(data.phoneNo.toString())){
        errors.phoneNo="Please Enter Valid Phone Number"; 
      }
      else{
        errors.phoneNo="";
      }

    //Password Validations
    if (!data.password) {
        errors.password = 'Password is required';
    } else if (data.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    }

    if (data.confirmPassword !== data.password) {
        errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
}, []);

  useEffect(()=>{
    if(isChanged || isSubmitted){
      const newErrors = validateFormData(formdata);
      console.log(newErrors);
      setError(newErrors);
    }
  },[formdata,validateFormData,isChanged,isSubmitted]);

    return(
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        {
          !isSubmitted ? (
          <form className="bg-[#E8E8E8] p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={onFormSubmit}>
            <h1 className="text-center">Contact Us</h1><br/>

            <label className="block text-gray-700 font-medium mb-2 text-left">Name : </label>
            <input type="text" name="name" defaultValue="" placeholder="Name" 
              onChange={handleOnchange} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </input>
            {((isChanged && inputName==="name") || isSubmitClicked)  ?(<p className="text-red-500 text-left text-[10px]">{errors.name}</p>):null}
            
            <label className="block text-gray-700 font-medium mb-2 text-left">Email ID : </label>
            <input type="text" name="email"  defaultValue="" placeholder="Email Eg: test@gmail.com" 
               onChange={handleOnchange} 
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </input>
            {((isChanged && inputName==="email") || isSubmitClicked) ? (<p className="text-red-500 text-left text-[10px]">{errors.email}</p>):null}
            
            <label className="block text-gray-700 font-medium mb-2 text-left">Phone Number : </label>
            <input type="text" name="phoneNo" maxLength={10}  defaultValue="" placeholder="Phone Number eg: 8888888888" 
               onChange={handleOnchange} 
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </input>
            {((isChanged && inputName==="phoneNo") || isSubmitClicked) ? (<p className="text-red-500 text-left text-[10px]">{errors.phoneNo}</p>):null}
            
            <label className="block text-gray-700 font-medium mb-2 text-left">Password : </label>
            <input type="password" name="password" defaultValue="" placeholder="Password" 
               onChange={handleOnchange}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </input>
            {((isChanged && inputName==="password") || isSubmitClicked) ? (<p className="text-red-500 text-left text-[10px]">{errors.password}</p>):null}
            
            <label className="block text-gray-700 font-medium mb-2 text-left">Confirm Password : </label>
            <input type="password" name="confirmPassword" defaultValue=""  placeholder="Password" 
               onChange={handleOnchange}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </input>
            {((isChanged && inputName==="confirmPassword") || isSubmitClicked) ? (<p className="text-red-500 text-left text-[10px]">{errors.confirmPassword}</p>):null}
            
            <br/>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button><br/>
        </form>
          )
        : (
          <div className="bg-[#E8E8E8] p-6 rounded-lg shadow-lg w-full max-w-md text-center">
            <h1 className="text-center">Thank you for submitting the form!</h1>
          </div>
        )}
      </div>
    );
  }
  
  export default SignUp;