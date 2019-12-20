import React, { Component } from 'react'
import './css/scrollData.scss'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      top:49
    }
    this.timer = null;
  }
  
  componentDidMount() {
    this.scrollNow()
  }
  scrollNow=()=>{
    this.timer = setInterval(() => {
      let a = this.state.top - 1;
      this.setState({
        top:a
      })
      if(this.state.top<-(this.props.data.length)*49){
        this.setState({
          top:0
        })
      }
    }, 10);
  }
  render() { 
    var localCounter = 1;
    return ( 
      <div className="scrollData">
          <div className="dataHeader">
            {this.props.headText}
            <a href="#">更多</a>
          </div>
          <ul className="dataContent" style = {{top:this.state.top+'px'}} onMouseEnter = {()=>{clearInterval(this.timer)}} onMouseLeave = {this.scrollNow}> 
            {
              this.props.data.length?this.props.data.concat(this.props.data.slice(0,6)).map(item=>{
                localCounter++;
                return <li key = {localCounter}>
                  <a href="#">{item.name}</a>
                  <em>{item.applyTimeDesc}</em>
                  <span>{item.workLocation}</span>
                </li>
              }):'数据加载中'
            }
          </ul>
      </div>
     );
  }
}
 
export default index;