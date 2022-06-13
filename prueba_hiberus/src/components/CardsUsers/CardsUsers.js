import { Link } from 'react-router-dom';

export const CardsUsers = ({ name, surname, idUser }) => {
  return (
    <article>
      <h1>{name}</h1>
      <h2>{surname}</h2>
      <button>
        <Link to={`/other-user/${idUser}`}>VER</Link>
      </button>
    </article>
  );
};
