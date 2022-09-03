import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/MainPage.module.css'

export default function MainPage() {
  const imageSize = 150
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonathan Lauxen Romano</title>
        <meta name="description" content="Software developer since 2018" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>

        <div className={styles.session}>

          <div className={styles.imageBox}>
            <Image
              alt="Profile"
              src="/../public/jony001.jpeg"
              width={imageSize}
              height={imageSize}
            />
          </div>
          
          <div className={styles.textBox}>
            <h1>
              Fullstack developer  
            </h1>
            
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              pode me chamar de Jony, um sou desenvolvedor de software apaixonado pelo que faço. Desistir não faz parte do meu vocabulário, sempre acreditei que para tudo tem um jeito e sinto que meu proposito nesse mundo é ajudar as pessoas a encontrar o seus caminhos usando a tecnologia.
            </p>

            <i>"Não sou apenas programador, sou um solucionador de problemas"</i>
          </div>
        
        </div>
      
        <div className={styles.session}>
          
          <div className={styles.textBox}>

            <h1>
              teste teste
            </h1>

            <p>
              pode me chamar de Jony, um sou desenvolvedor de software apaixonado pelo que faço. Desistir não faz parte do meu vocabulário, sempre acreditei que para tudo tem um jeito e sinto que meu proposito nesse mundo é ajudar as pessoas a encontrar o seus caminhos usando a tecnologia.
            </p>
          
          </div>

          <div className={styles.imageBox}>
            <Image
              src="/../public/jony001.jpeg"
              width={imageSize}
              height={imageSize}
            />
          </div>

        </div>
      </main>

      <footer>
        desenvolvido por: Eu mesmo
      </footer>
    </div>
  )
}
