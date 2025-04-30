import './styles.css';
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductDTO } from '../../../models/product';
import { findAll } from '../../../services/product-service';


export default function Catalog() {

    
    const[products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(()=>{
        axios.get(findAll())
        .then(response =>{
            console.log(response.data)
            setProducts(response.data.content)
        })
    },[])

    return (
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar />
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        {

                            products.map(product =>
                                <CatalogCard key={product.id} product={product} />
                            )

                            }
                    </div>
                    <ButtonNextPage />
                </section>
            </main>
    );
}