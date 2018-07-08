import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from '../TableRow';

import './style.sass';



class AdminTable extends Component {

  renderTableRows = () => {
    const { events, isLoading } = this.props;
    if (isLoading) { return <h1>Loading</h1>}

    return Object.keys(events).map((k) => {
      return <TableRow data={events[k]} key={k}/>
    })
  }

  renderTableHeaders = () => {
    const { headerKeys } = this.props;

    return headerKeys.map((k) => <th>{k}</th>)
  }

  render() {
    console.log('admin-table props', this.props)
    return (
      <div >
        <table className='admin-table'>
          <thead>
            {this.renderTableHeaders()}
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    isLoading: state.UX.loadingResources,
    headerKeys: state.table.headerKeys
  }
}

export default connect(mapStateToProps)(AdminTable);
