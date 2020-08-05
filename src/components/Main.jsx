import React from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import MarkedTodoListContainer from '../containers/MarkedTodoListContainer';
// import TodoFormContainer from '../containers/TodoFormContainer';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

import { Layout, Menu } from 'antd';

const { Content, Sider } = Layout;

class Main extends React.Component {

    componentWillMount() {
        this.props.initTodo()
    }

    markTodo = index => {
        this.props.markToDo(index);
    }

    deleteTodo = index => {
        this.props.removeTodo(index);
    }

    render() {
        return (
            // <Router>
            //     {/* <div className={"container"}>
            //         <aside>
            //             <Link to="/all">
            //                 <div>All</div>
            //             </Link>
            //             <Link to="/done">
            //                 <div>Made</div>
            //             </Link>
            //         </aside>
            //         <div className={"main"}>
            //             <h2>Todo List</h2>
            //             <TodoFormContainer />
            // <Route path="/all" component={TodoListContainer} />
            // <Route path="/done" component={MarkedTodoListContainer} />
            //         </div>
            //     </div> */}
            <Layout>
                <header />
                <Router>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <Menu.Item key="1">
                                    <Link to="/all">All</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/done">Done</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Route path="/all" component={TodoListContainer} />
                                <Route path="/done" component={MarkedTodoListContainer} />
                            </Content>
                        </Layout>
                    </Layout>
                </Router>
            </Layout>
        );
    }

}
export default Main