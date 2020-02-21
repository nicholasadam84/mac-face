import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const initialState = {
    name: '',
    serving: '',
    measure: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '', 
}

class AddFoodForm extends React.Component {
    state = initialState;
    
    setValue = (fieldName) => (e) => this.setState({[fieldName]: e.target.value});
    
    addFood = () => { 
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

    render () {
        console.log("state", this.state)
        const { name, serving, measure, calories, protein, carbs, fat } = this.state;
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Food Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={this.setValue('name')} />
                </Form.Group>
    
                <Form.Group>
                    <Form.Label>Serving</Form.Label>
                    <Form.Control type="number" value={serving} onChange={this.setValue('serving')} />
                        <Form.Text>
                            e.g. For 1 Cup of Rice, enter 1.
                        </Form.Text>
                </Form.Group>
    
                <Form.Group>
                    <Form.Label>Measurement</Form.Label>
                    <Form.Control type="text" />
                        <Form.Text>
                            e.g. For 1 Cup of Rice, enter Cup.
                        </Form.Text>
                </Form.Group>
    
    
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label >Cals</Form.Label>
                            <Form.Control />
                        </Col>
                        <Col>
                            <Form.Label>Protein</Form.Label>
                            <Form.Control/>
                        </Col>
                        <Col>
                            <Form.Label>Carbs</Form.Label>
                            <Form.Control/>
                        </Col>
                        <Col>
                            <Form.Label>Fat</Form.Label>
                            <Form.Control/>
                        </Col>
                    </Form.Row>
                </Form.Group>
    
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Add another food" />
                </Form.Group>
    
                <Button variant="primary" type="submit">
                    Add Food
                </Button>
            </Form>
        )

    }
}

export default AddFoodForm;