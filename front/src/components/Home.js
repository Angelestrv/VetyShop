import React, { Fragment } from 'react'

export const Home = () => {
    return (
        <Fragment>
            <h1 id="encabezado_productos">Ultimos Productos</h1>

            <section id="productos" className='container mt-5'>
                <div className='row'>
                    {/*Producto 1*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/catchow.jpg' alt="Cat Chow"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href="http//localhot:3000">Purina - Cat Chow</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>
                                </div>
                                <p className='card-text'>$72.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/sterilcat.jpg' alt="Sterilcat"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href="http//localhot:3000">Purina ONE - Sterilcat</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 2 reviews</span>
                                </div>
                                <p className='card-text'>$52.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 3*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/gourmet.jpg' alt="Gourtmet lata"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href="http//localhot:3000">Purina Gourtmet - Lata </a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 12 reviws</span>
                                </div>
                                <p className='card-text'>$80.000</p><a href="http//localhot:3000" id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 4*/}
                    <div className='col-sm-12 col-md-m6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className="card-img-top mx-auto" src="./images/gourmet2.jpeg" alt="Gourtmet sobres"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href="http//localhot:3000">Purina Gourtmet - Sobres </a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 10 reviws</span>
                                </div>
                                <p className='card-text'>$75.000</p><a href="http//localhot:3000" id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </Fragment>
    )
}

export default Home
