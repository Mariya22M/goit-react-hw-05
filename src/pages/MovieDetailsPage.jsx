import { useLocation, useParams } from "react-router-dom";
import { useHttp } from "../hooks/useHttp";
import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loader";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import { useRef } from "react";

const MovieDetailsPage = () => {
  const { id } = useParams(); // Отримуємо параметр id з URL
  const { data: movie, error, isLoading } = useHttp("details", id); // Використовуємо хук для отримання даних фільму
  const location = useLocation(); // Отримуємо об'єкт location
  const backLink = useRef(location.state ?? "/"); // Зберігаємо попереднє посилання або кореневий шлях

  return (
    <section>
          {error && <Error message={error} />}
          {isLoading && <Loader />} 
      <GoBackBtn link={backLink.current} /> 
      <MovieInfo movie={movie ? movie : {}} /> 
    </section>
  );
};

export default MovieDetailsPage;
