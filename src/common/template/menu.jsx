import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default () => (
  <ul className="sidebar-menu" >
    <MenuItem path="#" label="Dashbord" icon="dashboard" />
    <MenuTree label="Cadrastro" icon="edit">
      <MenuItem path="#billingCycles" label="Ciclos de Pagamentos" icon="usd" />
    </MenuTree>
  </ul>
);
