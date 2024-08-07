import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import './Products.css';
import ProductsAdvert from "./ProductsAdvert";

export default function Products() {
  return (
    <div className="products_container">
        <ProductsFilter />
        <ProductsList />
        <ProductsAdvert />
    </div>
  )
}