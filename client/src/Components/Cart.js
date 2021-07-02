import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment, Remove } from '../Redux/store';

function CartJS() {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.shop.cart)
  const inc = (qty)=>dispatch(increment(qty))
  const dec = (qty)=>dispatch(decrement(qty))
  const remove=(_id)=>dispatch(Remove(_id))

  const Total=()=>{
    return Products.reduce((a,c)=>a+c.price*c.qty,0)
  }
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Remove</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>

          </tr>
        </thead>
        <tbody>

          {
            Products.map(p => {
              return (
                <tr>
                  <th><img src={p.image} style={{width:200,height:100}}/></th>
                  <td>{p.title}</td>
                  <td>{p.description}</td>
                  <td>
                  <i className="bi bi-plus-circle-fill" style={{color:'#334FFF'}} onClick={()=>inc(p._id)}></i>
                    {p.qty}
                  <i className="bi bi-dash-circle-fill" style={{color:'#334FFF'}}  onClick={()=>dec(p._id)}></i>
                  </td>
                  <td><button className="btn btn-primary" onClick={()=>remove(p._id)}>X</button></td>
                  <td>{p.price}$</td>
                  <td>{p.qty * p.price}$</td>

                </tr>
              )
            })
          }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{Total()}$</td>

          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CartJS;
