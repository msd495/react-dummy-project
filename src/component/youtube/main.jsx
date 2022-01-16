import React, {useEffect, useState} from "react";
import Search from "./Search";
import Grid from "@mui/material/Grid";
import Video from "./Video";
import Container from '@mui/material/Container';
import SelectedListItem from "./Suggestions";
import Youtube from 'simple-youtube-api';
import config from "./config";
import {IconButton, TextField} from "@material-ui/core";
import {SearchOutlined} from "@material-ui/icons";


const youTube = new Youtube(config.apiKey);

//In react performace ,we need to take care of re-renders.re-rendering happens when either of these three changes
//When parent changes ,child re-renders.
//when props changes ,component re-renders.
//when state changes ,component re-renders.
//we need to manage these three things effectively.
//In beginning every one of them will be rendered.
//Dont use it ,unless you are hit with performance issue.

const YoutubeClone = ()=>{
    const [videoList,setVideoList] = useState([]);
    const [searchVal,setSearchVal] = useState("react");
    const [currentVideo,setCurrentVideo] =  useState({});
    console.log("parent rendering");
    console.log("searched value is "+searchVal);

    useEffect(()=>{
        let timer;
        if (searchVal.length>3){
            timer = setTimeout(()=>
            {
                callApi();
            },3000)
        }
        return ()=>{
            clearTimeout(timer);
        } //unmounting it
    },[searchVal])

    const callApi = async ()=>{
        console.log("making api call");
        const result = await youTube.search(searchVal,5);
        setVideoList(result);
        setCurrentVideo(result[0])
    }

    return(
            <Container  fixed>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12} >
                        <Search setSearchVal={setSearchVal}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={8} >
                        <Video details={currentVideo}/>
                    </Grid>
                    <Grid  item xs={12} md={12} lg={4} >
                        <SelectedListItem videoList={videoList} currentVideo={currentVideo} setCurrentVideo={setCurrentVideo}/>
                    </Grid>

                </Grid>
            </Container>
        )
}

export default YoutubeClone;