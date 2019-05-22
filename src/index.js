import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Menu, Icon, Drawer, Affix, Button } from 'antd'
import './styles.css'
import logo from './assets/logo.png'

const { Header, Content, Sider } = Layout

class App extends React.Component {
	state = {
		current: '1',
		isMobile: false,
		collapsed: false,
		collapsedWidth: 80,
		visible: false,
		rightVisible: false,
		headerWidth: 256,
	}

	toggle = () => {
		if (this.state.isMobile === false) {
			if (this.state.collapsed) {
				this.setState({
					headerWidth: 256,
				})
			} else {
				this.setState({
					headerWidth: 80,
				})
			}
			this.setState({
				collapsed: !this.state.collapsed,
			})
		} else {
			this.setState({
				visible: true,
			})
		}
	}

	toggoleRightDrawer = () => {
		this.setState({
			rightVisible: !this.state.rightVisible,
		})
	}

	showDrawer = () => {
		this.setState({
			visible: true,
		})
	}

	onClose = () => {
		this.setState({
			visible: false,
			rightVisible: false,
		})
	}

	handleClick = e => {
		// console.log('click ', e)
		this.setState({
			current: e.key,
		})
	}

	render() {
		// console.log(this.state);
		return (
			<Layout id="components-layout-demo-custom-trigger">
				<Drawer
					title="Menu"
					placement="left"
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
					bodyStyle={{ padding: '0px' }}>
					<Menu
						mode="inline"
						onClick={this.handleClick}
						selectedKeys={[this.state.current]}
						style={{ width: 256 }}>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span>nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span>nav 3</span>
						</Menu.Item>
					</Menu>
				</Drawer>
				<Sider
					breakpoint="xs"
					collapsible
					collapsed={this.state.collapsed}
					defaultCollapsed={this.state.collapsed}
					reverseArrow={true}
					style={{
						// backgroundColor: "transparent",
						position: 'fixed',
						top: 0,
						left: 0,
						zIndex: 10,
						minHeight: '100vh',
						transition: 'all .2s',
						boxShadow: '2px 0 6px rgba(0,21,41,.35)',
					}}
					theme="light"
					trigger={null}
					width={256}
					collapsedWidth={this.state.collapsedWidth}
					onBreakpoint={broken => {
						// console.log("broken", broken);
						if (broken) {
							this.setState({
								isMobile: true,
								collapsed: true,
								collapsedWidth: 0,
								headerWidth: 0,
							})
						} else {
							this.setState({
								isMobile: false,
								collapsed: false,
								collapsedWidth: 80,
								visible: false,
								headerWidth: 256,
							})
						}
					}}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type)
					}}>
					{/* Logo */}
					<div className="logo">
						<img src={logo} alt="logo" />
						<h1>Chnirt</h1>
					</div>
					<Menu
						theme="light"
						mode="inline"
						onClick={this.handleClick}
						selectedKeys={[this.state.current]}
						// defaultSelectedKeys={['1']}
					>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span>nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span>nav 3</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout
					style={{
						minHeight: '100vh',
						paddingLeft: `${this.state.headerWidth}px`,
					}}>
					{/* Header */}
					<Header
						style={{
							position: 'fixed',
							top: 0,
							right: 0,
							// zIndex: 9,
							// width: '100%',
							transition: 'all .2s',
							// padding: '0px',
							width: `calc(100% - ${this.state.headerWidth}px)`,
							zIndex: 2,
							background: '#fff',
							padding: '0px',
							boxShadow: '0 1px 4px rgba(0,21,41,.08)',
						}}>
						<Icon
							className="trigger"
							type={
								this.state.collapsed
									? 'menu-unfold'
									: 'menu-fold'
							}
							onClick={this.toggle}
						/>
					</Header>
					{/* Content */}
					<Content
						style={{
							margin: '24px 16px 0',
							paddingTop: '64px',
							overflow: 'initial',
						}}>
						<div
							style={{
								padding: 24,
								background: '#fff',
								textAlign: 'center',
							}}>
							...
							<br />
							Really
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							long
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							...
							<br />
							content
						</div>
					</Content>
					<Affix
						offsetTop={120}
						style={{
							position: 'absolute',
							right: 0,
						}}
						onChange={affixed => {
							// console.log("affixed", affixed)
						}}>
						{!this.state.rightVisible && (
							<Button
								type="primary"
								icon="setting"
								size="large"
								onClick={this.toggoleRightDrawer}
								style={{ borderRadius: '4px 0 0 4px' }}
							/>
						)}
					</Affix>
					<Drawer
						title="Custom theme"
						width={300}
						placement="right"
						closable={false}
						onClose={this.onClose}
						visible={this.state.rightVisible}>
						<Button
							className="antd-pro-components-setting-drawer-index-handle"
							type="primary"
							icon={!this.state.rightVisible ? 'setting' : 'close'}
							size="large"
							onClick={this.toggoleRightDrawer}
						/>
					</Drawer>
				</Layout>
			</Layout>
		)
	}
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
