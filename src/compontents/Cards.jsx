import React, { useState } from 'react';

const dataObj = [
    {
        name: 'Starter',
        description: 'Getting started and off-site video messages',
        cost: 'Free forever',
        countView: '',
        minCount: 0,
        maxCount: 0,
        nameButton: 'Get Started',
        aboutPlan: 'HIGHLIGHTS:',
        pluses: ['Share in Emails/SMS or via social', 'Upload, record or import from anywhere', 'Create Interactive Videos']
    },
    {
        name: 'Pro',
        description: 'Best for brands with under 30K visitors/month and video messaging power users',
        cost: '$19/month',
        minCount: 2000,
        maxCount: 32000,
        countView: '5,000 views/month',
        nameButton: 'Start Free 14-Day Trial',
        aboutPlan: 'EVERYTHING IN FREE, PLUS:',
        pluses: ['Share on site!', 'Unlimited Tolstoys', 'Custom Branding']
    },
    {
        name: 'Business',
        description: 'Best for brands with 30K-100K visitors/month and video messaging teams',
        cost: '$299/month',
        countView: '50,000 views/month',
        minCount: 33000,
        maxCount: 99000,
        nameButton: 'Start Free 14-Day Trial',
        aboutPlan: 'EVERYTHING IN PRO, PLUS:',
        pluses: ['Connect multiple stores', 'Whitelabeling', 'Personalized onboarding']
    },
    {
        name: 'Enterprise',
        description: 'Best for brands with over 100K visitors/month and brands seeking enterprise-grade service level',
        cost: 'Let’s Talk',
        minCount: 100000,
        maxCount: 100000,
        countView: 'Unlimited views/month',
        nameButton: 'Contact Sales',
        aboutPlan: 'EVERYTHING IN BUSINESS, PLUS:',
        pluses: ['30-Day Free Trial', 'Fixed price', 'Custom analytics']
    }
]

const Cards = () => {
    const [count, setCount] = useState(1000);

    const inputHandler = (e) => setCount(e.target.value);

    return (
        <div className="pricing">
            <h1 className='pricing__main-title'>We’ve got a plan for you</h1>
             <div className="pricing__input-wrapper">
                <input className='pricing__input' onChange={inputHandler} type="range"  name="price" 
                min="1000" max="100000" value={count} step="1000"></input>
                <span className="pricing__min_max">1k</span>
                <span className="pricing__min_max">100k+</span>
                <div className="pricing__estimate">
                    <span className='pricing__estimated'>Your estimated price is:</span>
                    <span className='pricing__estimated-cost'>{count > 5000 ? '50$': '100$'}</span>
                </div>
             </div>
        
        <div className="pricing-boxes__wrapper">
            {dataObj.map((item, key) => {
                return (
                    <div key={key} className={count >= item.minCount && count <= item.maxCount ? 'active pricing__item' : 'pricing__item'}>
                        <div className="pricing-box__top">
                            <span className="pricing__title">{item.name}</span>
                            <span className="pricing__description">{item.description}</span>
                        </div>
                        <div className="pricing__box-price">
                            <span className="pricing__cost">{item.cost}</span>
                            <span className="pricing__views">{item.countView}</span>
                        </div>
                        <button className="pricing__btn">{item.nameButton}</button>
                        <span className="pricing__about">{item.aboutPlan}</span>
                        <ul>
                            {item.pluses.map((pluses, key) => {
                                return (
                                    <li key={key}>{pluses}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    </div>
    )
}
export default Cards