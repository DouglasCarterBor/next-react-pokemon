// Importa as tipagens necessárias
import { GetStaticPropsContext, GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import styles from '../../styles/Navbar2.module.css'
import { useRouter } from 'next/router'

// Define as tipagens para o objeto todo
interface Todo {
  id: number,
  title: string
}

// Define as propriedades que o componente Todo recebe
interface TodoProps {
  todo: Todo
}

// Utiliza as tipagens definidas acima para as props do componente Todo
const Todo = ({ todo }: TodoProps) => {

  // Instancia o objeto router para poder acessar os parâmetros de rota
  const router = useRouter();

  return (
    <div>
      <Link href="/todos">Voltar</Link>
      <h1>Exibindo o todoId: {todo.id}</h1>
      <h3>Texto: {todo.title}</h3>
      <h1>Comentário: la la la <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link></h1>
      <h1>Comentário: le le le <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link></h1>
      <h1>Comentário: li li li <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link></h1>
      {/* Exibe as informações da rota */}
      <p>Query string: {JSON.stringify(router.query)}</p>
      <p>Todo ID: {router.query.todoId}</p>
    </div>
  )
}

// Define a função getStaticProps que será executada durante a build e fornecerá as props para o componente Todo
export const getStaticProps: GetStaticProps<TodoProps> = async (context: GetStaticPropsContext) => {
  const { params } = context;

  // Verifica se o parâmetro todoId está presente nos parâmetros da rota
  if (!params || !params.todoId) {
    return {
      notFound: true,
    }
  }

  // Busca os dados do todo no endpoint do jsonplaceholder
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);
  const todo = await data.json();

  return {
    props: { todo },
  }
}

// Define a função getStaticPaths que será executada durante a build e fornecerá os caminhos a serem pré-carregados
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos = await response.json();

  // Cria os caminhos com base no id dos todos
  const paths = todos.map((todo: Todo) => ({ params: { todoId: todo.id.toString() } }))

  return { paths, fallback: false }
}

export default Todo;
