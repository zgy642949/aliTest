import React, { Component } from 'react'
import './css/header.scss'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="aliheader">
        <div className="head-main">
          <div className="head-left">
            <div className="hl-content">
            <a href="https://job.alibaba.com/zhaopin/index.htm">
              <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt=""/>
            </a>
            <i>|</i>
            <i className = 'social'>社招官网</i>
            <ul>
              <li className = 'active'>首 &nbsp;&nbsp;页</li>
              <li>社会招聘</li>
              <li>校招照片</li>
              <li>了解阿里</li>
              <li>个人中心</li>
            </ul>
            </div>
          </div>
          <div className="head-right">
            欢迎来到阿里巴巴集团招聘！&nbsp;&nbsp;
            <a href="#">登录</a> | <a href="#">注册</a>
          </div>
        </div>
      </div>
     );
  }
}
 
export default index;