import React from 'react';

import './app.less';
import 'font-awesome/css/font-awesome.min.css';
import '../src/css/base.less';
import '../src/css/practice.css';
import imgSrc from "./carbon.png";
import banner from "../src/images/banner.png";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container" style={{ background: 'white', height: 1000, borderRadius: 10 }}>
                <div style={{}}>
                    <div className="content-col-12">
                        <img className="banner-pic" src={banner} />
                    </div>
                    <div className="content-col-12 p-vertical--medium gallery">
                        <span className="content-col-2 m-horizontal--small m-vertical--small gallery-pic gallery-pic-berlin">dsd</span>
                        <span className="content-col-2 m-horizontal--small m-vertical--small gallery-pic gallery-pic-berlin">erw</span>
                        <span className="content-col-2 m-horizontal--small m-vertical--small gallery-pic gallery-pic-berlin">we</span>
                        <span className="content-col-2 m-horizontal--small m-vertical--small gallery-pic gallery-pic-berlin">wer</span>
                    </div>
                    <div className="content-col-12">
                        <div className="content-col-6">
                            <div className="content-col-12">
                                <span />
                                <span>the Big Apple</span>
                                <span>New York</span>
                            </div>
                            <div className="content-col-12">
                                <span>pic</span>
                                <span>profile pic</span>
                                <span>information</span>
                            </div>
                        </div>
                        <div className="content-col-6">
                            <div id="info" className="content-col-8">
                                <span className="content-col-12">*****</span>
                                <span id="hide" className="content-col-12">My first day at school My mother accompanied me to school on the first day. Other parents accompanied their children as well. We all waited in front of the school office.
                  Soon a teacher came and led us to some classrooms. There we were put into four separate classes. This was when some children began to cry as the parents were not allowed into the classrooms. I did not cry because I had been to kindergarten before. Actually my mother went home soon after for she knew I would be all right.</span>
                                <div className="content-col-12">
                                    <span className="content-col-6">location</span>
                                    <span className="content-col-3">like</span>
                                    <span className="content-col-3">commit</span>
                                </div>
                            </div>
                            <div className="content-col-4">
                                dfsdfs
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
