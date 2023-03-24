import React from 'react';
import Sell from './top-sell';
import Icons from './icons-render';
import Image from './img';
import logo from '../img/notebook.jpg';
import discount from '../icons/discountpng.png';
import Name from './name';
import Rating from './rating';
import Price from './price';
import Send from './sending';

const Main = () => {
    return (
        <div className='card'>

            <div className='card-item'>

                <Sell title={'Топ продажів'} />
                <Icons />

            </div>

            <div className='card-sell'>

                <Image image={logo} />

            </div>

            <div className='card-discount'>

                <Image  image={discount} />

            </div>

            <div className='card-name'>

                <Name title={'Ноутбук Acer Aspire 7 A715-42G-R3EZ'} />

            </div>

            <Rating title={'101 відгук'} />

            <div className='card-price'>

                <Price name={'40 999 ₴ '} name2={'30 999₴'} />

            </div>

            <Send title={'Готовий до відправлення'} />

        </div>
    )
}

export default Main