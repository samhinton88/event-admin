import React, { Component } from 'react';
import AdminTable from '../AdminTable';


class AdminTableContainer extends Component {

  render() {
    return (
      <div className='admin-table-container'>
        <AdminTable />
      </div>
    )
  }
}

export { AdminTableContainer }
