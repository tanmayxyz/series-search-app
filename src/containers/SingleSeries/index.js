import React , {Component} from 'react';
import Loader from '../../component/Loader';
import 'whatwg-fetch';


class SingleSeries extends Component {

    state = {
        show : null
    }

    componentDidMount(){
        console.log(this.props);
        const {id}= this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
         .then(response =>response.json())
         .then(json => (this.setState({ show : json })));
    }

    render() {
        const {show} = this.state;
        console.log(show);
        return (
            <div>
                {show === null && <Loader />}
                {show !== null && 
                <div>
                    <p>
                        <img alt = "show poster" src = {show.image.medium} />
                    </p>
                    <p>{show.name}</p>
                    <p>show premeried - {show.premiered}</p>
                    <p>Rating - {show.rating.average}</p>
                    <p>episodes - {show._embedded.episodes.length}</p>
                    
                </div>
                }
            </div>
        );
    }
}
export default SingleSeries ;