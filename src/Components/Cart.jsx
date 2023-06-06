import { useDispatch, useSelector } from "react-redux"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removefromcart } from "./Store/CartSlice";


const Cart = () => {
  const products =useSelector(state => state.cart)
  console.log(products);
  const dispatch = useDispatch()
  const removeFromCart = (id) => {
      dispatch(removefromcart(id))
  }
 
   
  return (
     <div >
      {products.map(product => (
        
       <div key={product.id} className="col-md-3" style={{marginBottom:'10px'}}>
        
        <Card style={{ width: '18rem' }} className="h-100">
            <div className="text-center">
            <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130'}}/>
            </div>
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
    INR.{product.price}
    </Card.Text>
  </Card.Body>
  <Card.Footer style={{backgroundColor:'white'}}> 
  <Button variant="outline-danger" onClick={() => removeFromCart(product.id)} >Remove item</Button>
  </Card.Footer>
</Card>
    </div>
  ))}
    </div>
  )
}

export default Cart
