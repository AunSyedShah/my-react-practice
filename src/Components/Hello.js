import './Hello.css'

function Hello(props) {
    return (
        <h1 style={{color:props.text_color}}>{props.username}</h1>
    )

}

export default Hello;