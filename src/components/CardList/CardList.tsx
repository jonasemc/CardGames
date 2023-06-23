import Card from "../Card/Card.tsx";
import { getGames } from "../../services/getGames.ts";
import { useQuery } from "react-query";
import { GameTypes } from "../../types/GameTypes.ts";
import "./CardList.css";
import { useState } from "react";

const CardList: React.FC = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  const { data: query, isLoading } = useQuery({
    queryKey: ["get-games", { title, genre }],
    queryFn: getGames,
  });

  //const filteredQuery = query && query.filter((game) => {});

  if (isLoading) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <div className="container">
        <div className="search_input">
          <input type="text" />
        </div>
        <div className="list-cards_container">
          {query.map((game: GameTypes) => (
            <Card
              title={game.title}
              genre={game.genre}
              thumbnail={game.thumbnail}
              key={game.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
