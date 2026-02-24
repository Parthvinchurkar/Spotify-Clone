import { createSlice } from "@reduxjs/toolkit";

// AUDIO IMPORTS
import abhinajao from "../../assets/audio/abhinajao.mp3";
import chharkadam from "../../assets/audio/chharkadam.mp3";
import dildiyangallah from "../../assets/audio/dildiyangallah.mp3";
import harhargange from "../../assets/audio/harhargange.mp3";
import ishqjalakardhurandhar from "../../assets/audio/ishqjalakardhurandhar.mp3";
import kesariya from "../../assets/audio/kesariya.mp3";
import mastmagan from "../../assets/audio/mastmagan.mp3";
import shararatdhurandhar from "../../assets/audio/shararatdhurandhar.mp3";
import titletrackdhurandhar from "../../assets/audio/titletrackdhurandhar.mp3";

// IMAGE IMPORTS
// IMAGE IMPORTS
import abhinajaoImg from "../../assets/images/abhinajao.jpg";
import chharkadamImg from "../../assets/images/chharkadam.jpg";
import dildiyangallahImg from "../../assets/images/dildiyangallah.jpg";
import harhargangeImg from "../../assets/images/harhargange.jpg";
import ishqjalakardhurandharImg from "../../assets/images/ishqjalakardhurandhar.jpg";
import kesariyaImg from "../../assets/images/kesariya.jpg";
import mastmaganImg from "../../assets/images/mastmagan.jpg";
import shararatdhurandharImg from "../../assets/images/shararatdhurandhar.jpg";
import titletrackdhurandharImg from "../../assets/images/titletrackdhurandhar.jpg";

const initialState = {
  songs: [
    {
      id: 1,
      title: "Abhi Na Jao",
      artist: "Mohammed Rafi",
      cover: abhinajaoImg,
      audio: abhinajao,
    },
    
    {
      id: 3,
      title: "Char Kadam",
      artist: "Shaan & Shreya",
      cover: chharkadamImg,
      audio: chharkadam,
    },
    {
      id: 4,
      title: "Dil Diyan Gallan",
      artist: "Atif Aslam",
      cover: dildiyangallahImg,
      audio: dildiyangallah,
    },
    {
      id: 5,
      title: "Har Har Gange",
      artist: "Arijit Singh",
      cover: harhargangeImg,
      audio: harhargange,
    },
    {
      id: 6,
      title: "Ishq Jala Kar",
      artist: "Dhurandhar",
      cover: ishqjalakardhurandharImg,
      audio: ishqjalakardhurandhar,
    },
    {
      id: 7,
      title: "Kesariya",
      artist: "Arijit Singh",
      cover: kesariyaImg,
      audio: kesariya,
    },
    {
      id: 8,
      title: "Mast Magan",
      artist: "Arijit Singh",
      cover: mastmaganImg,
      audio: mastmagan,
    },
    {
      id: 9,
      title: "Shararat",
      artist: "Dhurandhar",
      cover: shararatdhurandharImg,
      audio: shararatdhurandhar,
    },
    {
      id: 10,
      title: "Title Track",
      artist: "Dhurandhar",
      cover: titletrackdhurandharImg,
      audio: titletrackdhurandhar,
    },
  ],
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
});

export default songsSlice.reducer;