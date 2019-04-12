import Taro, { Component } from '@tarojs/taro';
import { View, Image, Icon , Text} from '@tarojs/components';
import './VedioList.css'
import './../../static/css/iconfont.css'


export default class Nav extends Component {
    SetDis(){
        this.props.onSetDis(false)
    }
    render() {
        return (
            <View class="home-recomment">
                <View class="home-recomment-title">
                    <Text class="home-recomment-title-left">热门动漫</Text>
                    <Icon 
                        class="home-recomment-title-right iconfont icon-gengduo"
                        style="width: 11px; height: 6px; font-size: 21px;"
                    ></Icon>
                </View>
                <View class="home-recomment-vedio">
                    <View className="div">
                        <Image className="img" src="https://manhua.qpic.cn/vertical/0/14_14_39_a8416912650dcf09b8d878b46f618f8a_1534228745125.jpg/210" alt=""></Image>
                        <Text className="strong">国民男神缠上身</Text>
                        <Text className="small">被同事设计，她闯进总</Text>
                    </View>
                    <View className="div">
                        <Image className="img" src="https://manhua.qpic.cn/vertical/0/20_14_39_65a6450080c8e6fae1b0d73fa9407173_1524206343261.jpg/210" alt=""></Image>
                        <Text className="strong">很纯很暧昧</Text>
                        <Text className="small">神奇眼镜拯救我</Text>
                    </View>
                    <View className="div">
                        <Image className="img" src="https://manhua.qpic.cn/vertical/0/05_11_26_a16323c6fc5c6da08740807cc8da9e8e_1515122804814.jpg/210" alt=""></Image>
                        <Text className="strong">天才高手</Text>
                        <Text className="small">史上最纨绔皇后</Text>
                    </View>
                    <View className="div">
                        <Image className="img" src="https://manhua.qpic.cn/vertical/0/12_13_52_12d7ae596f777285eb1a9f3f169e8a63_1544593971942.jpg/210" alt=""></Image>
                        <Text className="strong">凤勾情：弃后独步天下</Text>
                        <Text className="small">【每周双更】傲娇女总</Text>
                    </View>
                    <View className="div">
                        <Image className="img" src="https://manhua.qpic.cn/vertical/0/14_17_26_0c654f6618fa303de5e952ffba605c21_1528968392099.jpg/210" alt=""></Image>
                        <Text className="strong">王的宠妃</Text>
                        <Text className="small">【每周三、周六更新】</Text>
                    </View>
                    <View className="div">
                        <Image className="img" src="https://manhua.qpic.cn/vertical/0/04_10_15_9ef3ce14149cf1ad78d8b27cc48116d2_1522808131439.jpg/210" alt=""></Image>
                        <Text className="strong">亿万总裁缠上我：天价婚约</Text>
                        <Text className="small">醉酒失身，亲人离世</Text>
                    </View>
                </View>
            </View>
        )
    }
}