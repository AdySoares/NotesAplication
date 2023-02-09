import { BiArrowBack } from 'react-icons/bi';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiCamera, FiLock, FiUser } from 'react-icons/fi';
import { Container, Forms, User } from "./style";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Account() {
  return (
    <Container>
      <div>
        <button type='button'>
          <BiArrowBack size={20} />
        </button>
      </div>

      <Forms>
        <User>
          <img src="https://github.com/AdySoares.png" alt="Imagem do usuário" />
          <label form='InputFile'>
            <FiCamera size={20}/>
            <input type='file' id='InputFile'/>
          </label>
        </User>
        <div className='InputsArea'>
          <Input type='text' placeholder='Nome' icon={FiUser} />
          <Input type='email' placeholder='E-mail' icon={FaRegEnvelope} />
        </div>
        <div className='InputsArea'>
          <Input type='password' placeholder='Senha atual' icon={FiLock} />
          <Input type='password' placeholder='Nova senha' icon={FiLock} />
        </div>
        <Button title='Salvar'/>
      </Forms>
    </Container>
  )
}