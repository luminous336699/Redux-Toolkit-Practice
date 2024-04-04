import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './store/cartSlice';

const Product = () => {

    const dispatch = useDispatch();
 
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

        const addToCart = (product) => {
            //dispatch and add action
            dispatch(add(product))
        }


    const cards = products.map(product => (
        <div key={product.id} className='col-md-3 mt-2'>
            <Card style={{ width: '18rem' }} className='h-100'>
                <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width:'100px' , height: '130px'}}/>
                </div>
            
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                 text
                </Card.Text>
                
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
            </Card.Footer>
        </Card>
        </div>

    ))



    return (
        <div>
           <h1 className='text-center m-4'>Product Dashboard</h1>
           <div className='row'> 
            {cards}
           </div>
        </div>
    );
};

export default Product;



