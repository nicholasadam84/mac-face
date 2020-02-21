import React from 'react';
import banana from './banana.svg';

const FoodCard = () => {
    return (
        <div className="flex flex-wrap justify-around items-center">
            
            <article className="br4 food-card ma2 shadow-5">
                <div className="flex justify-around bg-light-blue pa3 br4 br--top">
                    <div className="bg-white br-100 pa2 w-40">
                        <h3 className="dark-blue mt2 f7">Serving Size</h3>
                        <p className="orange">1</p>
                    </div>
                    <div className="bg-white br-100 pa2 w-40">
                        <h3 className="dark-blue mt2 f7">Measurement</h3>
                        <p className="orange">Medium</p>
                    </div>
                </div>

                <div>
                    <img src={banana} className="br-100 h3 w3 dib" alt="banana" />
                    <div>
                        <h3 className="dark-blue">Banana</h3>
                        <p className="dark-blue">Simple Carb</p> 
                    </div>
                </div>

                <div className="flex">
                    <div className="br b--lightest-blue pa2 w-25 white fw7 bg-light-blue br4 br--bottom br--left">
                        <p className="f4">105</p>
                        <h3 className="f7">Cals</h3>
                    </div>
                    <div className="br b--lightest-blue pa2 w-25 white fw7 bg-light-blue">
                        <p className="f4">27</p>
                        <h3 className="f7">P</h3>
                    </div>
                    <div className="br b--lightest-blue pa2 w-25 white fw7 bg-light-blue">
                        <p className="f4">1.3</p>
                        <h3 className="f7">C</h3>
                    </div>
                    <div className="pa2 w-25 white fw7 bg-light-blue br4 br--bottom br--right">
                        <p className="f4">0.4</p>
                        <h3 className="f7">F</h3>
                    </div>
                </div>
            </article>
            
            

        </div>
    );
}

export default FoodCard;
