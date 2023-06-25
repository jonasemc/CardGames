import Card from "../Card/Card.tsx";
import { getGames } from "../../services/getGames.ts";
import { useQuery } from "react-query";
import { GameTypes } from "../../types/GameTypes.ts";
import { useState } from "react";
import Loading from "../Loading/Loading.tsx";
import { FiSearch } from "react-icons/fi";
import "./CardList.css";

const CardList: React.FC = () => {
  const [search, setSearch] = useState("");

  const { data: query, isLoading } = useQuery("get-games", getGames, {
    retry: false,
  });

  const filteredQuery =
    search.length > 0
      ? query?.filter((game: GameTypes) =>
          game.title?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : [];

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      {Array.isArray(query) ? (
        <div className="container">
          <div className="search_input">
            <FiSearch color="#aaaaaa" size={20} />
            <input
              name="search"
              type="text"
              placeholder="Pesquise jogos e veja informações sobre eles"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <div className="list-cards_container">
            {search.length > 0
              ? filteredQuery.map((game: GameTypes) => (
                  <Card
                    title={game.title}
                    genre={game.genre}
                    thumbnail={game.thumbnail}
                    short_description={game.short_description}
                    key={game.id}
                  />
                ))
              : query.map((game: GameTypes) => (
                  <Card
                    title={game.title}
                    genre={game.genre}
                    thumbnail={game.thumbnail}
                    short_description={game.short_description}
                    key={game.id}
                  />
                ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default CardList;
