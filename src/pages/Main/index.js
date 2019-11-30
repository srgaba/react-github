import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { Container, Form, SubmitButton, List } from './syles';

class Main extends Component
{
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
        notFound: false, 
    };

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };


    componentDidMount()
    {
        const repositories = localStorage.getItem('repositories');

        if(repositories)
        {
            this.setState({ repositories: JSON.parse(repositories) });
        };
    }

    //Salvar os dados do localStorage
    componentDidUpdate(_, prevState)
    {
        const { repositories } = this.state;

        if(prevState.repositories != repositories)
        {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }
    }


    handleSubmit = async e => {
        e.preventDefault();

        try{
            this.setState({ loading: true });

            const { newRepo, repositories } = this.state;

            const hasRepo = repositories.find(r => r.name === newRepo);

            if (hasRepo) throw 'Repositório duplicado';
            
            const response = await api.get(`/repos/${newRepo}`)
            const data = { 
                name: response.data.full_name, 
            };
            
            this.setState({
                repositories: [...repositories, data],
                newRepo: '',
                loading: false,
                notFound: false
            });
        }catch(err){
            this.setState({
                notFound: true,
                loading: false,
            })
        }

        console.log(this.state.repositories);
    };

    render()
    {
        const { newRepo, repositories, loading, notFound }  = this.state;
 
       return( 
        <Container > 
            <h1> 
                <FaGithubAlt />
                Repositórios
            </h1>

            <Form notFound={notFound} onSubmit={this.handleSubmit} >
                <input 
                    type="text" 
                    placeholder="Adicionar repositórios"
                    value={newRepo}
                    onChange={this.handleInputChange}
                />

                <SubmitButton loading={loading}>
                    { loading ? 
                        <FaSpinner color="#FFF" syze={14} /> 
                        : 
                        <FaPlus color="#FFF" syze={14} /> 
                    }
                </SubmitButton>
            </Form>

            <List >
                 { repositories.map(repository => (
                     <li key={repository.name}>
                         <span> {repository.name} </span>
                         <Link to={`/repository/${encodeURIComponent(repository.name)}`}> Detalhes </Link>
                     </li>
                 ))}    
            </List> 

        </Container>);
    }
}

export default Main;