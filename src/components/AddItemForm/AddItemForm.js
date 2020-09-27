import React from 'react';
import './AddItemForm.css';

export default class AddItemForm extends React.Component {
    state = {
        text: ''
    }
  
    onChangeInput = (event) => {
        this.setState({
            text: event.target.value
        });
    }
  
    onSubmitForm = (event) => {
        event.preventDefault();
        const { onAdded } = this.props;
        const { text } = this.state;
        onAdded(text);
        this.setState({
            text: ''
        });
    }
  
    render() {
        return (
            <form
                className="form-group d-flex add-item-container"
                onSubmit={this.onSubmitForm}>
                <input
                    type="text"
                    className="input form-control"
                    onChange={this.onChangeInput}
                    placeholder="Введите дело"
                    value={this.state.text} />
                <button
                    className="btn btn-primary">
                    Добавить дело
                </button>
            </form>
        );
    }
}