import { ThemeProvider } from 'styled-components';
import './App.css';

import { GlobalStyles } from './stylesheets/global';
import { dark } from './stylesheets/themes';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { Home } from './pages/Home';
import { AnimatePresence } from 'framer-motion';

const App = () => {

  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark} >
        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
            }
          }
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>
            <main data-scroll-container ref={containerRef}>
              <Home />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
