import React, {useState, useEffect, FormEvent} from 'react';
import {Title, Form, Repositories, Error} from './styles';

import { Link } from 'react-router-dom'

import {FiChevronRight} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  id: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {

  const [newRepo, setNewRepo] = useState('');

  const [inputError, setInputError] = useState('')

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories')

    if(storagedRepositories) {
      return JSON.parse(storagedRepositories)
    }

    return []

  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories])

  async function randonAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{

    event.preventDefault();

    if(!newRepo) {
      setInputError('Digite o autor/nome do repositório')
      return
    }

    try {

      const response = await api.get(`/repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');

    } catch (error) {
      setInputError('Erro na busca por esse repositório')
    }

  }

  return (
      <>
        <img src={logoImg} alt="Github Explorer"/>
        <Title>Explore Repositórios no GitHub</Title>

        <Form hasError={!!inputError} onSubmit={randonAddRepository}>
          <input placeholder="Digite o nome do repositório"
            value={newRepo}
            onChange={e => setNewRepo(e.target.value)}
            />
          <button type="submit">Pesquisar</button>
        </Form>

        {inputError && <Error>{inputError}</Error>}

        <Repositories>
          {repositories.map(repository => (
            <Link key={repository.id} to={`/repository/${repository.full_name}`}>
              <img src={repository.owner.avatar_url} alt={repository.full_name} />
              <div>
                <strong>{repository.owner.login}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20}/>
            </Link>
          ))}
        </Repositories>
      </>
    )
}

export default Dashboard;
