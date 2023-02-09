import { FaRegEnvelope } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'
import { Input } from "../../components/Input";
import { BackgroundImg, Container, Form, Frame } from "./style";
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <Container>
      <Form>

        <fieldset>
          <legend>Notes Tracker</legend>
          <p>Aplicação para salvar e gerenciar seus links uteis</p>
          <h3>Faça seu Login</h3>

          <Frame>
            <div>
              <Input type='email' placeholder='E-mail' icon={FaRegEnvelope} />
              <Input type='password' placeholder='Senha' icon={FiLock} />
            </div>
            
            <Button title='Entrar'/>
          </Frame>

          <Link to='/register'>Criar Conta</Link>

        </fieldset>

      </Form>

      <BackgroundImg />
    </Container>
  )
}