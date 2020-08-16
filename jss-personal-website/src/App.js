import React from 'react';
import './App.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset, AppBar, Toolbar, Button } from 'react95';

import lilac from 'react95/dist/themes/lilac';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import Store from './store';

// Components
import AboutModal from './components/aboutModal';
import MusicModal from './components/musicModal';
import Menu from './components/menu';
import AboutModalButton from './components/aboutModalButton';
import MusicModalButton from './components/musicModalButton';

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

  return (
    <Store>
      <GlobalStyles />
      <ThemeProvider theme={lilac}>
        <nav>
          <AppBar style={{ zIndex: 3 }}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <div>
                <Menu />
                <AboutModalButton />
                <MusicModalButton />
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
          </div>
        </main>
      </ThemeProvider>
    </Store>
  );
}

export default App;