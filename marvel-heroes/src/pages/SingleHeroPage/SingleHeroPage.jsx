import React, { useContext, useState, useEffect } from "react";
import './SingleHeroPage.scss'
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import md5 from "js-md5";
import Comics from "../../components/Comics/Comics";
import Switch from "../../components/Switch/Switch"

function SingleHeroPage({ PUBLIC_KEY, PRIVATE_KEY }) {
  const [singleHero, setSingleHero] = useState([]);
  const [comics, setComics] = useState([]);
  const [showComics, setShowComics] = useState(false)

  const match = useRouteMatch();
  const singleHeroID = Number(match.params.heroId); // type of (match.params) is string!!!

  useEffect(() => {
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
    fetch(
      `https://gateway.marvel.com/v1/public/characters/${singleHeroID}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
    )
      .then((res) => res.json())
      .then((res) => setSingleHero(res.data.results));

    fetch(
      `https://gateway.marvel.com/v1/public/characters/${singleHeroID}/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
    )
      .then((res) => res.json())
      .then((res) => setComics(res.data.results));
  }, []);

  // console.log(singleHero);
  // console.log(comics);

  return (
    <div className="singleHeroPage container">
      <div className="row justify-content-around">
        <div className="singleHero col-xxl-3 col-xl-4 col-lg-4 col-md-5 col-sm-6">
          <h2>{singleHero[0]?.name}</h2>
          <img
            src={`${singleHero[0]?.thumbnail.path}.${singleHero[0]?.thumbnail.extension}`}
          ></img>
        </div>
        {!!singleHero[0]?.description === true &&<div className="about col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-6">
        <h3>About</h3>
        <div >{singleHero[0]?.description}</div>
        </div>}
        <div className="switchComics">
          <Switch setShowComics = {setShowComics} />
        </div>
        {showComics && 
        <div className="comics row">
          {comics.map((e, i) => (
            <Comics
            title={e.title}
            img={`${e.thumbnail.path}.${e.thumbnail.extension}`}
            key={i}
            />
            ))}
        </div>
          }
      </div>
    </div>
  );
}

export default SingleHeroPage;
