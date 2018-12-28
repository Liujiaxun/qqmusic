import React,{Component} from 'react';
import { Route,NavLink } from 'react-router-dom'
import Selection from './selection'

class MusicHall extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        console.log(this.props);
    }
    render(){
        return (
            <div>
                <div className="leveTwoRouter">
                    <nav>
                        <div><NavLink activeClassName="activeClassNameTwo" to={`${this.props.match.url}/selection`}>精选</NavLink> </div>
                        <div><NavLink activeClassName="activeClassNameTwo" to={`${this.props.match.url}/products`}>排行</NavLink></div>
                        <div><NavLink activeClassName="activeClassNameTwo" to={`${this.props.match.url}/songlist`}>歌单</NavLink></div>
                        <div><NavLink activeClassName="activeClassNameTwo" to={`${this.props.match.url}/dt`}>电台</NavLink></div>
                        <div><NavLink activeClassName="activeClassNameTwo" to={`${this.props.match.url}/mv`}>MV</NavLink></div>
                    </nav>
                </div>
                <div className="two-main">
                    <Route path={`${this.props.match.path}/selection`} component={Selection} />
                    <Route path={`${this.props.match.path}/products`} component={()=>(<h2>products</h2>)} />
                    <Route path={`${this.props.match.path}/songlist`} component={()=>(<h2>songlist</h2>)} />
                    <Route path={`${this.props.match.path}/dt`} component={()=>(<h2>dt</h2>)} />
                    <Route path={`${this.props.match.path}/mv`} component={()=>(<h2>MV</h2>)} />
                </div>
            </div>
        )
    }
}

export default MusicHall;