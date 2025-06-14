
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Catalog from './routes/ClientHome/Catalog';
import ClientHome from './routes/ClientHome';
import ProductDetails from './routes/ClientHome/ProductDetails';
import Cart from './routes/ClientHome/Cart';
import { ContextCartCount } from './utils/context-cart';
import { useState } from 'react';

export default function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);


  return (
    <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }}>
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<ClientHome/>}>
         <Route index element={<Catalog/>} /> 
         <Route path="catalog" element={<Catalog/>}/>
         <Route path="product-details/:productId" element={<ProductDetails/>}/>
         <Route path="cart" element={<Cart/>}/>
         </Route>
         <Route path='*' element={<Navigate to="/"/>}>  
         </Route>
     </Routes>
    </BrowserRouter>
    </ContextCartCount.Provider>
  );
}
