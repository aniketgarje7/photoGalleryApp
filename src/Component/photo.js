import {useEffect, useState} from 'react';
import axios  from 'axios';
import { useParams } from 'react-router';
import { Spinner } from 'react-bootstrap';


const Photo = ()=>{
    const [photo,setPhoto] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios
        .get(`https://picsum.photos/id/${id}/info`)
        .then((res)=>setPhoto(res.data))
        .catch((e)=>console.log(e));
    },[id])
    return <>
         {Object.keys(photo).length? (<img src={photo.download_url} 
          alt={`img of ${photo.author}`}
          style={{maxWidth:"99%",
               maxHeight: "99%",
               marginLeft:"5px",
               marginTop:"4px",
               borderRadius: "5px",
               boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",}}
          ></img>):<><Spinner style={{marginLeft:"460px",marginTop:"180px"}} animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
          </Spinner></>
        }  
    
    </>
}
export default Photo;