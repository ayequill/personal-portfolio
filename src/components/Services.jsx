import { useState } from "react"

export default function Services() {
const [viewMore , setViewMore] = useState({view1: false, view2: false})

    function handleClick (e) {
        setViewMore(prev => {
            return e === 'view1' ? {
                ...prev, view1: !prev.view1
            }: e === 'view2' ? {...prev, view2: !prev.view2} : prev
        })
    }

    function closeModal () {
        setViewMore(prev => ({...viewMore, view1: false, view2: false}) )
    }
    console.log(viewMore);
    return (
        <>
            <section className="services section" id="services">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">What i offer</span>

                <div className="services__container container grid">
                    {/* <!--==================== SERVICES 1 ====================--> */}
                    <div className="services__content">
                        <div>
                            <i className="uil uil-web-grid services__icon"></i>
                            <h3 className="services__title">Ui/Ux <br/> Designer</h3>
                        </div>

                        <span onClick={()=>handleClick('view1')} className="button button--flex button--small button--link services__button">
                            View more
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>

                       {viewMore.view1 && <div className="services__modal">
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Ui/Ux <br/> Designer</h4>
                                <i onClick={closeModal} className="uil uil-times services__modal-close"></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I develop the user interface</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Web page development</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I create UX element interactions.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I position your company brand</p>
                                    </li>
                                </ul>
                            </div>
                        </div>}
                    </div>


                    {/* <!--==================== SERVICES 2 ====================--> */}

                    <div className="services__content">
                        <div>

                            <i className="uil uil-arrow services__icon"></i>
                            <h3 className="services__title">Frontend <br/> Developer</h3>
                        </div>

                        <span  onClick={()=>handleClick('view2')}  className="button button--flex button--small button--link services__button">
                            View more
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>

                        {viewMore.view2 && <div className="services__modal">
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Frontend <br/> Developer</h4>
                                <i onClick={closeModal} className="uil uil-times services__modal-close"></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I develop the user interface</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Web page development</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I create UX element interactions.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I position your company brand</p>
                                    </li>
                                </ul>
                            </div>
                        </div>}
                    </div>
                </div>

            </section>
        </>
    )

}