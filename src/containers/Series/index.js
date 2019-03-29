import React , {Component} from 'react';
import SeriesList from '../../component/SeriesList'
import Loader from '../../component/Loader';
import Intro from '../../component/Intro';


class Series extends Component {
    state = {
        series : [],
        seriesName : "",
        isFetching : false
      }
    

      onSeriesInputChange = e =>{
        this.setState({seriesName : e.target.value,isFetching : true})
        console.log(e);
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
         .then(response =>response.json())
         .then(json => (this.setState({ series: json ,isFetching : false })));
         
      }
      

    render(){
      const {series,seriesName,isFetching} = this.state;
        return (
            <div>
              <Intro message = "here you can find all of your favourite series" />
                
                <div>
                  <input value={seriesName} 
                  type = "text" onChange = {this.onSeriesInputChange} />
                </div>
                {!isFetching && series.length === 0  && seriesName.trim() === '' 
                  &&
                  <p>please enter the series name</p>
              }

              { !isFetching && series.length === 0 && seriesName.trim() !== ''
                &&
                <p>No tv series is found</p>
            }
            {
              isFetching && <Loader />
            }
            {
              !isFetching && <SeriesList list={this.state.series} />
            }
                
                </div>
        );
    }
}

export default Series;