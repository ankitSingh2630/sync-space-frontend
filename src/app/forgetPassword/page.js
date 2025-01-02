'use client';

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
