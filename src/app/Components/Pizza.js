import React from 'react'
import Image from 'next/image'
import p1 from './assets/p1.jpg'
const Pizza = () => {
    return (
        <div className='pizzza-container'>
            <div className='pizzza-heading'>
                <span>OUR MENU</span>
                <span>Menu That Always</span>
                <span>Make you Fall in Love</span>
            </div>
            <div className='pizzza'>
                <div>
                <div className='pizzza-wrapper'>
                    <Image
                        src={p1}
                        alt=''
                        style={{ borderRadius: '24px' }}
                    />
                </div>
                <div className='menu'>Maxico Chilli Pizza</div>
                    <div className='menu-price'>Rs 18</div>
                </div>
                <div>
                <div className='pizzza-wrapper'>
                    <Image
                        src={p1}
                        alt=''
                        style={{ borderRadius: '24px' }}
                    />
                </div>
                <div className='menu'>Maxico Chilli Pizza</div>
                    <div className='menu-price'>Rs 18</div>
                </div>
                <div>
                <div className='pizzza-wrapper'>
                    <Image
                        src={p1}
                        style={{ borderRadius: '24px' }}
                        alt=''
                    />
                </div>
                <div className='menu'>Maxico Chilli Pizza</div>
                    <div className='menu-price'>Rs 18</div>
                </div>
            </div>
            <div className='pizzza' style={{ marginTop: '-34px' }}>
                <div>
                    <div className='pizzza-wrapper'>
                        <Image
                            src={p1}
                            alt=''
                            style={{ borderRadius: '24px' }}
                        />
                        <div className='menu'>Maxico Chilli Pizza</div>
                        <div className='menu-price'>Rs 18</div>
                    </div>
                </div>
                <div>
                    <div className='pizzza-wrapper'>
                        <Image
                            src={p1}
                            alt=''
                            style={{ borderRadius: '24px' }}
                        />
                    </div>
                    <div className='menu'>Maxico Chilli Pizza</div>
                    <div className='menu-price'>Rs 18</div>
                </div>
                <div>
                    <div className='pizzza-wrapper'>
                        <Image
                            src={p1}
                            style={{ borderRadius: '24px' }}
                            alt=''
                        />
                    </div>
                    <div className='menu'>Maxico Chilli Pizza</div>
                    <div className='menu-price'>Rs 18</div>
                </div>
            </div>
        </div>
    )
}

export default Pizza

