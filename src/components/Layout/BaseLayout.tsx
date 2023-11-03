import {  FC, ReactNode } from 'react';
import {Header} from 'components/Layout/Header'
import {Footer} from 'components/Layout/Footer'

interface BaseLayoutProps { 
  children:ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({children}) => (

  <section className=''>
  <Header/>
  {children}
  <Footer/>
  </section>
);
