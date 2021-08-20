import './Consultation.css';
import Label from './../Label/Label';
import TextArea from './../TextArea/TextArea';

const Consultation = () => {
    return(
        <div className="consultation">
            <div className="form">
                <div className="title">
                    Envianos tu consulta.
                </div>
                <br/>
                <form>
                    <div className="formConsultation">
                        <div className="firstLine">
                            <div className="name">
                                <label>
                                    Nombre
                                </label>
                                <Label placeholder="Nombre" />
                            </div>
                            <div className="subname">
                                <label>
                                    Apellido
                                </label>
                                <Label placeholder="Apellido" />
                            </div>
                        </div>
                        <div className="secondLine">
                            <div className="location">
                                <label>
                                    Localidad
                                </label>
                                <Label placeholder="Localidad" />
                            </div>
                            <div className="street">
                                <label>
                                    Calle
                                </label>
                                <Label placeholder="Calle" />
                            </div>
                            <div className="height">
                                <label>
                                    Altura
                                </label>
                                <Label placeholder="Altura" />
                            </div>
                        </div>
                        <div className="thirdLine">
                            <div className="mail">
                                <label>
                                    Dirección de E-Mail
                                </label>
                                <Label placeholder="Dirección de E-Mail" />
                            </div>
                            <div className="phone">
                                <label>
                                    Telefono
                                </label>
                                <Label placeholder="Telefono" />
                            </div>
                        </div>
                        <div className="fourtLine">
                            <div className="matter">
                                <label>
                                    Escriba el asunto de su consulta
                                </label>
                                <TextArea />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Consultation;