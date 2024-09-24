import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

function About(){
    const nav = useNavigate()
    return(
        <>
        <h1>Hello</h1>
        <h2>About Page</h2>
        <p>Hello again, i am an about page</p>
        <Button variant='primary' onClick={()=>nav("/")} >Take me back</Button>
        </>
    )
}
export default About