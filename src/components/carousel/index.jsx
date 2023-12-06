import './style.sass';
import React from 'react';
import { $carousel } from '../cards';
import { useStore } from '../../store';
import { useDispatch } from 'react-redux';
import { register } from 'swiper/element/bundle';
import { all } from '../../store/slice/promo.slice';

register();
export default function () {
    const { promo } = useStore();
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (promo.data.length === 0) dispatch(all());
    }, []);

    return <section id="carousel">
        <swiper-container loop autoplay effect='fade' style={{ height: '100%' }}>
            {promo.data.map((item, id) => <$carousel key={id} {...item} />)}
        </swiper-container>
    </section>;
};
