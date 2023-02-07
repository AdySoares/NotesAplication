import { Container, Content, Links, TagsList } from "./style";
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tags } from '../../components/Tags'
import { Button } from '../../components/Button'

export function Details() {
  const tagsList = [{ title: 'node' }, { title: 'express' }]
  return (
    <Container>
      <Header avatar='https://github.com/AdySoares.png' name='Adson Soares' />
      <Content>
        <a href="#">Excluir nota</a>
        <h2>
          Introdução ao React
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam recusandae nemo magnam quia dignissimos libero, velit animi nobis provident doloremque, obcaecati debitis dolorum ipsa laborum voluptatum iure nam expedita quod impedit labore quae minus? Quod ab, incidunt veniam vel aspernatur corporis doloribus officia ipsa molestiae dolores voluptatibus soluta. Molestiae, nihil. Culpa architecto ad cupiditate obcaecati saepe dolorem maiores consequuntur, nemo vero quia. Fuga necessitatibus culpa hic laborum amet excepturi omnis accusantium, laboriosam alias. Amet illo, molestias temporibus officia ducimus reprehenderit praesentium rem minima ullam, voluptatibus nemo nostrum neque ipsum, ad eius autem! Impedit ex quasi magni assumenda, dignissimos blanditiis dolore deserunt earum, iste vero sint ipsam maiores, vel sequi accusamus ducimus error ad eaque fugit labore iusto debitis? Minima nemo, placeat expedita accusamus, maiores distinctio molestias beatae officia soluta fugiat quo suscipit tempore perspiciatis, ea dicta veritatis debitis? Corporis quae id modi laudantium repellat quo, molestiae incidunt voluptatum eos magni, voluptas culpa impedit magnam quis voluptatibus cupiditate natus. Consequuntur minima consequatur consectetur pariatur soluta odit, quia explicabo quasi natus fugit distinctio culpa? Consectetur quaerat omnis, eaque numquam unde aperiam ab alias autem pariatur sequi voluptas in excepturi fuga sed eligendi quibusdam possimus, provident quisquam dolorem quis laudantium ipsam, esse dolorum!
        </p>

        <Links>
          <Section title='Links Úteis' />
          <a href="#">https://localhost:3000</a>
        </Links>

        <TagsList>
          <Section title='Tags' />
          <div>
            {
              tagsList.map((tag, i) => {
                return (
                  <Tags key={i} title={tag.title} />
                )
              })
            }
          </div>
        </TagsList>

        <div><Button title='voltar'/></div>

      </Content>
    </Container>
  )
}