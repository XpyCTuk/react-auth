import { Container, Form, FormGroup, FormLabel, Button, FormControl } from 'react-bootstrap'
import axios from 'axios';
import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';


const Autho = () => {
    return (
        <Container className="authorization_wrapper">
            <Form className="authorization" onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target);
                const formDataObj = Object.fromEntries(formData.entries())
                // const name = Object.getElementById('user_name');
                localStorage.setItem('admin', 'password');
                console.log('нашло');
                axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_API_URL}/api/admin/sign_in`,
                    data: formDataObj
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                });
                console.log(formDataObj);
            }}>

                <FormGroup className="authorization_header" controlId="formBasicEmail">
                    <FormLabel>Введите ваш логин</FormLabel>
                    <FormControl name="username" className="authorization_field" type="username" placeholder="Ваш логин" />
                </FormGroup>

                <FormGroup controlId="formBasicPassword">
                    <FormLabel>Пароль</FormLabel>
                    <FormControl name="password" className="authorization_field user_password" type="password" placeholder="Пароль" />
                </FormGroup>

                <Button value="Submit" className="authorization_btn" variant="primary" type="submit">
                    Войти
                </Button>


            </Form>

        </Container >
    )
}

export default Autho