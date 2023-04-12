import Link from 'next/link'

import { useRouter } from 'next/router'
import styles from '../../../../styles/Navbar2.module.css'

const Comment = () => {

    const router = useRouter()

    const todoId = router.query.todoId
    const commentId = router.query.commentId


    return(
        <>
        <div className={styles.navbar2}>
        <Link href={`/todos/${todoId}`}>Voltar</Link>
        <h1>Exibindo o comentário: {commentId}</h1>
        <p>Do Todo {todoId}</p>
        </div>

        </>
    )

}

export default Comment