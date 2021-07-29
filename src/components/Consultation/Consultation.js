import './Consultation.css';

const Consultation = () => {
    <div className="consulta">

        <div className="formulario">
            <b>
                <i>
                    <u>
                        <div className="cabezera">
                            Envianos tu consulta.
                        </div>
                    </u>
                </i>
            </b>
            <br/>
            <form action="">
                <div class="formulario_consulta">
                    <div class="primera_linea">

                        <div class="nombre">
                            <label for="nombre_cliente" class="form-label">Nombre*</label>
                            <input type="text" class="form-control" id="nombre_cliente" placeholder="Nombre" required>    
                        </div>

                        <div class="apellido">
                            <label for="apellido_cliente" class="form-label">Apellido*</label>
                            <input type="text" class="form-control" id="apellido_cliente" placeholder="Apellido" required>    
                        </div>

                    </div>
                    
                    <div className="segunda_linea">

                        <div className="direccion">
                            <label for="direccion_cliente" className="form-label">Dirección*</label>
                            <input type="text" className="form-control" id="direccion_cliente" placeholder="Dirección" required>
                        </div>

                        <div className="localidad">
                            <label for="localidad_cliente" className="form-label">Localidad*</label>
                            <input type="text" className="form-control" id="localidad_cliente" placeholder="Localidad" required>
                        </div>

                    </div>
                    
                    <div className="tercera_linea">

                        <div className="mail">
                            <label for="mail_cliente" className="form-label">Dirección de E-Mail*</label>
                            <input type="text" className="form-control" id="mail_cliente" placeholder="E-Mail" required>  
                        </div>

                    </div>

                    <div className="cuarta_linea">

                        <div className="telefono">
                            <label for="telefono_cliente" className="form-label">Telefono</label>
                            <input type="text" className="form-control" id="telefono_cliente" placeholder="Telefono">
                        </div>

                    </div>

                    <div class="quinta_linea">

                        <div className="asunto">
                            <label for="asunto_cliente" className="form-label">Escriba el asunto de su consulta*</label>
                            <textarea className="form-control" id="asunto_cliente"></textarea>
                        </div>

                    </div>
                </div>
                
            </form>
        </div>

        <div className="contact">
                <b>
                    <i>Comunicate con nosotros.</i>
                </b>
                <a href="tel:+541162263170" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <b>11-62263170</b>
                </a>
                <a href="https://api.whatsapp.com/send?phone=541162263170" target="_blank"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    <b>11 62263170  </b>
                </a>
                <a href="mailto:astefil.inflables@gmail.com" id="email1" target="_blank"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    <b>astefil.inflables@gmail.com</b>
                </a>
        </div> 
    </div>
}

export default Consultation;