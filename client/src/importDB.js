import axios from 'axios';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {setProducts} from './Redux/store'

export const Data=()=>{
    const dispatch=useDispatch();
    useEffect(() => {
    fetch('/product',{
    })
    .then(response => response.json())
    .then(json => {
        dispatch(setProducts(json.data))
    })
  }, []);
    return(
        <></>
    )
}