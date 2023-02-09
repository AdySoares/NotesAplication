import { Tags } from "../Tags";
import { Container } from "./style";

export function Notes({ title, tags }){
  return(
    <Container to='/details/1'>
      <p>{title}</p>

      <div>
        {
          tags.map((tag, i) => <Tags key={i} title={tag.title}/>)
        }
      </div>
    </Container>
  )
}
