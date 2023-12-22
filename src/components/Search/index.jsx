import { SearchIcon } from "./SearchIcon";
import "./Search.scss"

export const Search = () => {
  return ( 
    <div className="search">
      <SearchIcon />
      <input type="text" className="search__input" placeholder="Search"/>
    </div>
   );
}