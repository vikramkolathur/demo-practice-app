import { useNavigate } from 'react-router-dom'

function UseNavigateRouter() {
    const navigate = useNavigate();
  return (
    <>
        <h1>Client side Routing by useNavigate </h1>
        <button className="bg-blue-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4" onClick={()=>{navigate("/practiceState")}}> Navigate to Practice state</button>    
    </>
  )
}

export default UseNavigateRouter