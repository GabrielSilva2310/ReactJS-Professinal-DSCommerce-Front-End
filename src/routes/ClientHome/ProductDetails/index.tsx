import './styles.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../services/product-service';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as cartService from '../../../services/cart-service' ;


export default function ProductDetails() {

  const navigate = useNavigate();

  const params = useParams();
  const[product, setProduct] = useState<ProductDTO>();

  useEffect(()=> {
    axios.get(productService.findById(Number(params.productId)))
    .then(response => {
      console.log(response.data)
      setProduct(response.data)
    })
  } ,[])

  function handleBuyClick(){
    if(product){
          cartService.addProduct(product);
          navigate("/cart");
    }
  }

    return (
        <main>
          <section id="product-details-section" className="dsc-container">
            {
              product &&
              <ProductDetailsCard product={product} />
            }
            <div className="dsc-btn-page-container">
              <div onClick={handleBuyClick}>
                    <ButtonPrimary text="Comprar" />
              </div>
              <Link to={'/'}> <ButtonInverse text="Inicio" /> </Link>
            </div>
          </section>
        </main>
    );
}
