import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeView from './views/home/home';
import { MainContainer } from './views/main/main';
// import MenuView from './views/menu/menu';
import MoneyView from './views/money/money';
import NewsView from './views/news/news';
// import WeatherView from './views/menu/weather/weather';
import NotFoundView from './views/not-found/not-found';
import { ProductView } from './views/product/ProductViev';
import UserView from './views/user/user';
import WeatherView from './views/weather/weather';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainContainer/>}>
          <Route path="/home" element={<HomeView/>}/>
          <Route path="/user" element={<UserView/>}/>
          <Route path="/weather" element={<WeatherView/>}/>
          <Route path="/money" element={<MoneyView/>}/>
          <Route path="/news" element={<NewsView/>}/>
          <Route path="/products" element={<ProductView/>}/>
          <Route path="*" element={<NotFoundView/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
