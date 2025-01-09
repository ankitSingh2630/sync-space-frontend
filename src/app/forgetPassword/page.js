'use client';

import Form1 from '../../components/Forms/index1';
import Form2 from '../../components/Forms/index2';
import { useState } from 'react';
import Forgotpassword from '@/components/Forgotpassword'


const Forget = () => {
  const [currentPage, setCurrentPage] = useState('Forget'); // Default to 'Forget' view

  return (
    <>
    <Forgotpassword/>
    </>
  );
};

export default Forget;
