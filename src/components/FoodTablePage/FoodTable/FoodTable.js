import React from 'react';
import './FoodTable.css';
import Table from 'react-bootstrap/Table';

const FoodTable = ({ foodArray, loadData }) => {
    loadData();
    //FIX ME: Should not be using index as a key for .map  - use a unique string like 'name' instead. Check React docs.
    const rowElements = foodArray.map((food, i) => {
            return (
                <tr key={i}>
                    <td className="fl w-30">{foodArray[i].name}</td>
                    <td className="fl w-10">{foodArray[i].serving}</td>
                    <td className="fl w-10">{foodArray[i].measure}</td>
                    <td className="fl w-10">{foodArray[i].calories}</td>
                    <td className="fl w-10">{foodArray[i].protein}</td>
                    <td className="fl w-10">{foodArray[i].carbs}</td>
                    <td className="fl w-10">{foodArray[i].fat}</td>
                    <td className="fl w-10">
                        <span>Edit</span>
                        <span>Delete</span>
                    </td>
                </tr>
            )
    });

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th className="fl w-30">Name</th>
                    <th className="fl w-10">Serving</th>
                    <th className="fl w-10">Measure</th>
                    <th className="fl w-10">Cals</th>
                    <th className="fl w-10">P</th>
                    <th className="fl w-10">C</th>
                    <th className="fl w-10">F</th>
                    <th className="fl w-10">Action</th>
                </tr>
            </thead>
            <tbody>
                {rowElements}
            </tbody>
        </Table>
    )

    
}

export default FoodTable;