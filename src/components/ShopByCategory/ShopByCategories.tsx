
import React, { useState ,useEffect} from 'react';
import CategoryCard from './CategoryCard';
import {Spinner} from 'react-bootstrap';
import '../../assets/style/ShopByCategories.css';

const baseURL = 'https://uat.ordering-dalle.ekbana.net/';
const apiKey ='q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6';
const warehouseId = '1';

const ShopByCategory = () => {
    const [displaycategory, setDisplayCategory] = useState<any[]>([]);
    const [loading,setLoaading] = useState(false);
    
    const getCategory = async() => {
            let response = await fetch(`${baseURL}/api/v4/category`, {
                method: 'GET',
                headers: {
                    'Warehouse-Id':warehouseId,
                    'Api-Key': apiKey,
                }
            });
            const newData = await response.json();
            console.log(newData.data)
            setDisplayCategory(newData.data);
            setLoaading(false);
           
    }
    useEffect(() => {
        try{
          getCategory();
        }catch(err){
          console.log(err)
        }
      },[]);
   if (loading){
     return <Spinner animation={'border'}/>
   }
                 
                    return(
                      <>
                      <div className="category-section">
                        <div className="container">
                          <div className="category-sectiontitle">
                            <h2 className="category-header">SHOP BY CATEGORY</h2>
                          </div>
                          <div className="row">
                          {displaycategory && displaycategory.map(categories => {
                            return(
                              <div className="col-lg-4 p-3" key={categories.id}>
                              <CategoryCard categories={categories} />
                            </div>
                            
                            )
                          })}
                          </div>
                        </div>
                      </div>
                    </>
                      );
                    }

export default ShopByCategory;