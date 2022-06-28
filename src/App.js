import './App.css';
import React, { useEffect, useState } from 'react'
import TMDB from './Tmdb'
import MovieRow from './components/movieRow'
import FeaturedMovie from './components/featuredMovie'
import Header from './components/header';

function App() {

  const [movieList, setmovieList] = useState([])
  const [featureData ,setFeaturedData] = useState(null)
  const [showNavBar, setShowNavBar] = useState(false)

  useEffect(()=>{
    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      setmovieList(list)

      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))      
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await TMDB.getMovieInf(chosen.id, 'tv')
      setFeaturedData(chosenInfo)    
    }

    loadAll()
  }, []);


  useEffect(()=>{
    const scrolListner = () => {

      if(window.scrollY > 100){
        setShowNavBar(true);
      }else{
        setShowNavBar(false)
      }
    }

    window.addEventListener("scroll" , scrolListner);
        
    return () => {
      window.removeEventListener("scroll" , scrolListner);
    }
  }, [])
  

  return (
    <div className="page">

      <Header black={showNavBar}/>

      {featureData &&
        <FeaturedMovie item={featureData}/>
      }

      <section className='Lists'>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Feito com <span role='img' arial-label="coraçao">❤️</span> pelo Gabriel
        <br/>
        Direitos de imagens para Netflix
        <br/>
        Dados pegos no site themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif'/>
        </div>
      }
    </div>
  );
}

export default App;
