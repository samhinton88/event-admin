import React, { Component } from 'react';
import TableRow from '../TableRow';
import TableCell from '../TableCell';



class AdminTable extends Component {

  renderTableRows = () => {

  }

  renderTableHeaders = () => {

  }

  render() {
    return (
      <div className='admin-table'>
        {this.renderTableHeaders()}

        {this.renderTableRows()}


      </div>
    )
  }
}

export default AdminTable;
