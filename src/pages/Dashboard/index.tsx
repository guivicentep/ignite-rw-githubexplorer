import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/62621393?s=460&u=dd47af4fef64b3caacba120d53ff299a2911ff21&v=4"
            alt="Guilherme Vicente Pereira"
          />
          <div>
            <strong>guivicentep/mobile-falaAmigo</strong>
            <p>App desenvolvido com o intuíto de auxiliar idosos.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/62621393?s=460&u=dd47af4fef64b3caacba120d53ff299a2911ff21&v=4"
            alt="Guilherme Vicente Pereira"
          />
          <div>
            <strong>guivicentep/mobile-falaAmigo</strong>
            <p>App desenvolvido com o intuíto de auxiliar idosos.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/62621393?s=460&u=dd47af4fef64b3caacba120d53ff299a2911ff21&v=4"
            alt="Guilherme Vicente Pereira"
          />
          <div>
            <strong>guivicentep/mobile-falaAmigo</strong>
            <p>App desenvolvido com o intuíto de auxiliar idosos.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
