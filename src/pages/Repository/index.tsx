import React from 'react';
import { useRouteMatch, Link }from 'react-router-dom'; 
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';


interface RepositoryParams {
  repository: string;
}


const Repository: React.FC= () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
  <>
    <Header>
      <img src={logoImg} alt="Github Explorer" />
      <Link to="/">
        <FiChevronLeft size={16}/>
        Voltar
      </Link>
    </Header>

    <RepositoryInfo>
      <header>
        <img src="https://avatars2.githubusercontent.com/u/56227526?s=460&u=2074ddcc5a2198c3778cdc643518afcd5ee67c7e&v=4" alt="RodrigoSenna"/>
        <div>
          <strong>rodrigosenna88/GBTYPE</strong>
          <p>descrição do repositório</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>1808</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>48</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>67</strong>
          <span>Issues abertas</span>
        </li>
      </ul>
    </RepositoryInfo>

    <Issues>
    <Link to={"asd"}>
       
        <div>
        <strong>asdf</strong>
        <p>asdf</p>
        </div>
        
        <FiChevronRight size={20}/>
        </Link>
    </Issues>
  </>
  );
}

export default Repository;