import React, {Component} from 'react';
import {DateRangePicker} from '@blueprintjs/datetime';
import { Classes, Intent, Switch, Tag } from "@blueprintjs/core";
import {MILLISECONDS_DAY} from '../utils/constants';
import moment from 'moment';
import * as classNames from 'classnames';

// const FORMAT = "dddd, LL";
//
// const Moment = (date, format = FORMAT) => {
//     const m = moment(date);
//     console.log("this is moment". m)
//     if (m.isValid()) {
//         return <Tag className={Classes.LARGE} intent={Intent.PRIMARY}>{m.format(format)}</Tag>;
//     } else {
//         return <Tag className={classNames(Classes.LARGE, Classes.MINIMAL)}>no date</Tag>;
//     }
// };

const start = new Date(Date.now() - (MILLISECONDS_DAY * 7));
// const end = new Date(Date.now());
const end = "Wed Jun 07 2017 12:00:00 GMT-0700"

const defaultState = {
  start,
  end
}

export default class DataRangePicker extends Component {

  state = defaultState


    handleDateChange = (range) => {
      let [start, end] = range;
      console.log(start, end)
      range.includes(null) ? null : this.props.getExpenseReport(start, end);
      this.setState({start, end});
    }

  render() {
    console.log('DATEPICKER SSTATE', this.state)
    return (
      <div>
        <DateRangePicker onChange={this.handleDateChange} />
        {/* <Moment date={this.state.start} />
        <span className={`${Classes.ICON_LARGE} ${Classes.iconClass("arrow-right")}`} />*/}
        {/* <Moment date={this.state.end} /> */}
      </div>
    )
  }
}
