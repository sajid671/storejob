import axios from 'axios';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {setProducts} from './Redux/store'

export const Data=()=>{
    const dispatch=useDispatch();
    useEffect(()=>
    {
        axios.get('http://localhost:3333/products').then((products)=>{
            dispatch(setProducts(products.data))
        })
    },[])
    return(
        <></>
    )
}