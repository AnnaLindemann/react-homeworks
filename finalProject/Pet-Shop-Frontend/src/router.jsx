import { Routes,Route } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Categories from "./pages/categories";
import Category from "./pages/category";
import NotFound from "./pages/notFound";
import Product from "./pages/product";
import Products from "./pages/products";
import Sale from "./pages/sale";

export default function Router(){

return (
  <Routes>
 <Route path="/" element={<MainLayout/>}>
 <Route index element={<Home/>}/>
 <Route path="/cart" element={<Cart/>}/>
<Route path="/categories" element={<Categories/>}/>
<Route path="/categories/:id" element={<Category/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/products/:id" element={<Product/>}/>
<Route path="/sale" element={<Sale/>}/>
<Route path="*" element={<NotFound/>}/>
</Route>
  </Routes>
)
}

