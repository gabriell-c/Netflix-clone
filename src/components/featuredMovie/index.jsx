import React from 'react'
import './style.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
export default function featuredMovie({item}) {

  let firstDtate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push( item.genres[i].name)
  }

  return (
    <section className="fetuire"style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className='fiture--vertical'>
        <div className='fiture--horizontal'>
          <div className="fiture--name">{item.name}</div>
          <div className="fiture--info">
            <div className="fiture--points">{item.vote_average.toFixed(1)} points</div>
            <div className="fiture--year">{firstDtate.getFullYear()}</div>
            <div className="fiture--temp">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>
          <div className="fiture--desc">
          {item.overview.length <= 300 ? item.overview : item.overview.substring(0, 250)+'...'}
          </div>
          <div className="fiture--btns">
            <a className='btn1' href={`/watch/${item.id}`}><PlayArrowIcon /> Assistir</a>
            <a className='btn2' href={`/list/add/${item.id}`}><AddIcon /> Minha Lista</a>
          </div>
          <div className="fiture--geners"><strong>Genêros: </strong>{genres.join(', ')}</div>
        </div>
      </div>
    </section>
  )
}
