import { Container, Content, Forms } from "./style";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { InputWrapper } from "../../components/InputWrapper";
import { Link } from "react-router-dom";

export function New(){
  return(
    <Container>
      <Header avatar='https://github.com/AdySoares.png' name='Adson Soares'/>
      <Content>
        <div>
          <h1>Criar nota</h1>
          <Link to='/'>Voltar</Link>
        </div>
        <Forms>
          <Input type='text' placeholder='Título'/>
          <textarea placeholder="Observações"/>
            <Section title='Links Úteis'/>
          <div>
            <InputWrapper value={'https://github.com'} />
            <InputWrapper isNew placeholder="Novo Link"/>
          </div>
            <Section title='Tags'/>
          <div className="TagSection">
            <InputWrapper value={'Node'}/>
            <InputWrapper value={'Node'}/>
            <InputWrapper value={'Node'}/>
       
            <InputWrapper isNew placeholder="Nova Tags"/>
          </div>
          <Button title='Salvar'/>
        </Forms>

      </Content>
    </Container>
  )
}