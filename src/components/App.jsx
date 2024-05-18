import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("pages/HomePage/HomePage"));
const Movies = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MoviesDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const NavigationBar = lazy(() => import("./SharedLayout/SharedLayout"));
const Spinner = lazy(() => import("./Spinner/Spinner"));

export const App = () => {
  return (
    <main>
      <NavigationBar />
      <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" end element={<Home/>}/>
        <Route path="/movies" element = {<Movies/>} />
        <Route path="/movies/:movieId" element = {<MoviesDetails/>}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Suspense>
    </main>
  );
};