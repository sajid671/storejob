import {useSelector,useDispatch} from 'react-redux';
import { addtocart } from '../Redux/store';

function ProductsJS() {
const Products = useSelector((state)=>state.shop.products)
const dispatch = useDispatch();
const add = (_id) => dispatch(addtocart(_id))
  return (
    <div className="container border mt-4">
    <div className="row p-4">
    {
      Products.map(prod=>{
        return(
          <div className="row col-lg-3 col-md-4 col-sm-6">
            <div key={prod._id} className="card" style={{width:300}}>
            <img className="card-img-top" src={prod.image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text">{prod.description}</p>
              <button className="btn btn-primary" onClick={()=>add(prod._id)}>ADD TO CART</button>
            </div>
          </div>
          </div>
        )
      })
    }
    </div>
    </div>
  );
}

export default ProductsJS;
