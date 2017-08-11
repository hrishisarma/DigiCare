import React,{ Component } from 'react';
import ReactPlayer from 'react-player';
import {ProgressBar} from 'react-player-controls';
import {SoundOnButton} from 'react-player-controls';

class VideoDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = { isLoaded : false, isEnabled : true}
    }


    componentDidMount(){
        this.setState({ isLoaded : false});
    }

    onVideoEndedNow(){
        this.props.dugi();
    }

    render() {
        var isVideoSelected = this.props.videodetail == null ? false : true;


        if(!isVideoSelected ){
            return (
                <div> Loading ...... </div>
            );
        }else{
            const videoId = isVideoSelected ? this.props.videodetail.id.videoId : 0;
            const  url = `https://www.youtube.com/embed/${videoId}?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1`;
            //   <iframe onStateChange={() => this.onVideoEnded()} className="embed-responsive-item"  src={url}></iframe>
            return (
                <div className="video-detail col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <ReactPlayer onEnded={() => this.onVideoEndedNow() } url={url}  playing  />
                        <SoundOnButton
                            isEnabled={this.state.isEnabled}
                            onClick={() => alert('Turn off sound')}
                        />
                    </div>

                </div>
            );
        }


    }
}

export default VideoDetail;