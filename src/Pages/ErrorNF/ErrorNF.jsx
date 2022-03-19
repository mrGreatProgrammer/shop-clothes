import './ErrorNF.css';

function ErrorNF() {
    return (
        <div className="enf">
            <h1 className="ernf-message">404</h1>
            <h3 className="ernf-text">This page doesnt exist</h3>
            <a href="/" className="go-home-page">home</a>
        </div>
    )
}

export default ErrorNF;