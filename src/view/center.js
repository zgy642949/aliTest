import React, { Component } from 'react'
import './css/center.scss'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="alicenter">
      <div className="mask">
        <div className="mid-box">
          <div className="content">
            <p>If not now, when?</p>
            <p>If not me, who?</p>
            <p className = 'isNow'>此时此刻，非我莫属！</p>
            <div className="searchBox">
              <input type="text"/>
              <span>请输入职位关键信息</span>
              <button>搜索</button>
            </div>
            <div className="hotText">
              热门搜索 :&nbsp;&nbsp;
              <a href="#">JAVA</a>
              <a href="#">IOS</a>
                <a href="#">数据</a>  
                <a href="#">安全</a>  
                <a href="#">搜索</a>  
                <a href="#">算法</a>  
                <a href="#">运营</a>  
                <a href="#">视觉</a>  
                <a href="#">交互</a>  
                <a href="#">前端</a> 
            </div>
          </div>
        </div>
        </div>
      </div> );
  }
}
 
export default index;