const Header=(props)=>{
    const splitSen=(sentence)=>{
        
        sentence= sentence.split("<br/>")
        let result =[sentence[0]]
        for (let i = 1; i < sentence.length; i++) {
            result = result.concat(<br/>,sentence[i])
        }
        console.log(result)
        return result
        
    }
    
    return (
        <header>
        <h1 className={props.side}>{splitSen(props.title)}</h1>
        <p className={props.side}>{splitSen(props.description)}</p>
        <a className="header-link" href="#">{props.link}</a>
        </header>
    )

}
export default Header