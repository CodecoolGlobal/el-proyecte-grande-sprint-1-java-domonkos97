import {useState} from "react";
import {Link} from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google.js";
import FacebookIcon from "@mui/icons-material/Facebook.js";
import GitHubIcon from "@mui/icons-material/GitHub.js";

const Signup = () => {

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");


    const createNewUser = async (e) => {
        e.preventDefault();
        const user = {
            "userName": username,
            "firstName": firstName,
            "lastName": lastName,
            "password": password
        };
        await fetch('api/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })

    }


    // send post request with username, firstname, lastname

    return  (
        <div className="form-container">
            <div className='container-login'>
                <form onSubmit={createNewUser}>
                    <h4 style={{color: 'white', margin: '50px auto 50px', textAlign:'center'}}>Sign Up</h4>
                    <div className="socials">
                        <Link to='google.com' className='social-button'><GoogleIcon></GoogleIcon></Link>
                        <Link to='google.com' className='social-button'><FacebookIcon></FacebookIcon></Link>
                        <Link to='google.com' className='social-button'><GitHubIcon></GitHubIcon></Link>
                    </div>
                    <div className='email-sign-in-form'>
                        <p className='white-color'>
                            Sign Up With Email
                        </p>
                        <input type="text" placeholder='User Name' className='input-field' name="uname" required onChange={(event) => {setUsername(event.target.value)}} value={username}/>
                        <input type="email" placeholder='Email' className='input-field' name="email" required/>
                        <input type="text" placeholder='First Name'  className='input-field' required onChange={(event) => {setFirstName(event.target.value)}} value={firstName}/>
                        <input type="text" placeholder='Last Name'  className='input-field' required onChange={(event) => {setLastName(event.target.value)}} value={lastName}/>
                        <input type="password" placeholder='****'  className='input-field' required onChange={(event) => {setPassword((event.target.value))}
                        } value={password}/>
                        <input type="password" placeholder='****'  className='input-field' required />
                        <p className='sign-up'>Already have an account? Sign In <Link to='/login' className='sign-up-sign'>here</Link>!</p>
                        <input type="submit" value='Sign Up' className='submit-button'/>
                    </div>
                </form>
            </div>
        </div>
    )

    // (
    //     <div className="form">
    //         <div className="toolbar-height"></div>
    //         <form onSubmit={createNewUser}>
    //             <div className="input-container">
    //                 <label>Email </label>
    //                 <input type="email" name="email" required />
    //             </div>
    //             <div className="input-container">
    //                 <label>Username </label>
    //                 <input type="text" name="uname" required onChange={(event) => {setUsername(event.target.value)}} value={username}/>
    //             </div>
    //             <div className="input-container">
    //                 <label>First Name </label>
    //                 <input type="text" name="uname" required onChange={(event) => {setFirstName(event.target.value)}} value={firstName}/>
    //             </div>
    //             <div className="input-container">
    //                 <label>Last Name </label>
    //                 <input type="text" name="uname" required onChange={(event) => {setLastName(event.target.value)}} value={lastName}/>
    //             </div>
    //             <div className="input-container">
    //                 <label>Password </label>
    //                 <input type="password" name="password" required/>
    //             </div>
    //             <div className="button-container">
    //                 <input type="submit" value="Signup"/>
    //             </div>
    //         </form>
    //     </div>
    // )
}

export default Signup;