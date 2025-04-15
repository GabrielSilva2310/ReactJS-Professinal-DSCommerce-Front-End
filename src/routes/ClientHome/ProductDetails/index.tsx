import './styles.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import HeaderClient from "../../../components/HeaderClient";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from '../../../models/product';

const product : ProductDTO = {

  id: 2,
  name: "Smart TV",
  description : "Essa Tv é de ultima geração",
  price : 2190.0,
  imgUrl : "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  categories : [
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 3,
            name: "Computadores"
        }
    ]
}



export default function ProductDetails() {

    return (
        <main>
          <section id="product-details-section" className="dsc-container">
            <ProductDetailsCard product={product} />
            <div className="dsc-btn-page-container">
              <ButtonPrimary text="Comprar" />
              <ButtonInverse text="Inicio" />
            </div>
          </section>
        </main>
    );
}
