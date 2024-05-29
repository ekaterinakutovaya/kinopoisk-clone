import { Input } from "@/components/ui/input.tsx";
import { IoSearch } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { useEffect, useState } from "react";
import axios from "axios";
import { Suggest } from "@/components/Suggest.tsx";

export const SearchInput = () => {
  const [results, setResults] = useState([]);
  const [showSuggest, setShowSuggest] = useState(false);

  useEffect(() => {
    if (showSuggest) {
      axios
        .get(
          `${import.meta.env.VITE_API_URL}/v1.4/movie?page=1&limit=10&rating.kp=7-10`,
          {
            headers: {
              "X-API-KEY": import.meta.env.VITE_X_API_KEY,
            },
          },
        )
        .then((response) => {
          setResults(response.data.docs);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, [showSuggest]);

  const handleChange = () => {
    // setQuery(event.target.value);
  };

  const handleFocus = () => {
    setShowSuggest(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggest(false), 100);
  };

  return (
    <>
      <div className="w-full h-[34px] lg:w-[380px] max-w-[380px] relative">
        <Input
          placeholder="Фильмы, сериалы, персоны"
          className="w-full h-full"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="absolute inset-y-0 right-[5px] flex items-center gap-2">
          <VscSettings className="w-[20px] h-[20px] text-[#c1bab8]" />
          <IoSearch className="w-[20px] h-[20px] text-[#c1bab8]" />
        </div>

        {showSuggest && <Suggest data={results} />}
      </div>
    </>
  );
};
