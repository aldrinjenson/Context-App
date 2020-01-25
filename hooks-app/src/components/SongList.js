import React, {useState} from "react";
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

    const addSong = (title) =>{
        setSongs([...songs,{ title, id: uuid() }])
    }

    // The useState hook returns the songs array and a function to modify the state

  return (
    <div className="song-list">
      <ul>
        {songs.map(song=>{
            return(<li key={song.id} >{song.title}</li>)
        })}
      </ul>
      {/* <button onClick={addSong}>Add new Song</button> */}
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
