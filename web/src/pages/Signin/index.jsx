import { FaRegEnvelope } from 'react-icons/fa'
import { FiLock, FiUser } from 'react-icons/fi'
import { Input } from "../../components/Input";
import { BackgroundImg, Container, Form, Frame } from "./style";
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export function Signin() {
  return (
    <Container>
      <BackgroundImg />

      <Form>
        <fieldset>
          <legend>Notes Tracker</legend>
          <p>Aplicação para salvar e gerenciar seus links uteis</p>
          <h3>Faça seu Login</h3>

          <Frame>
            <div>
              <Input type='text' placeholder='Nome' icon={FiUser} />
              <Input type='email' placeholder='E-mail' icon={FaRegEnvelope} />
              <Input type='password' placeholder='Senha' icon={FiLock} />
            </div>
            
            <Button title='cadastrar'/>
          </Frame>

          <Link to='/'>Voltar para o login</Link>

        </fieldset>

      </Form>

    </Container>
  )
}