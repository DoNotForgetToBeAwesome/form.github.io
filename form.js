import '../styles/form.css'
import React, { useState } from 'react';

export default function Form() {
    const [userInfo, setUserInfo] = useState();

    if (userInfo) {
        let cart = JSON.parse(userInfo);

        return (

            <main id="card">
                <header></header>
                <img src="https://yt3.ggpht.com/a/AGF-l782xWSoH8cfhJreHABC0-JzGp3T0Cdcbp9d0A=s900-c-k-c0xffffffff-no-rj-mo"
                    alt="" />
                <h2>{cart.firstName.toUpperCase()} {cart.lastName.toUpperCase()}</h2>
                <h4>Web Developer</h4>
                <ul>
                    <li>
                        <ion-icon name="mail-unread"></ion-icon>
                        {cart.email}
                    </li>
                    <li>
                        <ion-icon name="alert-circle-outline"></ion-icon> {cart.password}
                    </li>
                    <li>
                        <ion-icon name="location-sharp"></ion-icon> Visakhapatnam
                    </li>
                </ul>

                <span>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                </span>
                <button>Complete</button>
            </main>

        )
    }



    return (

            <GoogleForm updateState={(e) => setUserInfo(e)} />


    )

}








function GoogleForm({ updateState }) {
    let inputFields,
        span;

    function getUserData(e) {
        e.preventDefault();
        inputFields = document.querySelectorAll('form input');
        span = document.querySelectorAll('span');

        let password = inputFields[3],
            confirmPassword = inputFields[4]

        console.log(span, inputFields)
        let check = Array.from(inputFields).every((e, i) => e.value != '');
        if (check) {
            if (password.value == confirmPassword.value) {
                updateState(JSON.stringify({
                    firstName: inputFields[0].value,
                    lastName: inputFields[1].value,
                    email: inputFields[2].value,
                    password: password.value

                }));

            }
            else {

                inputFields.forEach((e, i) => {
                    if (e.value && i != 5) {
                        span[i].innerHTML = ''
                    }
                })
                span[3].innerHTML = 'Password not Matched';

            }
        }
        else {
            inputFields.forEach((e, i) => {
                if (!e.value) {
                    span[i].innerHTML = 'Fill Out This Field'
                }
                else {

                    if (i != 5) {
                        span[i].innerHTML = ''
                    }

                }
            })
        }







    }


    function showPassword() {
        inputFields = document.querySelectorAll('form input');


        if (inputFields[5].checked == true) {
            inputFields[3].setAttribute('type', 'text');
            inputFields[4].setAttribute('type', 'text');

        }
        else {
            inputFields[3].setAttribute('type', 'password');
            inputFields[4].setAttribute('type', 'password');

        }
    }






    return (
        <main id="createGmail">
            <form action="">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-png-transparent-background-large-new.png" loading='lazy' alt="" />

                <h2>Create your Google Account</h2>

                <article>
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                    <span></span> <span></span>
                </article>
                <p>
                    <input type="email" name="" id="email" placeholder="example@example.com" required />
                </p>
                <span></span>

                <p id="current">Use my current email address instead</p>

                <article>
                    <input type="password" placeholder="Password" />
                    <input type="password" id="" placeholder="Confirm" /> <span></span>
                    <span></span>
                </article>

                <p id="strength">
                    Use 8 or more characters with a mix of letters, numbers & symbols
                </p>

                <p id="show_password" onClick={showPassword}><input type="checkbox" /> Show password</p>
                <section id="proceed">
                    <h5>Sign in instead</h5>
                    <button onClick={(e) => { getUserData(e) }}>NEXT</button>
                </section>
            </form>
            <section>

                <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" />
                <p>One account. All of Google working for you.</p>
            </section>
        </main>
    )
}