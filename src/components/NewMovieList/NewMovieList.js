import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import './NewMovieList.css'
import './../../static/css/iconfont.css'


export default class NewMovieList extends Component {
    render() {
        return (
            <View class="home-new">
                <View class="home-recomment-title">
                    <Text class="home-recomment-title-left">热门动漫</Text>
                    <Icon 
                        class="home-recomment-title-right iconfont icon-gengduo"
                        style="width: 11px; height: 6px; font-size: 21px;"
                    ></Icon>
                </View>
                <View class="home-new-photo">
                    <View class="home-new-photo-list">
                        <View class="home-new-photo-list-left">
                            <Image src="https://manhua.qpic.cn/vertical/0/10_15_46_a11b956e3a15baba84c9c60bd1cb73f5_1544427991833.jpg/210"
                                alt="最新更新" className="img"></Image>
                        </View>
                        <View class="home-new-photo-list-right">
                            <View className="h3">快意十三刀</View>
                            <View className="p">作者：月饼</View>
                            <View className="p">更新到96话</View>
                            <Button className="button">播放</Button>
                        </View>
                    </View>
                    <View class="home-new-photo-list">
                        <View class="home-new-photo-list-left">
                            <Image src="https://manhua.qpic.cn/vertical/0/31_16_33_1069f52a9fc1cf96376759e9f59ec4c6_1496219621214.jpg/210"
                                alt="最新更新" className="img"></Image>
                        </View>
                        <View class="home-new-photo-list-right">
                            <View className="h3">颜值恋</View>
                            <View className="p">作者：会火漫画</View>
                            <View className="p">更新到306话</View>
                            <Button className="button">播放</Button>
                        </View>
                    </View>
                    <View class="home-new-photo-list">
                        <View class="home-new-photo-list-left">
                            <Image src="https://manhua.qpic.cn/vertical/0/08_11_26_70333698a38b7f361e3504c981bbba94_1496892374440.jpg/210"
                                alt="最新更新" className="img"></Image>
                        </View>
                        <View class="home-new-photo-list-right">
                            <View className="h3">银之守墓人</View>
                            <View className="p">作者：零盟</View>
                            <View className="p">更新到471话</View>
                            <Button className="button">播放</Button>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}