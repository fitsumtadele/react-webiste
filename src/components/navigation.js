import {Link, BrowserRouter as Router} from 'react-router-dom';
function Navigation()
{
    return(
        <header>
            <div className="">
                 <nav className="navbar navbar-expand-sm bg-primary navbar-dark text-dark justify-content-center">
                    <div className="">
                        <a className="navbar-brand" href="#">Logo</a>
                    </div>
                    <div>
                        
                        <ul className="navbar-nav">
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/howit">Blog Articles</Link>
                        </div>
                        <div>
                            <Link to="/services">Contact Me</Link>
                        </div>

                        </ul>
                    
                        
                        
                    </div>
                </nav>
            </div>
        </header>

    );
}
export default Navigation;