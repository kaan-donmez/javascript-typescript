import { MESSAGES, QUERIES, STYLES } from "@constants/MultiSelectConstants";
import { Character } from "@interfaces/Character";
import { GET_CHARACTERS, client } from "@services/RickAndMortyQuery";
import { useEffect, useState } from "react";
import Select, { Theme } from "react-select";
import "./MultiSelect.css";
import { InputOption } from "./Option/Option";

const multiSelectTheme = (props: Theme) => ({
  ...props,
  borderRadius: STYLES.BORDER_RADIUS,
  spacing: {
    ...props.spacing,
    menuGutter: STYLES.MENU_GUTTER,
  },
  colors: {
    ...props.colors,
  },
});

//these props for testing purpose
function MultiSelect({ isLoading = true, isError = false }) {
  const [inputValue, setInputValue] = useState<string>("");
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(isLoading);
  const [error, setError] = useState<boolean>(isError);

  useEffect(() => {
    const fetchAllData = async () => {
      let currentPage = QUERIES.PAGE;
      const characters: Character[] = [];
      try {
        while (true) {
          const { loading, data } = await client.query({
            query: GET_CHARACTERS,
            variables: { page: currentPage },
          });
          setLoading(loading);
          characters.push(...data.characters.results);

          if (!data.characters.info.next) {
            break;
          }

          currentPage++;
        }
      } catch (event) {
        setError(true);
      }

      setAllCharacters(characters);
    };

    fetchAllData();
  }, []);

  const options = allCharacters.map((character: Character) => ({
    value: character.id,
    label: character.name,
    image: character.image,
    episode: character.episode.length + MESSAGES.EPISODES,
    inputValue,
  }));

  if (error)
    return (
      <p data-testid="errorMessage" className="message">
        {MESSAGES.ERROR_MESSAGE}
      </p>
    );

  return (
    <div data-testid="multiSelectForm" className="multiSelectForm">
      {loading ? (
        <p data-testid="loadingMessage" className="message">
          {MESSAGES.LOADING_MESSAGE}
        </p>
      ) : (
        <Select
          className="multiSelect"
          components={{ Option: InputOption }}
          noOptionsMessage={() =>
            inputValue === ""
              ? MESSAGES.CHARACTER_LOADING_MESSAGE
              : MESSAGES.NO_OPTIONS_MESSAGE
          }
          placeholder={MESSAGES.MULTI_SELECT_PLACEHOLDER}
          options={options}
          onInputChange={(inputValue) => setInputValue(inputValue)}
          isMulti
          hideSelectedOptions={false}
          closeMenuOnSelect={false}
          theme={(props) => multiSelectTheme(props)}
        />
      )}
    </div>
  );
}

export default MultiSelect;
