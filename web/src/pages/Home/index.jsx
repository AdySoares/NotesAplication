import { BiSearch } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';
import { Container, Content, Logo, Menu, NewNote, Search } from "./style";
import { Section } from '../../components/Section';
import { Notes } from '../../components/Notes'

export function Home(){

  const tagsList = [{title: 'node'}, { title: 'express'}]

  return(
    <Container>
      <Logo>
        Notes Tracker
      </Logo>
      <Header avatar='https://github.com/AdySoares.png' name='Adson Soares' />

      <Menu>
        <ul>
          <li>Todos</li>
          <li>Node</li>
          <li>Express</li>
          <li>JavaScript</li>
        </ul>
      </Menu>

      <NewNote>
        <FiPlus size={20}/>
        <p>Criar nota</p>
      </NewNote>

      <Search>
        <Input type='text' icon={BiSearch} placeholder='Pesquisar pelo título' />
      </Search>

      <Content>
        <Section title='Minhas notas'/>
        <Notes title='Node' tags={tagsList}/>
      </Content>
    </Container>
  )
}