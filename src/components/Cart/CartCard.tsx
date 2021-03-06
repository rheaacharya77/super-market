import React from 'react'
import { Button} from 'react-bootstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const baseURL = "https://uat.ordering-dalle.ekbana.net";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = "1";
const accessToken = localStorage.getItem("accessToken");

const CartCard = ({item,i}:any) => {
   console.log(item);
    return (
        <>
        <tr className="rem1">
            <td className="invert">{i}</td>
            <td className="invert-image">
                <a href={item.cartProducts[i].product?.images[0].imageName} target="__blank">
                    <img
                        src={item.cartProducts[i].product?.images[0].imageName}
                        alt=" "
                        className="img-responsive"
                    />
                </a>
            </td>
            <td className="invert">
                <div className="quantity">
                    <div className="quantity-select">
                        <div
                            className="entry value-minus"
            
                        >
                            &nbsp;
                        </div>
                        <div className="entry value">
                        
                        </div>
                        <div
                            className="entry value-plus active"
                            
                        >
                            &nbsp;
                        </div>
                    </div>
                </div>
            </td>
            <td className="invert">{item.cartProducts[i].product?.title}</td>
            <td className="invert">Rs. {item.cartProducts[i].selectedUnit?.sellingPrice}</td>
            <td className="invert">Rs. {item.cartProducts[i].price}</td>
            <td className="invert">
                <Button variant="danger">
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </td>
        </tr>
     
    </>
  )
}
export default CartCard;
