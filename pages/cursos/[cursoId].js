

function delay() {
    return new Promise((resolver) => {
        setTimeout(() => {
            resolver()
        }, 3000)
    })
}

export async function getServerSideProps(ctx) {
    const id = ctx.query.cursoId
    const response = await fetch(`http://localhost:3000/api/cursos/${id}`)
    const data = await response.json()
    await delay()
    return {
        props: {
            curso: data
        }
    }
}

function Curso(props) {
    const curso = props.curso

    if (curso.message) {
        return <div>{curso.message}</div>
    }

    return (
        <div>Meu curso: {curso.nome}</div>
    )
}


export default Curso