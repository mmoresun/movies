import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer teal lighten-2">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">React Movie Database</h5>
                            <p className="grey-text text-lighten-4">Powered by React.js functional components, REST API (fetch), Google Materialize, Open Movie Database</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">My another projects:</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://mmoresun.github.io/todolist/">Cute Todo List</a> (React.js, Redux)</li>
                                <li><a className="grey-text text-lighten-3" href="https://mmoresun.github.io/live-clock/">World live Clock</a> (React.js, REST API)</li>
                                <li><a className="grey-text text-lighten-3" href="https://mmoresun.github.io/cityquiz/">City Quiz</a> (React.js, Bootstrap)</li>
                                <li><a className="grey-text text-lighten-3" href="https://mmoresun.github.io/sizl-com/">Sizl - dark kitchen, food delivery</a> (HTML, CSS, JS)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">© {new Date().getFullYear()} Anton Blagoveshchenskiy
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
