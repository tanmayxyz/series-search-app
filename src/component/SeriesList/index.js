import React from 'react';
import './index.css';
import {Link } from 'react-router-dom';

const SeriesListItem =  ({item}) => {
    console.log(item);
    return (<li> 
    <Link to = {`/series/${item.show.id}`} >
    
    
    {item.show.name}
    </Link>  
    </li>)
}

const SeriesList = (props) =>{
    
    return (
        <div className = "series-list">
            {props.list.map(
                item => {
                   return <SeriesListItem item = {item} key={item.show.id} />
                }
            )}
        </div>
    );
}

export default SeriesList;