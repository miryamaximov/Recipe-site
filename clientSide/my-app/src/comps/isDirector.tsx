import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const IsDirector=()=>{
    let password = useRef(null)
    let goToShowUsers = useNavigate()
    const check=()=>{
        let pass:any = password.current
        if (pass.value == "1234") goToShowUsers('/showUsers')
        else alert('Sorry, You do not have access to the user list...')
    }
    return <>

        <label>Enter password</label>
        <br />
        <br />
        <input type="password" ref={password}/>
        <br />
        <input type="submit" className='submitBtn' onClick={()=>check()}/>

    </>

}
export default IsDirector