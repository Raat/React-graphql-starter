import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

const MenuDrawer = ({ open, menuItems }) => (
  <Drawer open={open}>
    {menuItems.map((item, i) => <MenuItem key={i}>{item}</MenuItem>)}
  </Drawer>
);

MenuDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  menuItems: PropTypes.array.isRequired,
};

export default MenuDrawer;
