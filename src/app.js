import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/type/type',
      'pages/play/play',
      'pages/talk/talk',
      'pages/mine/mine'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './static/images/icon_home.png',
          selectedIconPath: './static/images/icon_home_selected.png'
        },
        {
          pagePath: 'pages/type/type',
          text: '分类',
          iconPath: './static/images/icon_intro.png',
          selectedIconPath: './static/images/icon_intro_selected.png'
        },
        {
          pagePath: 'pages/play/play',
          text: '播放',
          iconPath: './static/images/icon_search.png',
          selectedIconPath: './static/images/icon_search_selected.png'
        },
        {
          pagePath: 'pages/talk/talk',
          text: '社区',
          iconPath: './static/images/icon_chat.png',
          selectedIconPath: './static/images/icon_chat_selected.png'
        },
        {
          pagePath: 'pages/mine/mine',
          text: '我的',
          iconPath: './static/images/icon_mine.png',
          selectedIconPath: './static/images/icon_mine_selected.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <div className="index">
        <Index />
      </div>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
