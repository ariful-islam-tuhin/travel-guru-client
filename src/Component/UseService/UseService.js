
import { useEffect, useState } from "react";

const UseService = () => {
    const [AllService, setServices] = useState([]);
    
    // console.log(AllService)
    
    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return [AllService];
}

   



export default UseService;