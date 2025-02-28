import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// global style
import GlobalStyle from './styles/global';

// styles
import './styles/page-blog/header.css';
import './styles/page-blog/main.css';

// components
import CardNews from './components/CardNews';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <header className="header">
      <div className="inner-header">
          <h1>
              <span>Code</span>Lab
          </h1>
          <input type="text" placeholder="Pesquisar no blog..."/>
      </div>
    </header>
    <main className="main">
      <div className="inner-main">
        <CardNews/>
      </div>
    </main>
  </StrictMode>,
)
