import Link from '../src/components/Link'
import GlobalStyle from '../src/components/theme/index'




const Title = ({children, as }) =>{
  const Tag = as;
  return  (
    <>
      <Tag>
        {children}
      </Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
          font-family: sans-serif;
        }
      `}</style>
    </>
  )
}


const  HomePage = () =>{
  return (
    <div>
      
      <Title as="h1"> Alura Cases - Home</Title>
      <Link href="/faq">
        Ir para a pagina do Faq
      </Link>
    </div>
  )
}

export default HomePage;