import React, {useState,useEffect} from "react";
import uuid from 'uuid/v1'
import NewSongForm from "./NewSongForm";

const SongList = () => {

    // Using array destructuring with the square brackets
    // setSongs is a function
    const [songs,setSongs] = useState([
        {title:'Almost home', id:1},
        {title:'Memory gospel', id:3},
        {title:'This Wild Darkness', id:2}
    ])

    const [age,setAge] = useState(20)

    const addSong = (title) =>{
        setSongs([...songs,{ title, id: uuid() }])
    }

    // like the render method, this hook runs whenever the components renders
    useEffect(()=>{
      console.log('useEffect hook running for ', songs);
    },[songs])
    // this hook will run now only when the data of the songs list changes and not when the age is changed

    // The useState hook returns the songs array and a function to modify the state

    useEffect(()=>{
      console.log('useEffect hook running',age);
    },[age])

  return (
    <div className="song-list">
      <ul>
        {songs.map(song=>{
            return(<li key={song.id} >{song.title}</li>)
        })}
      </ul>
      {/* <button onClick={addSong}>Add new Song</button> */}
      <NewSongForm addSong={addSong} />
      <button onClick={()=>setAge(age+1)} >Add {age} by 1</button>
    </div>
  );
};

export default SongList;
