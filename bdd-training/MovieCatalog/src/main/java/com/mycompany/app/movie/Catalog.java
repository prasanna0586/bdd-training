package com.mycompany.app.movie;

	import java.util.ArrayList;
import java.util.List;
	
	public class Catalog {
		private List<Movie> store = new ArrayList<>();
	
		public void addMovie(final Movie movie) {
			store.add(movie);
		}
		
		public void addMovies(List<Movie> listOfMovies) {
			this.store = listOfMovies;
		}
		
		public List<Movie> findMovieByKeyword(final String keyword) {
			List<Movie> result = new ArrayList<>();
			
			for (Movie movie : store) {
				if (movie.getTitle().toLowerCase().contains(keyword.toLowerCase())) {
					result.add(movie);
				}
			}
			
			return result;
		}
		
		public int getSize() { 
			return store.size();
		}
		
		public List<Movie> findMovieByOrder(int index) {
			List<Movie> result = new ArrayList<>();
			result.add(store.get(index));
			return result;
		}
		
		public void clearMovies () {
			store.clear();
		}
	}