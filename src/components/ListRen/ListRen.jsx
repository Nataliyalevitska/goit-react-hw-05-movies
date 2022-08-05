import { Link } from "react-router-dom";
import s from "./ListRen.module.css";
import { useLocation } from 'react-router-dom';

const ListRen = ({ movies }) => {
  // const {url} = useRouteMatch()
  const location = useLocation();
  return (
    <>
      {movies && (
        <ul className={s.list}>
          {movies.map((movie) => (
            <li key={movie.id} className={s.item}>
              <Link to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: location,
                },
              }} className={s.link}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default ListRen;