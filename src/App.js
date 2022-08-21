import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Blabla from './Blabla';
import Link from './Link';

export default function App() {
  return (
    <div className="App">
      <Link href="vk.com" name="VK"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Edit <code>src/App.js</code> and save to
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link name="unknown site" href="https://yt3.ggpht.com/a/AGF-l7_csnpsoE56Aoah6Sfaqow1WxzDP2RDjPDOIA=s900-c-k-c0xffffffff-no-rj-mo"/>
        

        <Button name="buttonName" type="ggggggggg" />
        <Blabla/>
      </header>
    </div>
  );
}



















let price = [36,"fk", 57, 98, 19,"number", 103];

let result = price.filter(item => typeof item === 'number');
console.log(result);


function addTax(item) {

   return Number( (item / 100 * 20) + item);
};

let newPrice = result.map(addTax);

console.log(newPrice)
//--------------------Или-------------------------


// let price = [36,"fk", 57, 98, 19,"number", 103];

// let newPrice = price.filter(item => typeof item === 'number').map(item => Number((item/100*20)+item));
// console.log(newPrice)

