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
      Products.map(p=>{
        return(
                <div className="p-3 col-lg-4 col-md-3 col-sm-6">
                <div className="card bg-secondary" style={{ width: '18rem' }}>
                    <img src={p.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-light">{p.title}</h5>
                        <div className="mt-3 d-flex align-items-center justify-content-between">
                        <h5 className="text-info">${p.price}</h5>
                        <button className="btn btn-info fw-bold text-light" onClick={()=>add(p._id)}><i class="bi bi-cart3"></i> Add to cart</button>
                        </div>
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
