import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const MoviesPage = React.lazy(() => import("./pages/MoviesPage"));
const MovieCast = React.lazy(() => import("./components/Outlet/MovieCast"));
const MovieReviews = React.lazy(() =>
	import("./components/Outlet/MovieReviews")
);
const MovieDetailsPage = React.lazy(() => import("./pages/MovieDetailsPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

export default function App() {
	return (
		<>
			<Navigation></Navigation>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/movies/:id" element={<MovieDetailsPage />}>
						<Route path="cast" element={<MovieCast />}></Route>
						<Route path="reviews" element={<MovieReviews />}></Route>
					</Route>
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</>
	);
}