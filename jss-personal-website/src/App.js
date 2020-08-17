import React, { useState } from 'react';
import './App.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset, AppBar, Toolbar, Button, Hourglass } from 'react95';

import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import Store from './store';

// Components
import AboutModal from './components/aboutModal';
import MusicModal from './components/musicModal';
import PhotoModal from './components/photoModal';
import VideoModal from './components/videoModal';
import Menu from './components/menu';
import AboutModalButton from './components/aboutModalButton';
import MusicModalButton from './components/musicModalButton';
import PhotoModalButton from './components/photoModalButton';
import VideoModalButton from './components/videoModalButton';

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(function () {
    setLoading(false);
  }, 1000);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          backgroundColor: '#b19cd9'
        }}>
        <Hourglass size={50} />
      </div>
    );
  }

  return (
    <Store>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <nav>
          <AppBar style={{ zIndex: 4 }}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <div>
                <Menu />
                <AboutModalButton />
                <MusicModalButton />
                <PhotoModalButton />
                <VideoModalButton />
              </div>
              <div>
                <a href="https://www.instagram.com/jaxonss/">
                  <Button square>
                    <InstagramIcon />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/jackson-saia-a47b0a18b/">
                  <Button square>
                    <LinkedInIcon />
                  </Button>
                </a>
              </div>
            </Toolbar>
          </AppBar>
        </nav>
        <main>
          <div className="App-header">
            <AboutModal />
            <MusicModal />
            <PhotoModal />
            <VideoModal />
          </div>
        </main>
      </ThemeProvider>
    </Store>
  );
}

export default App;