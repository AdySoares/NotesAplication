import { Container } from "./style";
import { RiShutDownLine } from 'react-icons/ri'

export function Header({ avatar, name }) {
  return (
    <Container>
      <div>
        <img src={avatar} alt="avatar" />
        <div className="name">
          <span>Bem Vindo,</span>
          <p>{name}</p>
        </div>
      </div>

      <button>
        <RiShutDownLine size={25}/>
      </button>
    </Container>
  )
}