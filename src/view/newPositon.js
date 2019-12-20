import React, { Component } from 'react'
import axios from 'axios'
import './css/newPosition.scss'
import ScrollData from './scrollData'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[]
     }
  }
  componentDidMount() {
    this.getData()
  }
  getData(){
    axios.get('https://job.alibaba.com/zhaopin/latestPosition/doLatestPosition.json', {
        }).then(response=>{
            console.log(response.data.returnValue)
            this.setState({
                list:response.data.returnValue
            })
    })
}
  render() { 
    return ( <div className="newPositon">
      <div className="content">
        <div className="left">
          <ScrollData headText = '最新职位' data = {this.state.list}></ScrollData>
        </div>
        <div className="right">
          <div className="aliYun">
            <img src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png" alt=""/>
          </div>
          <div className="Ehr">
            <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt=""/>
          </div>
        </div>
      </div>
    </div> );
  }
}
 
export default index;