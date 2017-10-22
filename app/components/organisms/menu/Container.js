import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuDrawer from './MenuDrawer';


const mapStateToProps = state => ({
  menuItems: state.menus.drawerMenu,
});

@connect(mapStateToProps)
class DrawerSimpleExample extends React.Component {
  static propTypes = {
    menuItems: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton label="Toggle Drawer" onClick={this.handleToggle}/>
        <MenuDrawer
          open={this.state.open}
          menuItems={this.props.menuItems}/>
      </div>
    );
  }
}

export default DrawerSimpleExample;
