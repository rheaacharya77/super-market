import React ,{useState,useEffect} from 'react';
//import {Link} from 'react-router-dom';
import{Container,Row,Card,Spinner} from 'react-bootstrap';

import '../../assets/style/Featured.css'
const baseURL = 'https://uat.ordering-dalle.ekbana.net/';
const apiKey = 'q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6';
const warehouseId = '1';


const Featured = () => {
const [products, setProducts] = useState<any[]>([]);
const [loading,setLoading] = useState(true);
  
  const getData = async() => {
     const response = await fetch(`${baseURL}/api/v4/product`, {
          method: 'GET',
		  headers: {
			  'api-key':apiKey,
			  'Warehouse-id':warehouseId

			} ,
      });
      const newData = await response.json();
      setProducts(newData.data);
	  setLoading(false);
	  console.log(newData.data);
  }
  
  useEffect(() => {
	try{getData();
	}catch(err){
		console.log(err);
	}
  
},[]);

if(loading){
    return <Spinner animation={'border'}/>
  }

  return (
	<div className="newproducts-w3agile">
	<Container>
		<h3>NEW OFFERS</h3>
		<div className="agile_top_brands_grids">
		<Row>
         {products && products.slice(24,28).map(product => {
			 
                return(
					<div className="col-md-3 top_brand_left" key={product.id}>
					<div className="hover14 column">
				
                    <Card.Img variant="top"src={product.images[0].imageName}/>
					<Card.Body className="text-center">
                     <Card.Title>{product.title} </Card.Title>
								<div className="stars">
								  <i className="fa fa-star blue-star" aria-hidden="true"></i>
								  <i className="fa fa-star blue-star" aria-hidden="true"></i>
								  <i className="fa fa-star blue-star" aria-hidden="true"></i>
								  <i className="fa fa-star blue-star" aria-hidden="true"></i>
								  <i className="fa fa-star gray-star" aria-hidden="true"></i>
								</div>
								<Card.Text><h4>NRS.{product.unitPrice[0].sellingPrice}</h4></Card.Text>
							  <div className="snipcart-details top_brand_home_details">
							  <input type="submit" name="submit" value="Add to cart" className="button-cart" />
							</div>
					</Card.Body>
					</div>
				  </div>
					
				  )
				}
		 )}
	 	</Row>
         <div className="clearfix"> </div>
         </div>
     </Container>
     </div>
);
}
export default Featured;