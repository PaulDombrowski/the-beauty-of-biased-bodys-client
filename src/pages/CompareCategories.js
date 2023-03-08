import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const showCategoryLinks = () => {
    <></>
  return (
    <div>
    <Link to="/WomanLesbianFemininity">Show me Womxn/Lesbians and Femininity</Link>
    <Link to="/WomanTRansWomanFemininity">Show me Womxn/Trans Womxn and Femininity</Link>
    <Link to="/ManTransManMasculinity">Show me Man/Trans Man and Masculinity</Link>
    <Link to="/ManGayMan">Show me Man and Gay Man</Link>
    <Link to="/WomanLesbian">Show me Woman and Lesbians</Link>
    <Link to="/FemininityAndMasculinity">Show me Feminity and Masculinity</Link>
    <Link to="/PupilCouple">No gender</Link>
    

    


    </div>
  );
};

export default showCategoryLinks;
