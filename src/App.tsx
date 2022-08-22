import React from "react";
import ButtonDefault from "./components/ButtonDefault";
import Card, { CardVariant } from "./components/Card";


const App = () => {
  return (
    <div>
      <Card variant={CardVariant.primary} width="200px" height="200px">
        <button>Кнопка</button>
        <div>текст</div>
      </Card>
      <ButtonDefault fgfg={{gene: "gfg"}} st={456} names="CLICK ME"/>
    </div>
    
    
  );

};

export default App;