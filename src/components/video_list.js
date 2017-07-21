import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props)=> {
    if(props.vd != null){
        const videoItems = props.vd.map((vi) =>{
        return(
            <VideoListItem
                onVidSelect = {props.onVideoSelect}
                key={vi.etag}
                vid ={vi}/>
        )
    });

    return (
        <ul className="col-md-1 list-group">
            {videoItems}
        </ul>


    );

    }
    else{
        return(
            <div>Loading..</div>
        )
    }



};

export default VideoList;