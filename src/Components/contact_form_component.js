// import React, { Component } from 'react';
// import axios from 'axios';


// export default class ContactFormComponent extends Component {

//     DATA;

//     constructor(props) {
//         super(props);

//         this.eventName = this.eventName.bind(this);
//         this.eventPassword = this.eventPassword.bind(this);

//         this.onFormSubmit = this.onFormSubmit.bind(this);

//         this.state = {
//             name: '',
//             password: '',
//         }
//     };


//     eventName(event) {
//         this.setState({ name: event.target.value })
//     };

//     eventPassword(event) {
//         this.setState({ password: event.target.value })
//     };


//     onFormSubmit(event) {
//         event.preventDefault()
//     };


//     componentDidMount() {
//         this.DATA = JSON.parse(localStorage.getItem('contact_form'));

//         if (localStorage.getItem('contact_form')) {
//             this.setState({
//                 name: this.DATA.name,
//                 password: this.DATA.password,
//             })
//         } else {
//             this.setState({
//                 name: '',
//                 password: '',
//             })

//         }
//     }

//     componentWillUpdate(nextProps, nextState) {
//         localStorage.setItem('contact_form', JSON.stringify(nextState));
//     }



//     render() {
//         return (
//             <div className="container">
//                 <div className="card">
//                     <div className="card-body">
//                         <form>
//                             <div className="form-group mb-3">
//                                 <label><strong>Введите ваш логин</strong></label>
//                                 <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.eventName} />
//                             </div>
//                             <div className="form-group mb-3">
//                                 <label><strong>Введите ваш пароль</strong></label>
//                                 <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.eventPassword} />
//                             </div>
//                             <div className="d-grid mt-3">
//                                 <button type="submit" className="btn btn-primary btn-block">Авторизоваться</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div >
//         )
//     }
// }






// import React, { Component } from 'react';

// export default class ContactFormComponent extends Component {

//     DATA;

//     constructor(props) {
//         super(props);

//         this.eventName = this.eventName.bind(this);
//         this.eventPassword = this.eventPassword.bind(this);

//         this.onFormSubmit = this.onFormSubmit.bind(this);

//         this.state = {
//             name: '',
//             password: '',
//         }
//     }


    // eventName(event) {
    //     this.setState({ name: event.target.value })
    // }

    // eventPassword(event) {
    //     this.setState({ password: event.target.value })
    // }


    // onFormSubmit(event) {
    //     event.preventDefault()
    // }


    // componentDidMount() {
    //     this.DATA = JSON.parse(localStorage.getItem('contact_form'));

    //     if (localStorage.getItem('contact_form')) {
    //         this.setState({
    //             name: this.DATA.name,
    //             password: this.DATA.password,
    //         })
    //     } else {
    //         this.setState({
    //             name: '',
    //             password: '',
    //         })
    //     }
    // }

//     componentWillUpdate(nextProps, nextState) {
//         localStorage.setItem('contact_form', JSON.stringify(nextState));
//     }

//     render() {
//         return (
//             <div className="container">
//                 <div className="card">
//                     <div className="card-body">
//                         <form onSubmit={this.onFormSubmit}>
//                             <div className="form-group mb-3">
//                                 <label><strong>Введите ваш логин</strong></label>
//                                 <input type="text" className="form-control" value={this.state.name} onChange={this.eventName} />
//                             </div>
//                             <div className="form-group mb-3">
//                                 <label><strong>Введите ваш пароль</strong></label>
//                                 <input type="password" className="form-control" value={this.state.password} onChange={this.eventPassword} />
//                             </div>
//                             <div className="d-grid mt-3">
//                                 <button type="submit" className="btn btn-primary btn-block">Авторизоваться</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }