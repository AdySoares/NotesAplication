import { Container, User } from "./style";
import { RiShutDownLine } from 'react-icons/ri'

export function Header({ avatar, name }) {
  return (
    <Container>
      <User to='/account'>
        <img src={avatar} alt="avatar" />
        <div className="name">
          <span>Bem Vindo,</span>
          <p>{name}</p>
        </div>
      </User>

      <button>
        <RiShutDownLine size={25}/>
      </button>
    </Container>
  )
}