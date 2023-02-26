
import './Right.css';

export default function Right () {
    return(
        <div>
        <h2>Sign in for an account</h2>
        <p>Signing up for an account is free and easy. Fill out the form below to get started. Javascript is required to countinue.</p>
        <label className="label">Username</label>
        <input type={"text"}></input>
        <label className="label">Password (4 characters minimum)</label>
        <input type={"password"}></input>
        <label className="label">Password Comfirm</label>
        <input type={"password"}></input>
        <label className="label">Email</label>
        <input type={"email"}></input>
        <p>By clicking the "Sign up" button below, I certify that i have read and agree to the TMDB terms of use and privacy policy.</p>
        </div>

    )
}