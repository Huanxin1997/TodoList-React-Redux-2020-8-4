import React from 'react';
import './index.css';
import { Card, Col, Button, Modal, Space, message } from 'antd';
import { DeleteOutlined, CheckOutlined } from '@ant-design/icons';

class TodoItem extends React.Component {

    constructor() {
        super();

        this.state = {
            visible: false
        }
    }

    markTodoItem = () => {
        this.props.markTodo(this.props.id, this.props.isMarked);
        message.success('Mark this card success');
    }

    deleteTodo = () => {
        this.props.deleteTodo(this.props.id);
        message.success('Delete this card success');
    }

    handleOk = e => {
        this.deleteTodo();
        this.setState({
            visible: false,
        });
    }

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    }

    showModel = () => {
        this.setState({
            visible: true
        })
    }

    render() {
        return (
            <Col span={6}>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Do you want to delete this TODO?</p>
                </Modal>
                <Card title={`TODO-${this.props.id}`} hoverable style={{ flex: 1, minWidth: "12vw", margin: "10px 8px" }}>
                    <p className={this.props.isMarked ? "marked" : ""}>{this.props.value}</p>
                    <Space>
                        <Button type="danger" size="small" onClick={this.showModel}>
                            <DeleteOutlined />
                        </Button>
                        <Button type="default" size="small" onClick={this.markTodoItem}>
                            <CheckOutlined />
                        </Button>
                    </Space>
                </Card>
            </Col>
        );
    }

}
export default TodoItem