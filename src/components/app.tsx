/*global chrome*/
import * as React from "react";
import { Layout, Progress, Card, InputNumber, Form, Row, Col, Switch, Input, Alert, Collapse } from 'antd';

const {Panel} = Collapse;
const { Header, Content, Footer } = Layout;


export interface MainProps {
}

export interface MainState extends MainProps {

}
export default class Main extends React.Component<MainProps, MainState> {

	constructor(props: MainProps){
		super(props);
	  
		this.state = {
			
		}

	}

	
    render() {
		
		return (<Layout className="layout">
		<Header>
		  <div className="logo" />
		  
		</Header>
		<Content style={{ padding: '0 50px' }}>
		  
		  <div className="site-layout-content">Content</div>
		</Content>
		<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
	  </Layout>) 
		
    }
}

