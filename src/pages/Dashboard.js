import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Search/>
      <Info />
    </main>
  );
};

export default Dashboard;
