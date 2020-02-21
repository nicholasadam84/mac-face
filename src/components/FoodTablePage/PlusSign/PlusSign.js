import React from 'react';
import './PlusSign.css';

const PlusSign = ({ showCreateFoodForm }) => {
    return (
        <div className="flex justify-end ma0 pa1">
            <button 
                className="plus ma0 pa0 bg-dark-blue br-100 white f2"
                onClick={showCreateFoodForm}>+</button>
        </div>
    )
}

export default PlusSign;