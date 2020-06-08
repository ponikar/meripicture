import React from 'react'
import { connect } from 'react-redux'


class MovieInfo extends React.Component {
    renderPoster(url) {
        if(url !== "N/A") {
            return( <img alt="Movies Review" src={url} 
            className="poster"  />)
        }
    }
    render() {
        const {data_fetched, not_found } = this.props.movie;
        if(data_fetched) {
            const movie = this.props.movie;
            return(
                <div className="w3-display-middle w3-col l8 m8 s10 w3-card-2 w3-black relative" style={{ marginTop:"225px" }}>
                  <div className="w3-row">
                    <div className="w3-col l4 s10 m4 w3-border w3-border-black relative">
                        { this.renderPoster(movie.Poster) }
                    </div>
                    <section className="w3-col l8 s10 l8 w3-padding relative">
                        <header className="w3-xlarge w3-center">
                           { movie.Title }
                        </header>
                        <div>
                        Released: { movie.Released }
                        </div>
                        <div>
                        Writer: { movie.Writer }
                        </div>
                        <div>
                        Rated: { movie.Rated }
                        </div>
                      <div className="w3-margin-top">
                      <div className="d-flex">
                            <div>
                                Runtime <br /> { movie.Runtime }
                            </div>
                            <div className="pl-1">
                            Director <br /> { movie.Director }
                            </div>
                        </div>
                        <div className="w3-margin-top">
                                Genre: { movie.Genre }
                            </div>
                        <div className="">
                            Actors: { movie.Actors }
                        </div>
                        <div className="d-flex w3-margin-top">
                        <div>
                            Type: { movie.Type }
                        </div>
                        <div className=" pl-2">
                            Country: { movie.Country } 
                        </div>
                        </div>
                        <div className="w3-margin-top">
                            Awards: { movie.Awards }
                        </div>
                        <div className="">
                            Language: { movie.Language }
                        </div>
                        <div className="w3-margin-top">
                        <div> Ratings </div>
                            { this.renderRatings(movie.Ratings) }
                        </div>
                        <div>
                        IMDB VOTES : { movie.imdbVotes  }
                        </div>
                        <article className="w3-col l12 m12 s12  w3-margin-top">
                        <p> Description </p>
                        { movie.Plot }
                        </article>
                      </div>
                    </section>
                  </div>    
                </div>)
        }
        if(not_found) {
            return <p className="w3-text-white  w3-center w3-display-middle" style={{ fontSize:"2.5rem", width:"99%" }}>Not Found</p>;
        }
        return <p className="w3-text-white  w3-center w3-display-middle" style={{ fontSize:"2.5rem", width:"99%" }}>Search about your Favorite movies</p>;
    }
    renderRatings(ratings) {
        return ratings.map(rating => {
            return <div key={rating.Source}> { rating.Source }: { rating.Value } </div>
        })
    }
}


const mapStateToProps = state => {
     return {movie: state.MovieReducers};
}
export default connect(mapStateToProps, null)(MovieInfo);