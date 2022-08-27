import Cards from "./Cards/Cards";
import Product from "./Product/Product";
import Tabllist from "./Table/Tabllist";

export const App = () => {
  return (
    <>
    <p className="title">Задача 5</p>
    <Tabllist />
    <p className="title">Задача 4</p>
    <Cards />
    <p className="title">Задача 3</p>
    <Product />
    </>
  );
};
