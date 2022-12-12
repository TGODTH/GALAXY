const Card=(props)=>{
    return(
        <a href={props.link} className="card">
            <div className="card-header"><img className="card-svg" src={props.pic} alt="" /><h3>{props.title}</h3></div>
            <p className="text-left">{props.description}</p>
        </a>
    )
}
export default Card