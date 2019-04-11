import Taro, { Component } from '@tarojs/taro';
import { View, Image, Icon} from '@tarojs/components';
import './Nav.css'
import './../../static/css/iconfont.css'


export default class Nav extends Component {
    SetDis(){
        this.props.onSetDis(false)
    }
    render() {
        return (
            <View className="homeNav">
                <Image 
                    src="https://weapp-1253522117.image.myqcloud.com//image/20190411/0385d73ba18551a4.png" 
                    style="width: 100px; height: 30px;"
                ></Image>
                <Icon 
                    className="iconfont icon-search"
                    size='30px'
                    style="width: 30px; height: 30px; color: #f10b99; font-size: 28px; float: right; margin-right: 5px"
                    onClick={this.SetDis.bind(this)}
                ></Icon>
            </View>
        )
    }
}