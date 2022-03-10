
import { useEffect, useState } from "react";

const UseService = () => {
    const [AllService, setServices] = useState([]);
    
    // console.log(AllService)
    
    useEffect(() => {
      fetch("https://travel-website-5fb93.web.app/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return [AllService];
}

   



export default UseService;