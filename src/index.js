import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import ButtonDetail from './components/button_diseases';
const API_KEY = 'AIzaSyC3_Af1OKCMZhT1-MOJQngLMeSBOHqdjuU';

// Create a new component. This component should produce some html

class App extends  React.Component{ //const is ES6 syntax. const assigns final value to a variable
    constructor(props) {
        super(props);
        this.state = {videos: [], selectedVideo: null, initialiseRendering: false};
        this.videoSearch('Hepatitis treatment');

    }

    harshit(){

        if(this.state.initialiseRendering){
            var index =   (this.state.videos != null && (this.state.videoIndex == this.state.videos.length-1)) ? 0 : this.state.videoIndex+1;
            this.setState({
                videoIndex : index
            });
            var selectMovie = this.state.videos[index];

            this.setState({selectedVideo: selectMovie});
        }

    }

    videoSearch(term){
        YTSearch(
            {key: API_KEY, term: term, maxResults:7},
            (data) => {
                //console.log(YTSearch.valueOf());
                this.setState({ videoIndex : 0})
                this.setState({videos: data, selectedVideo: data[this.state.videoIndex]});
            }
        );
    }





    componentDidMount(){
        this.setState({initialiseRendering: true});

    }

        render() {

        const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 700);
        return (
            <div>
                <SearchBar onChangeSelect = {videoSearch}/>
                <ButtonDetail onClickSelect ={videoSearch}/>
                <VideoDetail
                    dugi = {this.harshit.bind(this)}
                    videodetail ={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {(sVideo) => this.setState({selectedVideo: sVideo})}
                    vd={this.state.videos}/>

            </div>);
    }
}

//Take this component's generated html and put it in the DOM(on the page)
ReactDom.render(<App/>, document.querySelector('.container'));

