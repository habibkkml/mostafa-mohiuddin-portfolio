import { Link } from "react-router-dom"

const Notfound = () => {
    return (
        <section className="nofFound">
            <div className="wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="notFound__inner">
                            <div className="notFound__image">
                                <img src="/src/assets/img/2834777_404_error_icon.png" alt="" />
                            </div>
                            <div className="notFound__content">
                                <p className="danger">Error 404!</p>
                                <p>Page not found</p>
                                <button className="secondary__btn">
                                    <Link to={'/'}>Go Back</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Notfound;