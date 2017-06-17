import {DateRangePicker} from '@blueprintjs/datetime';
import React, {Component} from 'react';

export default class DataRangePicker extends Component {

    handleDateChange = (range) => {
      let [start, end] = range;
      range.includes(null) ? null : this.props.getExpenseReport(start, end);
    }

  render() {
    return (
        <DateRangePicker onChange={this.handleDateChange} />
    )
  }
}
