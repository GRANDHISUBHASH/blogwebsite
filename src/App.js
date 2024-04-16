

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About';
import ContactUs from './components/ContactUs';
import AddBlog from './components/AddBlog';
import BlogFullCard from './components/BlogFullCard';

function App() {
  const [cardsData, setCardsData] = useState([
    { 
      id: 1, 
      image: 'https://tse2.mm.bing.net/th?id=OIP.Dvly0FaNozQhF21erFlmzQHaEo&pid=Api&P=0&h=180', 
      title: 'Lorem Ipsum', 
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar purus sed odio dapibus, at commodo nisl suscipit. Nullam euismod vehicula justo, vel ultricies tellus elementum in. Morbi vitae molestie leo.`
  },
  { 
      id: 2, 
      image: 'http://www.pixelstalk.net/wp-content/uploads/2016/04/Desktop-computer-nature-wallpaper-hd.jpg', 
      title: 'Eiusmod Tempor', 
      text: `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  { 
      id: 3, 
      image: 'https://tse3.mm.bing.net/th?id=OIP.yIKCxcqEoUveQaiidwE0NwHaEo&pid=Api&P=0&h=180', 
      title: 'Minim Veniam', 
      text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
  },
  { 
      id: 4, 
      image: 'https://tse1.mm.bing.net/th?id=OIP.iHTD_yNTALfZKuoxEmnXaQHaEK&pid=Api&P=0&h=180', 
      title: 'Gravida Nibh', 
      text: `Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem felis id libero.`
  },
  { 
      id: 5, 
      image: 'https://tse1.mm.bing.net/th?id=OIP.Ae13Rz0eqeDsrsNV1hbPFQHaEo&pid=Api&P=0&h=180', 
      title: 'Irure Dolor', 
      text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  { 
      id: 6, 
      image: 'https://wallpapertag.com/wallpaper/full/5/d/7/409627-popular-laptop-wallpapers-hd-2560x1600.jpg', 
      title: 'Excepteur Sint', 
      text: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`
  },
  { 
      id: 7, 
      image: 'https://i2.wp.com/wonderfulengineering.com/wp-content/uploads/2014/05/laptop-wallpaper-3.jpg', 
      title: 'Nec Tellus', 
      text: `Fusce nec tellus sed augue semper porta. Mauris massa leo, venenatis a ultricies ac, tincidunt vitae arcu. Vivamus vehicula, mauris vel pellentesque malesuada.`
  },
  { 
      id: 8, 
      image: 'https://tse1.mm.bing.net/th?id=OIP.MaQw2JiErFESJYIPvE5WEQHaEK&pid=Api&P=0&h=180', 
      title: 'Habitant Morbi', 
      text: `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sodales scelerisque nibh, eget convallis eros imperdiet in. Proin accumsan erat a libero convallis.`
  },
  { 
      id: 9, 
      image: 'http://wallpaperheart.com/wp-content/uploads/2018/09/laptop-wallpapers.jpg', 
      title: 'Eget Tortor', 
      text: `Integer eget tortor at orci ullamcorper tristique. Ut volutpat tellus ut est ullamcorper ullamcorper. Nunc ultricies nunc vel libero congue, at finibus nulla mollis.`
  },
  { 
      id: 10, 
      image: 'https://www.pixelstalk.net/wp-content/uploads/2016/10/Laptop-backgrounds-in-hd.jpg', 
      title: 'Primis In Faucibus', 
      text: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras at ligula sit amet purus lobortis finibus. Morbi suscipit justo sit amet est ultricies.`
  }
  ]);

  const addBlog = (newBlog) => {
    setCardsData([...cardsData, newBlog]);
  };
 console.log(cardsData)
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home cardsData={cardsData} />} />
       
        <Route path="/about Me" element={<About />} />
        <Route path='/Contact Us' element={<ContactUs />} />
        <Route
          path="/blog/:id"
          element={<BlogFullCard cardsData={cardsData} />}
        />
        <Route
          path="/AddYourBlog"
          element={<AddBlog addBlog={addBlog} />}
        />
      </Routes>
    </Router>
  );
}

export default App;


