
import React from "react";
import BoxCards from "./BoxCards/BoxCards"
import Calendar from "./Calendar/Calendar"
import StarRating from "./StarRating/StarRating"
import LikeButton from "./LikeButton/LikeButton"
import Toggle from "./Toggle/Toggle"
import Radio from "./Radio/Radio"

export default function App() {
  return (
    <>

      {/* <BoxCards /> */}
      {/* <Calendar /> */}
      {/* <StarRating/> */}
      
      {/* <LikeButton /> */}
      <Toggle header="Получать спецпредложения"/>
      <Radio/>
      
    </>
  );
};