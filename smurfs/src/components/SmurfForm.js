import React from 'react';

import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    };

    handleInputChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    handleAddSmurf = () => {
        
        const smurf = this.state;
        this.props.addSmurf(smurf);
        this.setState({ name: '', age: '', height: '' });

    }

    render() {
        return (
            <form>
                <input name="name" value={this.state.name} type="text" onChange={this.handleInputChange} placeholder="Name" />
                <input name="age" value={this.state.age} type="number" onChange={this.handleInputChange} placeholder="Age" />
                <input name="height" value={this.state.height} type="text" onChange={this.handleInputChange} placeholder="Height" />

                <button  onClick={this.handleAddSmurf}>Add Smurf</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(mapStateToProps, { addSmurf })(SmurfForm);