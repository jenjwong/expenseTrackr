import React, {Component} from 'react';
import {DateRangePicker} from '@blueprintjs/datetime';
import { Classes, Intent, Switch, Tag } from "@blueprintjs/core";
import {MILLISECONDS_DAY} from '../utils/constants';
import moment from 'moment';
import * as classNames from 'classnames';

import './DatePicker.css';

export default class DataRangePicker extends Component {

  state = {
    start: '',
    end: ''
  }

  handleDateChange = (range) => {
    let [start, end] = range;
    range.includes(null) ? null : this.props.getExpenseReport(start, end);
    this.setState({start, end});
  }

  render() {
    const expenseReport = this.props;
    return (
      <div className="datepicker--wrapper">
        <DateRangePicker className="datepicker" onChange={this.handleDateChange} />
        <span className="datepicker-start">{this.state.start && <div className="pt-callout pt-intent-success pt-text-muted">{moment(this.state.start).format('dddd MMMM Do YYYY')}</div>}</span>
        <span className="datepicker-end">{this.state.end && <div className="pt-callout pt-intent-danger pt-text-muted">{moment(this.state.end).format('dddd MMMM Do YYYY')}</div>}</span>
        <span>{!this.state.start && <div className="datepicker-call-to-action pt-callout pt-intent-primary pt-text-muted"><span className="pt-icon-calendar icon-select"></span>Select Dates to Generate a Report</div>}</span>
      </div>
    )
  }
}
