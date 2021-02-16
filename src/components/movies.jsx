import React, { Component } from 'react';
import Pagination from './common/pagination ';
import MoviesTable from './moviesTable';
import  {toast}  from 'react-toastify';
import { getMovies, deleteMovie } from '../services/movieServices';
import { getGenres } from '../services/genreService';
import { paginate } from '../utils/pagination';
import ListGroup from './common/listGroup';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './common/searchBox';
import 'react-toastify/dist/ReactToastify.css';



class Movies extends Component {
 state = {
  movies: [],
  genres: [],
  searchQuery: "",
  selectedGenre: null,
  pageSize: 4,
  currentPage: 1,
  sortColumn: { path: 'title', order: 'asc' }
 }

 async componentDidMount () {

   const {data} = await getGenres();
  const genres = [{ _id: "", name: "All" }, ...data]

  const {data: movies} = await getMovies();
  this.setState({ movies, genres });

 }

 handleGenreSelect = genre => {
  this.setState({ selectedGenre: genre, searchQuery:"", currentPage: 1 });

 }

 handleSearch = query =>{
  this.setState({searchQuery: query, selectedGenre: null, currentPage: 1});
 }


 handleDelete = async (movie) => {
   const originalMovies = this.state.movies;
  const movies = originalMovies.filter(m => m._id !== movie._id);
  this.setState({ movies });
try{
  await deleteMovie(movie._id);
}
catch(ex){
  if (ex.response && ex.response.status === 400)
    toast('This movie has already been deleted');

    this.setState({movies: originalMovies})
}

 }

 handlePageChange = (page) => {

  this.setState({ currentPage: page });

 }

 handleLike = (movie) => {
  const movies = [...this.state.movies];
  const index = movies.indexOf(movie);
  movies[index] = { ...movies[index] };
  movies[index].liked = !movies[index].liked;

  this.setState({ movies });

 }

 handleSort = sortColumn => {
  this.setState({ sortColumn });

 }

 getPageData = () => {
  const { movies: allMovies, currentPage, pageSize, selectedGenre, sortColumn, searchQuery } = this.state;


  let filtered = allMovies;
  if(searchQuery)
    filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
  else if(selectedGenre && selectedGenre._id)
    filtered= allMovies.filter(m => m.genre._id === selectedGenre._id);

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])


  const movies = paginate(sorted, currentPage, pageSize);

  return { totalCount: filtered.length, data: movies }

 }


 render() {
  const { length: count } = this.state.movies;
  const { currentPage, pageSize, sortColumn,searchQuery } = this.state;
  const {user} = this.props;

  

  const { totalCount, data: movies } = this.getPageData();

  return (
   <div className="row">
    <div className="col-3">
     <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect} />
    </div>
    <div className="col ">
    {user && <Link to="/movies/new" className="btn btn-primary" style={{ marginBottom: 20, marginTop: 10 }}>New Movie</Link>}
     <p> There are {totalCount} movies in the database </p>
     <SearchBox value={searchQuery} onChange={this.handleSearch}/>
     <MoviesTable movies={movies} sortColumn={sortColumn} onLike={this.handleLike} onDelete={this.handleDelete} onSort={this.handleSort} />

     <Pagination itemsCount={totalCount} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
    </div>
   </div>


  );
 }
}

export default Movies;