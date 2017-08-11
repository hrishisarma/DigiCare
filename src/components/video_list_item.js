import React from 'react'

const VideoListItem = ({vid, onVidSelect}) =>{
    const imageUrl = vid.snippet.thumbnails.default.url;
    return(
    <div onClick={()=>onVidSelect(vid)} id="thumbs">
            <div className="thumb">
                <img src={imageUrl}/>
            </div>
            </div>
    );
};

export default VideoListItem;
