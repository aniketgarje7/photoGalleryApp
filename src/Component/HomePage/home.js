
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {useState,useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner';
import './index.css';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';



function ColorSchemesExample() {

   const [photos,setPhotos] = useState([]);

     useEffect(()=>{
        axios
        .get("https://picsum.photos/v2/list")
        .then((res)=>setPhotos(res.data))
        .catch((err)=>console.log(err))
     },[]);

  return (
    <>
       {photos.length>0?  
       (<Row className='row' > {photos.map((photo)=>{
        return (
         <Col md={3} key={photo.id} className="mt-2 mb-2" >
         <Card className='card' >
         <Card.Img variant="top" src={photo.download_url} className="img" />

         <Card.Body className='cardBody'>

          <Card.Title className='cardTitle'>{photo.author}</Card.Title>

          <Button href ={photo.url} variant="info" className='button1'>View Details</Button>{'   '}
          <Link to={`/photos/${photo.id}`} >
            <Button variant="info" className="button2">Image</Button>
            </Link>
          
         
         </Card.Body>

        </Card></Col>)})}
        </Row>)
        :<><Spinner style={{marginLeft:"460px",marginTop:"180px"}} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner></>
       }  
    </>
  );
}

export default ColorSchemesExample;