import React,{Component} from 'react'
import Swiper from 'swiper'
import singer from '../../assets/img/singer.svg';
import classifcation from '../../assets/img/classifcation.svg';
import album from '../../assets/img/album.svg';
import 'swiper/dist/css/swiper.min.css'
import './selection.styl'
class Selection extends Component{
    componentDidMount(){
        new Swiper('#swiper',{
            loop: true,
            pagination: {
                el: '.swiper-pagination',
              }
        })
    }
    render(){
        return (
            <div>
                <div className='banner-swiper'>
                    <div className='swiper-container banner-center' id='swiper'>
                        <div className='swiper-wrapper'>
                            <div className="swiper-slide">
                                <img src='https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1112264.jpg?max_age=2592000' alt='' />
                            </div>
                            <div className="swiper-slide">Slide 2</div>
                            <div className="swiper-slide">Slide 3</div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="menu-box">
                    <div className="menu-item">
                        <div className='menu-center'>
                            <img src={singer} alt='-'/>
                        </div> 
                        <p>歌手</p>
                    </div>
                    <div className="menu-item">
                        <div className='menu-center'>
                            <img src={classifcation} alt='-'/>
                        </div> 
                        <p>分类</p>
                    </div>
                    <div className="menu-item">
                        <div className='menu-center'>
                            <img src={album} alt='-'/>
                        </div> 
                        <p>专辑</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Selection;