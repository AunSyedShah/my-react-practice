import './Hello.css'

function Hello(props) {
    return (
        <div>
            <h1>Fact About Cat</h1>
            <p>{props.fact}</p>
        </div>
    )

}

export default Hello;