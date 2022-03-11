
import { useEffect, useState } from "react";

const UseService = () => {
    const [AllService, setServices] = useState([]);
    
    // console.log(AllService)
    
    useEffect(() => {
      fetch("https://powerful-temple-24287.herokuapp.com/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return [AllService];
}

   



export default UseService;