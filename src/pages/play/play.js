import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './play.css'

// 组件
import MySwiper from '../../components/Swiper/Swiper'
import Nav from '../../components/Nav/Nav'
import Search from '../../components/Search/Search'
import VedioList from '../../components/VedioList/VedioList'
import OneRecomment from '../../components/OneRecomment/OneRecomment'
import NewMovieList from '../../components/NewMovieList/NewMovieList'

export default class Index extends Component {
  // static externalClasses = ['ser-hidden', 'ser-show']
  config = {
    navigationBarTitleText: '播放'
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
        <VedioList></VedioList>
        <OneRecomment></OneRecomment>
        <NewMovieList></NewMovieList>

        <Search style={ this.state.display ? 'display: none' : 'display: block' } onSetDisplay={this.setDisplay}></Search>
      </View>
    )
  }
}

