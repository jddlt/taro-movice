import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import './Swiper.css'


export default class MySwiper extends Component {
    render() {
        return (
            <Swiper
                indicatorDots
                autoplay
                interval="2000"
                circular
                className="swiper"
            >
                <SwiperItem className="swiperItem">
                    <Image
                        src="https://manhua.qpic.cn/operation/0/30_09_43_a465563741fb10ae97db13f10d701f1c_1543542233109.jpg/0"
                        style="width: 100%"
                    ></Image>
                </SwiperItem>
                <SwiperItem className="swiperItem">
                    <Image
                        src="https://manhua.qpic.cn/operation/0/29_00_06_310bc42df914f1bfe5390a4d18006020_1546013201210.jpg/0"
                        style="width: 100%"
                    ></Image>
                </SwiperItem>
                <SwiperItem className="swiperItem">
                    <Image
                        src="https://manhua.qpic.cn/operation/0/29_00_07_76570b52f307205681df622227a84c73_1546013223032.jpg/0"
                        style="width: 100%"
                    ></Image>
                </SwiperItem>
                <SwiperItem className="swiperItem">
                    <Image
                        src="https://manhua.qpic.cn/operation/0/29_00_07_ecbe5da5d6114788a89741efafd20d41_1546013256770.jpg/0"
                        style="width: 100%"
                    ></Image>
                </SwiperItem>
            </Swiper>
        )
    }
}