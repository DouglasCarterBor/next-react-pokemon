// Importa o arquivo de estilos CSS que é usado para estilizar a página
import styles from '../../styles/Todos.module.css'

// Importa o componente Link do pacote Next.js que é usado para criar links entre diferentes páginas
import Link from 'next/link'

// Define a função assíncrona getStaticProps que é usada para buscar os dados da API externa usando o método fetch e retorna os dados como um objeto "props"
export async function getStaticProps(){

    // Usa o método fetch para buscar os dados da API externa
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    // Converte os dados da API em um objeto JavaScript usando o método json()
    const todos = await data.json()

    // Retorna um objeto "props" que contém as tarefas
    return {
        props: {todos},
    }
}

// Define a interface Todo, que define a estrutura de um objeto de tarefa, que possui duas propriedades: title e id
interface Todo {
    title: string;
    id: number;
}

// Define a interface TodosProps, que define a estrutura do objeto "props" que é passado para o componente Todo
interface TodosProps {
    todos: Todo[];
}

// Define o componente Todo, que é uma função que recebe o objeto "props" como um parâmetro e retorna o conteúdo HTML para exibir as tarefas em uma lista
const Todos = ({ todos }: TodosProps) => {
    return (
        <>
            {/* Exibe um título na página */}
            <h1 className={styles.todolist}>Tarefas para fazer:</h1>

            {/* Exibe uma lista das tarefas */}
            <ul className={styles.todolist}>
                {/* Usa o método map para percorrer a lista de tarefas e exibir cada uma como um elemento de lista */}
                {todos.map((todos) => (
                    <li key={todos.id}>
                        {/* Exibe o título da tarefa */}
                        {todos.title} -

                        {/* Cria um link que leva a uma página com detalhes adicionais sobre a tarefa */}
                        <Link href={`/todos/${todos.id}`}>Ver mais</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

// Exporta o componente Todo como padrão
export default Todos
