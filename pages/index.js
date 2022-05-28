import styles from '../styles/Home.module.css';
import Head from 'next/head';
//import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

export default function Home(props) {
  const [state, setState] = useState(false);

  useEffect(() => {
    newword();
  }, []);
  const newword = () => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setState(data));
  };
  let randomWord;
  if(state){
    const array = state.englishList[0].data;
    randomWord = array[Math.floor(Math.random()* array.length)].en;
  }
  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Page Index</title>
      </Head>

      <h1>Hello nextJS</h1>
      <h2 className={styles.titre}> Mot au hasard</h2>
      {/* <table className={styles.table}>
        <thead>
          <th>Français</th>
          <th>Anglais</th>
        </thead>
        <tbody>
          {props.array.map((el, index) => (
            <tr key={uuidv4()} className={styles.tr}>
              <td key={index}>{el.fr}</td>
              <td>{el.en}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <button
        onClick={newword}
        className="btn btn-primary d-block m-auto font-weight-bold"
      >
        Get RANDOM WORDS
      </button>
      <h2 className='text-center font-wight-bold'>{randomWord}</h2>
    </div>
  );
}

export async function getStaticProps() {
  const data = await import(`/data/vocabulary.json`);
  const array = data.vocabulary;

  if (array.length === 0) {
    return {
      redirect: {
        destination: '/cours',
      },
    };
  }
  return {
    props: {
      array,
    },
  };
}
