import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { remove } from './store/cartSlice';

const Cart = () => {
    const products = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        dispatch(remove(id)); 
    }

    const cards = products.map(product => (
        <div key={product.id} className='col-md-12 m-2'>
            <Card style={{ width: '60rem'}} className='h-50'>
                <div className="row">
                <div className="col"> <Card.Img variant="top" src={product.image} style={{ width: '40px', height: '50px' }} /></div>
                <div className="col"><Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                    </Card.Body></div>
                <div className="col"><Card.Footer>
                        <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove</Button>
                    </Card.Footer></div>
                </div>
            </Card>
        </div>

    ))

    return (
        <div className="row mt-5 text-center">
            <h2>Products in Your Cart</h2>
            {cards}
        </div>
    );
};

export default Cart;