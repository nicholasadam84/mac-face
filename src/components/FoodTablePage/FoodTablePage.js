import React, {Component} from 'react';
import FoodTable from './FoodTable/FoodTable';
// import PlusSign from './PlusSign/PlusSign';
import CreateFoodForm from './CreateFoodForm/CreateFoodForm';
import Welcome from './Welcome/Welcome';
import AddFood from './AddFood/AddFood';

class FoodTablePage extends Component {
        state = {
            foodArray: [],
            displayCreateFoodForm: false,
        };
    
    loadData = () => {
        fetch('http://localhost:3000/food')
        .then(response => response.json())
        .then(data => {
            if (data) {
                //this.props.loadData(data);
                this.setState({ foodArray: data })
            }
        })        
    }

    showCreateFoodForm = () => {
        this.setState({ displayCreateFoodForm: true })
    }

    hideCreateFoodForm = () => {
        this.setState({ displayCreateFoodForm: false })
    }
    
    render() {
    const { foodArray, displayCreateFoodForm } = this.state;
    const { hideCreateFoodForm, loadData } = this;
        return (
            <>
                <Welcome />
                {displayCreateFoodForm && 
                <CreateFoodForm hideCreateFoodForm={hideCreateFoodForm} loadData={loadData}/>}
                {/* <PlusSign showCreateFoodForm={showCreateFoodForm} /> */}
                <AddFood loadData={loadData} />
                <FoodTable foodArray={foodArray} loadData={loadData} />
            </>
        )
    }
}

export default FoodTablePage;