import React from 'react'

export default function cours(props) {
    return (
        <div>
            <h1 className="text-center my-2"> Le Btc est à  ce jour à : {props.results.bpi.EUR.rate} </h1>
        </div>
    )}

    export async function getServerSideProps(){

    const res = await fetch
    ('https://api.coindesk.com/v1/bpi/currentprice.json')
    const results= await res.json();

    return {
        props : {
            results
        }
    }

}



