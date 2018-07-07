import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '../TableCell';
import CRUDCell from '../CRUDCell';
import './style.sass'

class TableRow extends Component {
  renderCells= () => {
    const { data, headerKeys } = this.props;

    const dataCells = headerKeys.map((field) => {
      return <TableCell isImage={field === 'image'} data={data[field]} key={data.id + field}/>
    })

    return [...dataCells, <CRUDCell resourceId={data._id} data={data}/>]
  }

  render() {

    return (
      <tr className='table-row'>
        {this.renderCells()}
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    headerKeys: state.table.headerKeys
  }
}

export default connect(mapStateToProps)(TableRow);
