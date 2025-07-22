import React from 'react';
import SearchBar from '../components/searchbar';
import ResponsiveAppBar from '../components/navbar';
import MenuCard from '../components/menucard';
import Footer from '../components/footer'


function MainMenu() {
  return (
    <div>
        <ResponsiveAppBar/>
        <div style={{ marginTop: '64px' }}></div>
        <SearchBar/>
        <MenuCard/>
        <Footer/>
    </div>
  );
}
export default MainMenu;