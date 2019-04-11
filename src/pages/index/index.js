import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

// 组件
import MySwiper from './../../components/Swiper/Swiper'
import Nav from './../../components/Nav/Nav'
import Search from './../../components/Search/Search'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(){
    super();
    this.state = {
      display: true
    };
    this.setDisplay = this.setDisplay.bind(this);
  }
  setDisplay(res){
    console.log('res: ', res);
    this.setState({
      display: res
    })
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Nav onSetDis={this.setDisplay}></Nav>
        <MySwiper></MySwiper>
        <Search style={this.state.display ? 'display: none' : 'display: block'} onSetDisplay={this.setDisplay}></Search>
      </View>
    )
  }
}

