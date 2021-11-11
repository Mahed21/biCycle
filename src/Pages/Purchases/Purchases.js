
import { useParams } from 'react-router';


const Purchases = () => {
    const {Id}=useParams();
   
    
    return (
        <div>
            <h1>{Id}</h1>
          
        </div>
    );
};

export default Purchases;