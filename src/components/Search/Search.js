import Taro, { Component } from '@tarojs/taro';
import { View, Text, Icon, Input} from '@tarojs/components';
import './Search.css'
import './../../static/css/iconfont.css'


export default class Search extends Component {
    setDisplay(){
      this.props.onSetDisplay(true)
    }
    render() {
        return (
            <View className="search">
            <View className="ser-hed">
              <View className="ser-hed-left">
                <View className="ser-hed-left-l">
                <Icon 
                  className="iconfont icon-artboard9"
                  style="width: 30px; height: 30px; font-size: 23px; line-height: 32px"
                  ></Icon></View>
                <View className="ser-hed-left-r">
                  <Input type="Text" placeholder="请输入动漫名称..." className="input"></Input></View>
              </View>
              <View className="ser-hed-right">
                <Text style="line-height: 31px;" onClick={this.setDisplay.bind(this)}>取消</Text>
              </View>
            </View>
          <View className="ser-hot">
              <View className="ser-hot-title">
                <Text>大家都在搜</Text>
              </View>
              <View className="ser-hot-content">
                <View className="ul">
                  <Text className="li">改革春风吹满地</Text>
                  <Text className="li">EXO</Text>
                  <Text className="li">六小龄童</Text>
                  <Text className="li">生僻字</Text>
                  <Text className="li">东北插班生</Text>
                  <Text className="li">蔡依林</Text>
                  <Text className="li">郭德纲</Text>
                  <Text className="li">徐老师来巡山</Text>
                </View>
              </View>
          </View>
          <View className="ser-history">
            <View className="ser-history-title">
              <Text className="p">搜索记录</Text>
            </View>
            <View className="ser-history-content">
              <View className="ul2">
                <View className="li2">徐老师来巡山</View>
                <View className="li2">改革春风吹满地</View>
                <View className="li2">生僻字</View>
                <View className="li2">东北插班生</View>
              </View>
            </View>
            <View className="ser-history-foot">
              <Text>清除搜索记录</Text>
            </View>
          </View>
        </View>
        )
    }
}