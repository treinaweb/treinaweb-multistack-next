

function delay() {
    return new Promise((resolver) => {
        setTimeout(() => {
            resolver()
        }, 3000)
    })
}

export async function getStaticPaths() {

    return {
        paths: [
            {
                params: {
                    cursoId: '1'
                }
            },
            {
                params: {
                    cursoId: '2'
                }
            }
        ],
        fallback: false
    }
}


export async function getStaticProps(ctx) {
    const id = ctx.params.cursoId
    const response = await fetch(`http://localhost:3000/api/cursos/${id}`)
    const data = await response.json()

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