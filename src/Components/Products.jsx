import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import  Alert  from "react-bootstrap/Alert";
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "./Store/CartSlice";
import { getProducts } from "./Store/ProductSlice";
import StatusCode from "./Store/Utils/StatusCode";



const Products = () => {
    // const [products,setProducts] = useState([])
    const dispatch = useDispatch()
    const {data,status} = useSelector(state => state.products  )
    useEffect(() => {
      // dispatch an action for fetch products
      dispatch(getProducts())
        //api
        // fetch('https://fakestoreapi.com/products')
        // .then(data => data.json())
        // .then(result => setProducts(result))
        
    }, []);
    if(status === StatusCode.LOADING){
      return <h3 style={{textAlign:'center'}}>Loading.........</h3>
    }
    if(status === StatusCode.ERROR){
      return <Alert style={{textAlign:'center'}} key={'danger'} variant="danger"> Something wemt wrong ....!!!!! Please try again later</Alert>
    }
    const addItem = (product) => {
      dispatch(addtoCart(product))
      // alert('Product added ')
    }

    const cards = data.map(product => (
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
      <Button variant="outline-dark" onClick={() => addItem(product)}>Add to cart</Button>
      </Card.Footer>
    </Card>
        </div>
    ))

  return (
    <div className="row">
        <h1 style={{textAlign:'center'}}>PRODUCT DASHBOARD</h1><br /><br /><br /><br /><br />
        {/* {JSON.stringify(products)} */}
            {cards}
    </div>
  )
}

export default Products
