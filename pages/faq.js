import { faQ } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Link from '../src/components/Link'


export async function getStaticProps(context) {

    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"

    const faq = await fetch(FAQ_API_URL)
    .then((respostaServidor)=>{
      return respostaServidor.json();
    })
    .then((resposta)=>{
      return resposta;
    })


  return {
    props: {
      faq,
    },
  };
}



const FAQPage = ({faq}) =>{
  //const [faq,setFaq] = useState(faq)


  return (
    <div>
      <h1> Alura Cases - FAQ</h1>
      <Link href="/">
        Ir para a pagina do Home
      </Link>
      <ul>
        {
          faq.map(({answer, question}) => (
            <li key={question}>
              <article>
              <h2>{question}</h2>
              <p>{answer}</p>
              </article>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FAQPage;