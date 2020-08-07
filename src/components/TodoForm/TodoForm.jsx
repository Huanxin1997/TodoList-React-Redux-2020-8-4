import React from 'react';
import './index.css';
import { INPUT_UNVALID } from '../../utils/index';
import { Button, Modal, Input, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

class TodoForm extends React.Component {

    constructor() {
        super();

        this.state = {
            inputValue: "",
            visible: false
        }
    }

    handleInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = () => {
        if(this.state.inputValue === "") {
            message.success(INPUT_UNVALID)
            return;
        } 
        let todo = {
            content: this.state.inputValue
        }

        this.props.addTodo(todo)
        message.success("Create TODO success")
    }

    showModel = () => {
        this.setState({
            visible: true
        })
    }

    handleOk = () => {
        this.handleSubmit();
        this.setState({
            visible: false,
        });
    }

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Modal
                    title="Add TODO"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Input placeholder="Input your TODO content!" onChange={this.handleInput} onPressEnter={this.handleSubmit} />
                </Modal>
                <Button onClick={this.showModel}>
                    <PlusOutlined />
                </Button>
            </form>

        );
    }

}
export default TodoForm