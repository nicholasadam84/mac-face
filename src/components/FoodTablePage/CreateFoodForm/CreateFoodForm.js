import React from 'react';
import Button from 'react-bootstrap/Button';


const initialState = {
    name: '',
    serving: '',
    measure: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '', 
}
class CreateFoodForm extends React.Component {
    state = initialState;
    
    setValue = (fieldName) => (e) => this.setState({[fieldName]: e.target.value});
    
    createFood = () => {
        fetch('http://localhost:3000/food', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                serving: this.state.serving,
                measure: this.state.measure,
                calories: this.state.calories,
                protein: this.state.protein,
                carbs: this.state.carbs,
                fat: this.state.fat,
            })
        })
        .then(this.setState(initialState))
        .then(this.props.loadData)

    }
    //TO-DO: Convert to controlled components by supplying "value" attributes of html elements below with this.state values to make state the single source of truth.
    //To-DO: Consider redesigning the form and extracting out form field components where appropriate.
    render() {
        const { name, serving, measure, calories, protein, carbs, fat } = this.state;
        const { hideCreateFoodForm } = this.props;
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                <main className="pa4 black-80">
                    <div>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <div className="flex justify-between"> 
                                <legend className="f3 fw6 ph0 mh0">New Food</legend>
                                <span className="f2"
                                    onClick={hideCreateFoodForm}
                                > X
                                </span>    
                            </div>    
                            <div className="mt3">
                                <label className="db fw6 f6" htmlFor="name">Name</label>
                                <input
                                    value={name} 
                                    id="name" 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="name"  
                                    onChange={this.setValue('name')} 
                                />
                            </div>
                            <div>
                                <div className="mt3 fl w-50 pa1">
                                    <label className="db fw6 f6" htmlFor="serving">Serving</label>
                                    <input 
                                        value={serving} 
                                        id="serving" 
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="number"
                                        min="0" 
                                        name="serving"  
                                        onChange={this.setValue('serving')} 
                                    />
                                </div>
                                <div className="mv3 fl w-50 pa1">
                                    <label className="db fw6 f6" htmlFor="measure">Measure</label>
                                    <input
                                        value={measure}  
                                        id="measure" 
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="text" 
                                        name="measure"  
                                        onChange={this.setValue('measure')} 
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="mt3 fl w-25 pa1">
                                    <label className="db fw6 f6" htmlFor="calories">Calories</label>
                                    <input
                                        value={calories}  
                                        id="calories" 
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="number"
                                        min="0" 
                                        name="calories"  
                                        onChange={this.setValue('calories')} 
                                    />
                                </div>
                                <div className="mv3 fl w-25 pa1">
                                    <label className="db fw6 f6" htmlFor="protein">Protein</label>
                                    <input
                                        value={protein}  
                                        id="protein" 
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="number"
                                        min="0" 
                                        name="protein"  
                                        onChange={this.setValue('protein')} 
                                    />
                                </div>
                                <div className="mv3 fl w-25 pa1">
                                    <label className="db fw6 f6" htmlFor="carbs">Carbs</label>
                                    <input
                                        value={carbs}  
                                        id="carbs" 
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="number"
                                        min="0" 
                                        name="carbs"  
                                        onChange={this.setValue('carbs')} 
                                    />
                                </div>
                                <div className="mv3 fl w-25 pa1">
                                    <label className="db fw6 f6" htmlFor="fat">Fat</label>
                                    <input
                                        value={fat}  
                                        id="fat" 
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="number"
                                        min="0" 
                                        name="fat"  
                                        onChange={this.setValue('fat')} 
                                    />
                                </div>
                            </div>
                                    {/* <label className="pa0 ma0 f6 pointer"><input type="checkbox" /> Remember me</label> */}
                        </fieldset>
                        <div>
                            <input 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Create"
                                onClick={this.createFood}
                            />
                            <Button />
                        </div>
                  
                    </div>
                </main>
            </article>
        );
    }
}


export default CreateFoodForm;