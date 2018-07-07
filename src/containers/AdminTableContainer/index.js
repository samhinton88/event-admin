import React, { Component } from 'react';
import AdminTable from '../AdminTable';
import ContainerHead from '../ContainerHead';
import './style.sass';


class AdminTableContainer extends Component {

  render() {
    return (
      <div className='admin-table-container'>
        <ContainerHead />
        <AdminTable />
      </div>
    )
  }
}

export { AdminTableContainer }
