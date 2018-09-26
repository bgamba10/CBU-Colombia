import React, { Component } from "react";
import PropTypes from "prop-types";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Modal from 'react-modal';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state={
      isHidden: true,
      isHidden1: true,
      isHidden2: true,
      isHidden3: true,
      isHidden4: true,
      isHidden5: true,
      isHidden6: true,
      isHidden7: true,
      isHidden8: true,
      checkEducacion: false,
      checkVoto: false, 
      checkSexual: false, 
      inicial: true
    };
  }

 toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  toggleHidden1 () {
    this.setState({
      isHidden1: !this.state.isHidden1
    })
  }

  toggleHidden2 () {
    this.setState({
      isHidden2: !this.state.isHidden2
    })
  }

  toggleHidden3 () {
    this.setState({
      isHidden3: !this.state.isHidden3
    })
  }

  toggleHidden4 () {
    this.setState({
      isHidden4: !this.state.isHidden4
    })
  }

  toggleHidden5 () {
    this.setState({
      isHidden5: !this.state.isHidden5
    })
  }

  toggleHidden6 () {
    this.setState({
      isHidden6: !this.state.isHidden6
    })
  }

  toggleHidden7 () {
    this.setState({
      isHidden7: !this.state.isHidden7
    })
  }

  toggleHidden8 () {
    this.setState({
      isHidden8: !this.state.isHidden8
    })
  }

  renderVotes() {
    let res=[];
    for (let emoji in this.props.post.votes) {
      res.push(
        <button
          onClick={() =>
            this.props.onVote(
              this.props.post,
              emoji
            )}
          key={emoji}>{emoji} {this.props.post.votes[emoji]}</button>
      );
    }
    return res;
  }

  onClickEducacion() {
    this.setState({
      checkEducacion: !this.state.checkEducacion,
      inicial: false
    })
  }

  onClickVoto() {
    this.setState({
      checkVoto: !this.state.checkVoto,
      inicial: false
    })
  }

  onClickSexual() {
    this.setState({
      checkSexual: !this.state.checkSexual,
      inicial: false
    })
  }



  render() {
    return (
      <div className="Post">
        
        <h2>Filtra la información por el derecho que más te interese</h2>


    <div className="i-am-centered">
        <div className="row">
        <div className="col-sm-4">
          <div className="checkbox">
            <label><input type="checkbox" value="Educación" onClick ={this.onClickEducacion.bind(this)}  />Educación</label>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="checkbox">
            <label><input type="checkbox" value="Voto" onClick ={this.onClickVoto.bind(this)} />Voto</label>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="checkbox">
            <label><input type="checkbox" value="Sexualidad" onClick ={this.onClickSexual.bind(this)} />Sexualidad</label>
          </div>
          </div>
        


        </div>
        </div>
        <hr/>

    
        <VerticalTimeline>



  {(this.state.checkSexual || this.state.inicial) && <VerticalTimelineElement
    className="vertical-timeline-element--left"
    date="1638"
    iconStyle={{ background: 'rgb(255, 161, 77) ', color: '#fff', padding: "20px"}}
    
  >
    <h3 className="vertical-timeline-element-title">El carnero</h3>
    <h4 className="vertical-timeline-element-subtitle">Sexualidad</h4>
    <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/imge/adan-y-eva.jpg" width="130px"/>
    <p>
      Es una crónica perteneciente a las obras de las letras coloniales neogranadinas (siglo XVII). 
      Se enfoca principalmente en el control de la mujer y los territorios, lo cual se muestra 
      mediante el ejemplo de Adán y Eva.
    </p>

    <button className="btn-sexualidad" onClick = {this.toggleHidden.bind(this)} >Ver más</button>
    {!this.state.isHidden && <div >
        <p><b>Estereotipo:</b> Muestra como la mujer por su belleza es una mala influencia para el hombre y debe ser controlada.</p>
        <p><b>Relación con la tesis:  </b>
        A lo largo de esta crónica se ve de donde vienen los estereotipos de control sobre la mujer y 
        cómo esta es degradada a simplemente un objeto de belleza que corrompe a los hombres. 
        Es importante resaltar que esta crónica fue escrita en el siglo XVII y en esta época aún no se 
        contemplaban los derechos de la mujer, pero la narración habla de cómo en Colombia se veía a la 
        mujer y de donde vienen mentalidades futuras.
        </p>
        <p>
        <b>Tipo de fuente:</b>
        Crónica  escrita
        </p>
     </div>}
    
      

  </VerticalTimelineElement> }

  {(this.state.checkEducacion  || this.state.inicial) && <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1858 "
    iconStyle={{ background: 'rgb(116, 55, 188)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Manuela</h3>
    <h4 className="vertical-timeline-element-subtitle">Educación </h4>
    <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/imge/Manuela.jpg" width="130px"/>
    <p>
      Esta novela relata una historia entre una campesina (Manuela) y un jóven letrado de Bogotá 
      que acaba de llegar de los Estados Unidos. La relación que tienen estos dos personajes 
      es de una amistad basada en la superación de la ignorancia y la búsqueda de conocimiento académico.  
    </p>

    <button className="btn-educacion" onClick = {this.toggleHidden1.bind(this)} >Ver más</button>

    {!this.state.isHidden1 && <div >
        <p><b>Estereotipo: </b> En esta novela se muestra cómo las mujeres de los 
        pueblos generalmente son iletradas y son oprimidas por el género masculino. 
        En contraste, refleja como los hombres son los únicos que tienen acceso a la educación.</p>
    <p><b>Relación con la tesis:</b>  Esta novela muestra como las mujeres tenían 
    restricción en el área de la educación y la sumisión ante el género masculino. 
    Aunque, plantea un personaje principal que rompe con todos estos estereotipos, pues 
    Manuela es una mujer independiente, que no está de acuerdo con las duras reglas que 
    impone la sociedad pues las cuestiona, en algunos casos las contradice y no tiene miedo 
    de decir lo que piensa y hacerse escuchar. Cabe resaltar que, ella no cae enamorada y sumisa 
    ante los pies del jóven letrado como generalmente pasaba en esa época, otro aspecto que rompe con los
    estereotipos del momento.  </p>
    <p>
    <b>Tipo de fuente:</b>
    Novela colombiana 

    </p>
    </div> }


  </VerticalTimelineElement> }
  
  {(this.state.checkEducacion  || this.state.inicial) &&  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1867 "
    iconStyle={{ background: 'rgb(116, 55, 188)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">María</h3>
    <h4 className="vertical-timeline-element-subtitle">Educación </h4>
    <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/imge/La%20maria.jpg" width="130px"/>
    <p>
      Esta es una novela romántica que cuenta la historia de la vida de María una jóven educada pero idealista, 
      de naturaleza domestica que no tiene voz ni voto en la sociedad. 
      Ella representa el ideal de mujer frágil, débil, inocente y pura, que al 
      final sufre una enfermedad y depende de su amado para salvarse. 
    </p>

    <button className="btn-educacion" onClick = {this.toggleHidden2.bind(this)} >Ver más</button>

    {!this.state.isHidden2 && <div >
    <p><b>Estereotipo: </b> 
    Muestra como la mujer debe tener una personalidad frágil y débil para 
    que el hombre la cuide en el matrimonio.
    </p>
    <p><b>Relación con la tesis: </b> 
     Esta fuente muestra explícitamente como las mujeres eran percibidas en la sociedad del siglo XIX. 
     Se puede ver, como sólo las de clase alta tenían educación, pero a pesar de tenerla debían ser frágiles
      y no tenían un verdadero papel en la sociedad más que ser amas de casa y esposas.
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Novela romántica colombiana 
    </p> 
    </div> }

  </VerticalTimelineElement> }

  {(this.state.checkEducacion || this.state.inicial) &&  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1876 "
    iconStyle={{ background: 'rgb(116, 55, 188)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Una Holandesa en América</h3>
    <h4 className="vertical-timeline-element-subtitle">Educación </h4>
    <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/imge/220px-Soledad_Acosta_by_Diaz_Picon.jpg" width="130px"/>
    <p>
      Relata la historia de una joven holandesa que se logró educar pues vivió en Holanda 
      con su tía hasta el fallecimiento de su madre. En ese momento, decide viajar a América a encargarse de la 
      hacienda que tenían y de su familia compuesta por su padre y sus hermanos. 
    </p>


    <button className="btn-educacion" onClick = {this.toggleHidden3.bind(this)}> Ver más</button>
    {!this.state.isHidden3 && <div >
    <p><b>Estereotipo: </b> 
    Las mujeres románticas e idealistas. Ellas son sumisas ante los hombres y cuando 
    este amor se daña o se pierde, ellas mueren a causa de la pena amorosa que esto les produce. 
    Como en este caso la mamá de Lucía que fue engañada por su esposo y luego murió de amor.
    </p>
    <p><b>Relación con la tesis: </b> 
     Esta novela muestra a la holandesa como una mujer fuerte, independiente, educada que no se deja engañar 
     o detener por el rol que tenían las mujeres en esa época. Al contrario, ella critica 
     esta idea de romanticismo y del amor, tiene sus propios ideales y no se deja vencer 
     por las desilusiones amorosas.
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Novela colombiana 
    </p>
    </div> }

  </VerticalTimelineElement>}

  {(this.state.checkVoto  || this.state.inicial) && <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1944 "
    iconStyle={{ background: 'rgb(15, 181, 196) ', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Derechos ciudadanos de la mujer en Colombia</h3>
    <h4 className="vertical-timeline-element-subtitle">Voto</h4>
    <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/imge/Derechos%20ciudadanos%20de%20la%20mujer%20en%20Colombia.JPG" width="130px"/>
    <p>
      Esta fuente hace un recorrido sobre los derechos de las mujeres en Colombia 
      y cómo estos han evolucionado a través de los años, comenzando desde la época de la independencia 
      de la corona española. Además, pretende informar a mujeres sobre sus derechos 
      que en ese momento estaban siendo discutidos por el gobierno.
    </p>

    <button className="btn-voto" onClick = {this.toggleHidden4.bind(this)}> Ver más</button>
    {!this.state.isHidden4 && <div >
    <p><b>Estereotipo: </b> 
    Las mujeres tienen derecho, mas como las creen seres débiles e inferiores no se les da la oportunidad 
    de ejercer libremente sus derechos, por ejemplo el derecho de votar.
    </p>
    <p><b>Relación con la tesis: </b> 
     Las mujeres de la época ya tenían derechos, pero estas no los conocían ni podían 
     ejercerlos pues aun la sociedad las veía como seres débiles e inferiores. Es por esto que, 
     a pesar de que estaba escrito en la constitución la visión social que existía en el momento 
     impedía que fueran aplicados. 
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Columna editorial de la revista femenina Mireya
    </p>
    </div> }

  </VerticalTimelineElement>}
  
  {(this.state.checkSexual || this.state.inicial) && <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1969 "
    iconStyle={{ background: 'rgb(255, 161, 77) ', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Píldora o Castidad</h3>
    <h4 className="vertical-timeline-element-subtitle">Sexualidad </h4>
    <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/imge/Image%209-26-18%20at%203.38%20PM.jpg" width="130px"/>
    <p>
      La escritora de esta fuente periodística es una mujer que no está de acuerdo 
      con algunas de las afirmaciones que hace la iglesia sobre el comportamiento 
      que deberían tener las mujeres en la sociedad. Es una mujer colombiana que intenta dirigirse 
      a otras mujeres para que se den cuenta de las limitaciones impuestas por la sociedad para ser felices.
    </p>

    <button className="btn-sexualidad" onClick = {this.toggleHidden5.bind(this)}> Ver más</button>
    {!this.state.isHidden5 && <div >
    <p><b>Estereotipo: </b> 
    La ideología que implanta la iglesia sobre la mujer, como debe ser casta, pura 
    y perfecta, razón por la cual no apoya los anticonceptivos. 
    </p>
    <p><b>Relación con la tesis: </b> 
     Esta fuente esta enfocada a dar una crítica, pues es incoherente la visión religiosa 
     que se implantó en la sociedad colombiana con respecto a la mujer, que va en contra a los derechos 
     y beneficios que tiene en la época.  Las mujeres ya deberían tener la capacidad de 
     tomar decisiones con respecto a su sexualidad y no ser vistas solo como objetos 
     sexuales para el placer de los hombres.
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Artículo de la revista “Mujer de América”
    </p>
    </div>}

  </VerticalTimelineElement>}
  
  {(this.state.checkVoto || this.state.inicial) && <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1995 "
    iconStyle={{ background: 'rgb(15, 181, 196) ', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Las Mujeres de la Historia de Colombia</h3>
    <h4 className="vertical-timeline-element-subtitle">Voto</h4>
    <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/imge/Las%20mujeres%20de%20la%20historia%20de%20Colombia.jpg" width="130px"/>
    <p>
      Este texto muestra cómo las normas jurídicas de Colombia están enfocadas 
      en imponer ideas o condiciones que generalmente están guiadas para beneficiar a las 
      personas poderosas de Bogotá. Al mismo tiempo, estas normas esperan penalizar y desmotivar 
      la utilización del mecanismo de participación o expresión. Sumado a esto, el autor 
      pretende mostrar y analizar cómo las diferentes mentalidades y evoluciones en la 
      historia del país se pueden entender y ver con claridad, si se miran y estudian las 
      normas jurídicas que regulan las relaciones públicas y privadas de las personas.
    </p>

    <button className="btn-voto" onClick = {this.toggleHidden8.bind(this)}> Ver más</button>
    {!this.state.isHidden8 && <div >
    <p><b>Estereotipo: </b> 
    Mujer vulnerable y débil, lo cual le quita la posibilidad de opinión y pensamiento 
    propio y la volvía fácilmente influenciable por la figura masculina.
    </p>
    <p><b>Relación con la tesis: </b> 
     Se relaciona ya que establece que existe una gran diferencia entre la teoría de los derechos 
     que existen y la realidad que se vive en el país. Lo anterios, gracias a que los que tenían 
     verdaderos derechos eran los hombres alfabetos y propietarios.  Además, a las mujeres 
     se les vulneraban significantes derechos, al casarse perdían su nacionalidad y acogían 
     la de su marido. No tenían ciudadanía pues se decía que no estaban destinadas a gobernar, 
     a pesar de que en 1853 la mujer consiguió el derecho al voto. Mas se dudaba que esto 
     fuera algo beneficioso ya que, se tenía la mentalidad de que el voto no iba a ser a 
     conciencia sino que iba a estar influenciado por alguna figura masculina cercana a la mujer, ya fuera un 
     papá, hermano o esposo. 
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Libro
    </p>
    </div> }


  </VerticalTimelineElement>}
 
 {(this.state.checkEducacion || this.state.inicial) && <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2001 "
    iconStyle={{ background: 'rgb(116, 55, 188)  ', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">El Jardín</h3>
    <h4 className="vertical-timeline-element-subtitle">Educación  </h4>
    <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/imge/El%20Jard%C3%ADn.jpg" width="130px"/>
    <p>

      Esta historia relata la vida de una mujer que en su juventud trató de estudiar 
      a peasr de las críticas, pero que no tuvo éxito. Luego, se escapa y termina 
      afectada por varios conflictos armados del país. Al final, cuenta cuál es su rol 
      y participación en los momentos y entornos de violencia y cultivos ilícitos.
    </p>

    <button className="btn-educacion" onClick = {this.toggleHidden6.bind(this)}>Ver más</button>
    {!this.state.isHidden6 && <div >
    <p><b>Estereotipo: </b> 
    La mujer no debe estudiar y debe ser ama de casa mientras su marido se encarga de 
    trabajar y conseguir el sustento del hogar. 
    </p>
    <p><b>Relación con la tesis: </b> 
     En la crónica de Molano es posible percibir cómo beneficiario a los hombres con 
     poder especialmente. Estos individuos son quienes controlan las tierras y el 
     destino de las mujeres. Al comienzo los hermanos no querían que la mujer estudiara 
     a pesar de que tenia todo el derecho de hacerlo y después cuando se caso le tocó 
     resignarse a ser simplemente la ama de casa encargada de cuidar a los niños.
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Crónica escrita 
    </p>
    </div>}
  </VerticalTimelineElement>}


  {(this.state.checkEducacion || this.state.inicial) && <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2011 "
    iconStyle={{ background: 'rgb(116, 55, 188) ', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Otra amada y otro paisaje para nuestro siglo XIX. Soledad Acosta de Samper y Eugenio Díaz frente a María</h3>
    <h4 className="vertical-timeline-element-subtitle">Educación </h4>
    <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/imge/Carolina%20Alzate.%20“Otra%20amada%20y%20otro%20paisaje%20para%20nuestro%20siglo%20XIX.%20Soledad%20Acosta%20de%20Samper%20y%20Eugenio%20D%C3%ADaz%20frente%20a%20Mar%C3%ADa.jpg" width="130px"/>
    <p>
      Este texto pretende mostrar cómo la literatura tiene una alta influencia en los 
      estereotipos que se tienen y también en los derechos de las mujeres. También, cómo otras 
      mujeres que leen estos textos se ven influenciadas en la forma en que ven el mundo, su rol, 
      sus capacidades y lo que significa ser mujer. Esto lo realiza mediante la comparación 
      de tres libros: 
<ul>
<li>La María </li>
<li>Manuela </li>
<li>Una Holandesa en América </li>
</ul>

    </p>

    <button className="btn-educacion" onClick = {this.toggleHidden7.bind(this)}> Ver más</button>
    {!this.state.isHidden7 && <div >
    <p><b>Estereotipo: </b> 
    Muestra los estereotipos de la mujer en la época del romanticismo y los de las mujeres en los 
    libros que intentaban romper con el romanticismo y todos sus planteamientos.
    </p>
    <p><b>Relación con la tesis: </b> 
     Esta lectura muestra como la literatura fomenta y refuerza los estereotipos de la sociedad, 
     lo cual hace que sea más fácil vulnerar los derechos de las mujeres pues ahora incluso ellas 
     van a creer que su rol es ser sumisas, no hacerse escuchar y no hacerse respetar. Además, las concentra 
     en leer historia románticas e idealistas y no a preocuparse por los problemas reales de la 
     sociedad en la que viven. 
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Artículo de investigación universitaria 
    </p>
    </div> }

  </VerticalTimelineElement> }
  
</VerticalTimeline>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  onVote: PropTypes.func.isRequired
};
