import React, {} from 'react';
import './app.css'


const App = () => {


    return (

        <section className="section">
            <img className="img" src="https://wallpapers.com/images/hd/city-night-google-meet-virtual-background-77owl5g8kr23fcde.jpg" alt=""/>
            <div className='logi-box'>
                <form action="">
                    <h2>Login</h2>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input type="email"/>
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <input type="password"/>
                        <label>Password</label>
                    </div>
                    <div className="remember">
                        <label><input type="checkbox"/>Remember me</label>
                        <a href="">Forgot Password ?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register">
                        <p>Dont have account ?</p>
                        <a href="#">Register</a>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default App

