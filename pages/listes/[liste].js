import React from 'react';
import styles from '../../styles/Home.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

    export default function liste(props) {
       // eslint-disable-next-line react-hooks/rules-of-hooks
        const router = useRouter();

        if(!props.listeEncours){
            return <h1> Chargement en cours</h1>
        }
        return (
        <div className={styles.container}>
        <h1 className={styles.titre}>{router.query.liste.charAt(0).toUpperCase() + router.query.liste.slice(1)}</h1>
            <table className={styles.table}>
            <thead>
                <th>Français</th>
                <th>Anglais</th>
            </thead>
            <tbody>
            {props.listeEncours.map((el,index) => (
                
                <tr key={uuidv4()}className={styles.tr}>
                <td key={index}>{el.fr}</td>
                <td>{el.en}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
    }

    export async function getStaticProps(context) {
        const slug = context.params.liste;
        const data = await import("/data/englishList.json");
        const listeEncours = data.englishList.find(list =>list.name === slug)

        if(!listeEncours) {
            return {
                notFound: true
            }
        }
        return {
            props : {
                listeEncours : listeEncours.data
            }
        }

    }


    export async function getStaticPaths(){
        const data = await import("/data/englishList.json")

        const paths = data.englishList.map(item =>(
            {
                params : { liste: item.name},
            }
        ));
        return {
            paths : [
        { params : { liste: "words"}},
        { params : { liste: "verbs"}},
        { params : { liste: "adjectives"}}
    ],
        //paths,
        fallback: false,
        }
    }
