import React, { Component } from 'react'
import axios from 'axios'
import './css/newPosition.scss'
import ScrollData from './scrollData'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[
        {
            "workLocation": "杭州",
            "applyTimeDesc": "9分钟前",
            "name": "C2M-品质管理专家"
        },
        {
            "workLocation": "杭州",
            "applyTimeDesc": "9分钟前",
            "name": "菜鸟-资深算法工程师/算法专家-数据团队"
        },
        {

            "workLocation": "杭州",
            "applyTimeDesc": "9分钟前",
            "name": "阿里云智能事业群-高级产品专家-安防-IoT （杭州/上海/北京）"
        },
        {
            "workLocation": "北京",
            "applyTimeDesc": "9分钟前",
            "name": "阿里集团-招聘专家-北京"
        },
        {
            "workLocation": "杭州",
            "applyTimeDesc": "9分钟前",
            "name": "阿里云智能事业群-网络运维专家-基础设施领域"
        },
        {
            "workLocation": "杭州",
            "applyTimeDesc": "9分钟前",
            "name": "业务平台事业部-数据服务-算法专家-杭州"
        },
        {
            "workLocation": "杭州",
            "applyTimeDesc": "29分钟前",
            "name": "蚂蚁集团-共享智能平台技术专家-杭州"
        },
        {
            
            "workLocation": "杭州",
            "applyTimeDesc": "39分钟前",
            "name": "B2B风控-催收运营经理（杭州）"
        },
        {
            "workLocation": "杭州",
            "applyTimeDesc": "39分钟前",
            "name": "C2M-渠道商品运营高级专家-价格管理"
        },
        {
            "workLocation": "深圳",
            "applyTimeDesc": "39分钟前",
            "name": "B2B风控-催收运营经理（深圳）"
        },
        {
            "workLocation": "列日",
            "applyTimeDesc": "39分钟前",
            "name": "菜鸟-Operations Manager, Cargo Services"
        },
        {
            "workLocation": "杭州",
            "applyTimeDesc": "39分钟前",
            "name": "达摩院人机自然交互实验室-Java服务端技术专家-杭州"
        },
        {
            "workLocation": "杭州",
            "applyTimeDesc": "39分钟前",
            "name": "集团公共事务部-数据分析专家-杭州"
        },
        {
            
            "workLocation": "深圳",
            "applyTimeDesc": "39分钟前",
            "name": "AliExpress-高级开发工程师 / 技术专家-社交互动（深圳）"
        },
        {
            "workLocation": "杭州",
            "applyTimeDesc": "39分钟前",
            "name": "钉钉(DingTalk)-开发者运营专家-开放平台与商业化"
        },
        {
            "workLocation": "广州",
            "applyTimeDesc": "39分钟前",
            "name": "大文娱互动娱乐事业部-资深用户运营专员-印尼市场"
        },
        {
            "workLocation": "广州",
            "applyTimeDesc": "39分钟前",
            "name": "大文娱互动娱乐事业部-资深用户运营专员-巴西市场"
        },
        {
            "workLocation": "上海",

            "applyTimeDesc": "1小时前",
            "name": "阿里体育-客户服务运营"
        },
        {
            "workLocation": "杭州",

            "applyTimeDesc": "1小时前",

            "name": "C2M-渠道商品运营高级专家-品类规划"
        },
        {
            "workLocation": "北京",

            "applyTimeDesc": "1小时前",
            "name": "创新事业群融媒体发展事业部-数据分析师-LQ"
        }
    ]
     }
  }
  // componentDidMount() {
  //   this.getData()
  // }
//   getData(){
//     axios.get('/myapi/zhaopin/latestPosition/doLatestPosition.json', {
//         }).then(response=>{
//             console.log(response.data.returnValue)
//             this.setState({
//                 list:response.data.returnValue
//             })
//     })
// }
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