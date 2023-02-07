import { Tags } from "../Tags";
import { Container } from "./style";

export function Notes({ title, tags }){
  return(
    <Container>
      <p>{title}</p>

      <div>
        {
          tags.map((tag, i) => <Tags key={i} title={tag.title}/>)
        }
      </div>
    </Container>
  )
}

// "tags":[
//   {
//     "title": "fastifay"
//   },
//   {
//     "title": "express"
//   }
// ],