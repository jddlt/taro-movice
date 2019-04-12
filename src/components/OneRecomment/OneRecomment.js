import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text} from '@tarojs/components'


export default class OneRecomment extends Component{
    render(){
        return(
            <View class="home-one-recomment">
            <View class="home-one-recomment-title">
              <Text class="home-one-recomment-title-left">每日一推</Text>
            </View>
            <View class="home-one-recomment-photo">
              <Image className="img" src="https://manhua.qpic.cn/operation/0/12_21_47_fb128483361b6c3de7a96b56411d0573_1534081656643.jpg/0"
                   alt="每日一推"
                   ></Image>
            </View>
          </View>
        )
    }
}