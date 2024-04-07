import Link from 'next/link';
import React from 'react';
import NewsTopBar from '../../../components/News Components/NewsTopBar';
import NewsBody from '../../../components/News Components/NewsBody';


function NewsScreen() {
  return (
    <>
      <NewsTopBar/>
      <NewsBody/>
    </>
  );
}

export default NewsScreen;
