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
        <CardNews date="17 de ago, 2024" title="O que é linguagem de programação? Conheça as principais" info="Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."/>
        <CardNews date="12 de jul, 2024" title="GitHub agora permite fazer login sem precisar de senha" info="O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores."/>
        <CardNews date="21 de jun, 2024" title="Por que os hiperlinks são azuis em sua maioria?" info="Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor."/>
      </div>
    </main>
  </StrictMode>,
)
