import axios from 'axios';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {setProducts} from './Redux/store'

export const Data=()=>{
    const dispatch=useDispatch();
    useEffect(()=>
    {
        axios.get('https://enigmatic-journey-93687.herokuapp.com/product').then((products)=>{
            dispatch(setProducts(products.data))
        })
    },[])
    return(
        <></>
    )
}