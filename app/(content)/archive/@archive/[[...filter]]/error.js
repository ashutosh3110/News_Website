'use client'
export default function ErrorPage({error}){
    console.log(error);
    return(
        <div id="error">
            <h2>An Error Occured</h2>
            <p>{error.message}</p>
        </div>
    )
}