import { GoogleLogin } from '@react-oauth/google';
import s from './AuthClient.module.css';
import { useState } from 'react';
import jwt_decode from "jwt-decode"; 

export default function AuthClient() {
    const [userImage, setUserImage] = useState('');

    return (
        <div className={s.login_container}>
            {userImage ?
            <>
                <img className={s.login_image} alt='#' src={userImage} />
                <button className={s.logout_button} onClick={() => setUserImage('')}>Log out</button>
            </>
            :
            <>
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        var decoded: any = jwt_decode(credentialResponse.credential!)
                        setUserImage(decoded.picture);
                    }}
                    onError={() => {
                        console.log('Login Failed')
                    }}
                />
            </>
            }
        </div>
    );
};