import { animals } from "@/lib/animals";
import { getIPLocation, getRandomQuote } from "../actions";

export const getIntro = async (animal: string = "dog") => {
  const quote = await getRandomQuote(false);
  const quoteContent = quote.content;
  const quoteAuthor = quote.author;
  const location = await getIPLocation(false);
  const locationCity = location.city.name;
  const animalStr = animals[animal] || "dog";

  return {
    raw: animalStr.concat(
      "\n",
      quoteContent,
      "\n",
      quoteAuthor,
      "\n",
      locationCity
    ),
    jsx: (
      <div className="flex-col text-center w-fit">
        <div className="text-left inline-block">
          <span style={{ whiteSpace: "pre-line" }}>{animalStr}</span>
        </div>
        <div>{quote.content}</div>
        <div> ~ {quote.author}</div>
        <div>I wonder how the weather is in {location.city.name} ...</div>
      </div>
    ),
  };
};
