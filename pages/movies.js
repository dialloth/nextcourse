/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styles from '../styles/Home.module.css';

function Myblog({ posts }) {
  return (
    <>
      <h1 className={styles.film_title}> Liste of avengers movies</h1>
      <div className={styles.photo}>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <img className={styles.img} src={post.Poster} alt={post.Title} />
              <br />
              <h6>{post.Title} </h6>
              Type : <p>{post.Type} </p>
              Année : <p>{post.Year} </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    'http://www.omdbapi.com/?s=avengers&page=3&apikey=dae8175a'
  );
  const data = await res.json();
  const posts = await data.Search;

  return {
    props: {
      posts,
    },
  };
}
export default Myblog;
