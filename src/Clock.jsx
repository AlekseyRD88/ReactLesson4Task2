import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';


const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}
const formatDate = date => moment(date).format('h:mm:ss A');
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: getTimeWithOffset(this.props.offset),
    };
    setInterval(() => {
      this.setState({
        date: getTimeWithOffset(this.props.offset)
      });
    }, 1000);
  }
  render() {

    return(
      <div className="clock">
    <div className="clock__location">
        {this.props.location}
    </div>
    <div className="clock__time">
        {formatDate(this.state.date)}
    </div>
  </div>
    );
  };
}






export default Clock;