import React from 'react'

const VideoListItem = ({vid, onVidSelect}) =>{
    const imageUrl = vid.snippet.thumbnails.default.url;
    return(
    <div onClick={()=>onVidSelect(vid)} className="list-group-item">
            <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl}/>
            </div>

        </div>
    </div>
    );
};

export default VideoListItem;
