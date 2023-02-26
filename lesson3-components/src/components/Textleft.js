import React from "react";
import { Check } from "@mui/icons-material";
import './Left.css';


export default function Textleft () {
    return (
        <div>
            <div> <h3 className='title'>Benefits of being a member</h3></div>
            <div className='itemleft'>
          <div className='textleft'><Check></Check>Find something to watch on your subcribed streaming sevices.</div>
          <div className='textleft'><Check></Check>Log the movies and TV shows you have watched.</div>
          <div className='textleft'><Check></Check>Keep track of your favourite movies and TV shows and get recommendatiions from them.</div>
          <div className='textleft'><Check></Check>Build and maintain a personal watchlist.</div>
          <div className='textleft'><Check></Check>Build custom mixed lists (movies and TV).</div>
          <div className='textleft'><Check></Check>Take part in movies and TV dicussions.</div>
          <div className='textleft'><Check></Check>Contribute to, and improve the information in our database.</div>
        </div>
        </div>
    )
}