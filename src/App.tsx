
import {  Navigate, Route, Routes } from 'react-router-dom';
import Catalog from './routes/ClientHome/Catalog';
import ClientHome from './routes/ClientHome';
import ProductDetails from './routes/ClientHome/ProductDetails';
import Cart from './routes/ClientHome/Cart';
import { ContextCartCount } from './utils/context-cart';
import { useEffect, useState } from 'react';
import Login from './routes/ClientHome/Login';
import AdminHome from './routes/Admin/AdminHome';
import Admin from './routes/Admin';
 import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
 import {history} from './utils/history';
import { PrivateRoute } from './components/PrivateRoute';
import { AccessTokenPayloadDTO } from './models/auth';
import * as authService from './services/auth-service';
import * as cartService from './services/cart-service';
import { ContextToken } from './utils/context-token';
import Confirmation from './routes/ClientHome/Confirmation';
import ProductListing from './routes/Admin/ProductListing';
import ProductForm from './routes/Admin/ProductForm';

export default function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);
  
  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  
  useEffect(() => {
    setContextCartCount(cartService.get().items.length);

    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }
  }, []);

  return (
    <ContextToken.Provider value={{ contextTokenPayload, setContextTokenPayload }}>
    <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }}>
    <HistoryRouter history={history}>
    <Routes>
         <Route path="/" element={<ClientHome/>}>
         <Route index element={<Catalog/>} /> 
         <Route path="catalog" element={<Catalog/>}/>
         <Route path="product-details/:productId" element={<ProductDetails/>}/>
         <Route path="cart" element={<Cart/>}/>
         <Route path="login" element={<Login />} />
         <Route path="confirmation/:orderId" element={<PrivateRoute><Confirmation /></PrivateRoute>} />
         </Route>
         <Route path="/admin/" element={<PrivateRoute roles={['ROLE_ADMIN']}><Admin /></PrivateRoute>}>
         <Route index element={<Navigate to="/admin/home" />} />
         <Route path='home' element={<AdminHome/>}/>
         <Route path='products' element={<ProductListing/>} /> 
         <Route path='products/:productId' element={<ProductForm/>} /> 
         </Route>
         <Route path='*' element={<Navigate to="/"/>}>  
         </Route>
     </Routes>
    </HistoryRouter>
    </ContextCartCount.Provider>
    </ContextToken.Provider>

  );
}
