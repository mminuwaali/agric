import './style.sass';
import React from 'react';
import { useStore } from '../../store';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get, productPost } from '../../store/slice/product.slice';

export default function () {
    const { id } = useParams();
    const { product } = useStore();
    const dispatch = useDispatch();
    const [num, setnum] = React.useState(1);

    React.useEffect(() => {
        dispatch(get(id));
    }, [id]);

    React.useEffect(() => {
        console.log(product.item);
        if (product.item === undefined) dispatch(productPost(id));
    }, [product.item]);

    return <div className="single-product">
        <div className="main">
            <div className="grid">
                <img src={product.item?.image} alt="" />
            </div>
            <div className="grid">
                <div className="header">
                    <h2>{product.item?.name}</h2>
                </div>
                <div className="price">
                    <span>NGN {product.item?.price}</span>
                </div>
                <p>{product.item?.description}</p>
                <div className="buttons">
                    <div className="inputs">
                        <button disabled={num === 0} onClick={() => setnum(prev => prev > 1 ? --prev : prev)}>-</button>
                        <input type="text" value={num} disabled />
                        <button disabled={num === 0} onClick={() => setnum(prev => prev < 10 ? ++prev : prev)}>+</button>
                    </div>
                    <button className='px-10 rounded-full text-center flex items-center justify-center bg-green-500'>add to cart</button>
                </div>
            </div>
        </div>
    </div>
}