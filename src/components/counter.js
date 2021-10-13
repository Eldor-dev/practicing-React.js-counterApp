import React, {Component} from 'react';

class Counter extends Component {

    render () {


        return (
          <div className="container">
            <div className="row">
              <div className='col-1'>
                <h4><span className={this.getBadgeClasses()}>{this.formatCount()}</span></h4>
              </div> 
              <div className="col">
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-md">+</button>   
                <button onClick={() => this.props.onDecrement(this.props.counter)} className={this.disableBtn()}>-</button>   
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-md m-2">x</button> 
              </div>
            </div>
                   
          </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2  badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    disableBtn() {
      let classes = "btn btn-secondary btn-md m-2";
      const {value} = this.props.counter;
      return value > 0 ? classes : classes + " disabled";
    }
}

export default Counter;