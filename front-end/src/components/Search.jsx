import React from 'react';
import {Link} from "react-router-dom";
import {Style} from "../Style.js";

const Search = () => {
   return (
       <div className={`${Style.paddingX} ${Style.maximum}`}>
          <Link to="/">
             back
          </Link><br/>
          hi search!!
       </div>
   );
};

export default Search;