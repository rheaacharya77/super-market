import React ,{useState,useEffect}from 'react';
import { Row, Container,Form, Spinner, Card,Button} from 'react-bootstrap';

const baseURL = 'https://uat.ordering-dalle.ekbana.net/';
const apiKey = 'q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6';
const warehouseId = '1';


const Products = (categoryid:any) => {
  const [productsbycategory, setProductsByCategory] = useState<any[]>([]);
  const [loading,setLoading] = useState(true);


  const getProducts = async() => {
      let response: any=  await fetch(
          `${baseURL}/api/v4/product?category-id=${categoryid}`,
          {
              method: 'GET',
              headers: {
                  'Warehouse-Id': warehouseId,
                  'api-key': apiKey,
              },
          },
      );
      let newData = await response.json();
    //  console.log(newData.data);
        setProductsByCategory(newData.data);
        // console.log(productsbycategory);
        setLoading(false);
      }
   
  useEffect(() => {
    try{
      getProducts();
    }catch(err){
      console.log(err);
    }
  },[]);

// console.log(productsbycategory);

  if(loading){
    return <Spinner animation={'border'}/>
  }
  
  
  return (
    <div className="newproducts-w3agile">
	<Container>
		<h3>PRODUCTS</h3>
		<div className="agile_top_brands_grids">
		<Row>
         {productsbycategory && productsbycategory.slice(3,21).map(product => {
			 
                return(
					<div className="col-md-3 top_brand_left" key={product.id}>
					<div className="hover14 column">
				
                    <Card.Img variant="top"src={product.images[0].imageName}/>
					<Card.Body className="text-center">
                     <Card.Title><h4>{product.title}</h4> </Card.Title>
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

export default Products;
