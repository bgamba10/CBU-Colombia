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
      checkSexual: false
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
      checkEducacion: !this.state.checkEducacion
    })
  }

  onClickVoto() {
    this.setState({
      checkVoto: !this.state.checkVoto
    })
  }

  onClickSexual() {
    this.setState({
      checkSexual: !this.state.checkSexual
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
            <label><input type="checkbox" value="Educación" onClick ={this.onClickEducacion.bind(this)} />Educación</label>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="checkbox">
            <label><input type="checkbox" value="Voto" onClick ={this.onClickVoto.bind(this)}/>Voto</label>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="checkbox">
            <label><input type="checkbox" value="Sexualidad" onClick ={this.onClickSexual.bind(this)}/>Sexualidad</label>
          </div>
          </div>
        


        </div>
        </div>
        <hr/>

    
        <VerticalTimeline>



  {this.state.checkSexual && <VerticalTimelineElement
    className="vertical-timeline-element--left"
    date="1638"
    iconStyle={{ background: 'rgb(255, 161, 77) ', color: '#fff', padding: "20px"}}
    
  >
    <h3 className="vertical-timeline-element-title">El carnero</h3>
    <h4 className="vertical-timeline-element-subtitle">Sexualidad</h4>
    <p>
      Es una crónica perteneciente a las obras de las letras coloniales neogranadinas, (siglo XVII). Se enfoca principalmente en el control de la mujer y los territorios, y esto lo muestran mediante el ejemplo de Adán y Eva.
    </p>

    <button className="btn-sexualidad" onClick = {this.toggleHidden.bind(this)} >Ver más</button>
    {!this.state.isHidden && <div >
        <p><b>Estereotipo:</b> Muestra como la mujer por su belleza es una mala influencia para el hombre.</p>
        <p><b>Relación con la tesis:  </b>
        En esta se ve de donde vienen los estereotipos de control sobre la mujer y como esta es degradada a simplemente un objeto de belleza que corrompe a los hombres. En especial porque esta crónica fue escrita en el siglo XVII y en esta época aún no se contemplaban los derechos de la mujer.
        </p>
        <p>
        <b>Tipo de fuente:</b>
        Crónica  escrita
        </p>
     </div>}
    
      

  </VerticalTimelineElement> }

  {this.state.checkEducacion && <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1858 "
    iconStyle={{ background: 'rgb(116, 55, 188)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Manuela</h3>
    <h4 className="vertical-timeline-element-subtitle">Educación </h4>
    <p>
      Esta novela relata una historia entre una campesina (Manuela) y un joven letrado de Bogotá que acaba de llegar de los Estados Unidos. La relación que se muestra entre estos dos personajes es una amistad basada en la superación de la ignorancia y la búsqueda de conocimiento académico.  
    </p>

    <button className="btn-educacion" onClick = {this.toggleHidden1.bind(this)} >Ver más</button>

    {!this.state.isHidden1 && <div >
        <p><b>Estereotipo: </b> En esta novela se muestra como las mujeres de los pueblos generalmente son iletradas y son oprimidas por el género masculino, además refleja como los hombres si tienen acceso a la educación.</p>
    <p><b>Relación con la tesis:</b>  Esta novela muestra como las mujeres tenían restricción en el área de la educación y la sumisión ante el género masculino, pero plantea un personaje principal que rompe con todos estos estereotipos pues Manuela es una mujer independiente, que no esta de acuerdo con las duras reglas que impone la sociedad pues las cuestiona y en algunos casos contradice y no tiene miedo de decir lo que piensa y hacerse escuchar. Además, ella no cae enamorada y sumisa ante los pies del joven letrado como generalmente pasaba en esa época.  </p>
    <p>
    <b>Tipo de fuente:</b>
    Novela colombiana 

    </p>
    </div> }


  </VerticalTimelineElement> }
  
  {this.state.checkEducacion &&  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1867 "
    iconStyle={{ background: 'rgb(116, 55, 188)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">María</h3>
    <h4 className="vertical-timeline-element-subtitle">Educación </h4>
    <p>
      Esta historia relata la vida de María una joven educada pero idealista, de naturaleza domestica que no tiene voz ni voto en la sociedad. Ella representa el ideal de mujer frágil, débil, inocente y pura, que al final sufre una enfermedad y depende de su amado para salvarse. 
    </p>

    <button className="btn-educacion" onClick = {this.toggleHidden2.bind(this)} >Ver más</button>

    {!this.state.isHidden2 && <div >
    <p><b>Estereotipo: </b> 
    Muestra como la mujer debe tener una personalidad frágil y débil para que el hombre la cuide en el matrimonio.
    </p>
    <p><b>Relación con la tesis: </b> 
     Esta fuente muestra explícitamente como las mujeres eran percibidas en la sociedad. Como solo las de clase alta tenían educación, pero, aunque la tuvieran debían ser frágiles y no tenían un verdadero papel en la sociedad mas que ser amas de casa y esposas.
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Novela romántica colombiana 
    </p> 
    </div> }

  </VerticalTimelineElement> }

  {this.state.checkEducacion && <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1876 "
    iconStyle={{ background: 'rgb(116, 55, 188)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Una Holandesa en América</h3>
    <h4 className="vertical-timeline-element-subtitle">Educación </h4>
    <p>
      Relata la historia de una joven holandesa que se logró educar pues vivió en Holanda con su tía hasta que su madre muere y ahí decide viajar a América a encargarse de la hacienda que tenían y de su familia (padre y hermanos). 
    </p>


    <button className="btn-educacion" onClick = {this.toggleHidden3.bind(this)}> Ver más</button>
    {!this.state.isHidden3 && <div >
    <p><b>Estereotipo: </b> 
    Las mujeres románticas e idealistas que están sumisas ante los hombres y cuando este amor se daña o se pierde ellas mueren gracias a la pena amorosa que esto les produce. Como la mama de Lucia que fue engañada por su esposo y luego murió por amor.
    </p>
    <p><b>Relación con la tesis: </b> 
     Esta novela muestra a una mujer, fuerte, independiente, educada que no se deja engañar o detener por el rol que tenían las mujeres en esa época. Al contrario, ella critica esta idea de romanticismo y del amor, tiene sus propias ideas y no se deja vencer por las desilusiones amorosas.
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Novela colombiana 
    </p>
    </div> }

  </VerticalTimelineElement>}

  {this.state.checkVoto && <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1944 "
    iconStyle={{ background: 'rgb(15, 181, 196) ', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Derechos ciudadanos de la mujer en Colombia</h3>
    <h4 className="vertical-timeline-element-subtitle">Voto</h4>
    <p>
      Esta fuente hace un recorrido sobre los derechos de las mujeres en Colombia y como estos han evolucionado a través de los años desde la época de la independencia de la corona española. Además, pretende informar a mujeres sobre el tema de sus derechos que estaba siendo discutido por el gobierno de esa época.
    </p>

    <button className="btn-voto" onClick = {this.toggleHidden4.bind(this)}> Ver más</button>
    {!this.state.isHidden4 && <div >
    <p><b>Estereotipo: </b> 
    Las mujeres tienen derecho más como las creen seres débiles e inferiores no deberían poder ejercerlos por ejemplo el votar.
    </p>
    <p><b>Relación con la tesis: </b> 
     Las mujeres de la época ya tenían derechos, pero estas no los conocían ni podían ejercerlos pues aun la sociedad las veía como seres débiles e inferiores, entonces a pesar de que estaba escrito en la constitución la visión social que existía impedía que fueran aplicados. 
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Columna editorial de la revista femenina Mireya
    </p>
    </div> }

  </VerticalTimelineElement>}
  
  {this.state.checkSexual && <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1969 "
    iconStyle={{ background: 'rgb(255, 161, 77) ', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Píldora o Castidad</h3>
    <h4 className="vertical-timeline-element-subtitle">Sexualidad </h4>
    <p>
      La escritora de esta fuente periodística es una mujer que no está de acuerdo con algunas de las afirmaciones que hace la iglesia sobre el comportamiento que deberían tener las mujeres en la sociedad. Es colombiana e intenta dirigirse a otras mujeres para que se den cuenta de las limitaciones impuestas por la sociedad para ser felices.
    </p>

    <button className="btn-sexualidad" onClick = {this.toggleHidden5.bind(this)}> Ver más</button>
    {!this.state.isHidden5 && <div >
    <p><b>Estereotipo: </b> 
    La ideología que implanta la iglesia sobre la mujer, como esta debe ser casta pura y perfecta y por esto no apoya los anticonceptivos. 
    </p>
    <p><b>Relación con la tesis: </b> 
     Esta fuente esta enfocada a dar una crítica pues es incoherente la visión religiosa que se implanto en la sociedad con respecto a la mujer, que va en contra a los derechos y beneficios que tiene en la época.  Las mujeres ya deberían tener la capacidad de tomar decisiones con respecto a su sexualidad y no ser vistas solo como objetos sexuales para el placer de los hombres.
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Artículo de la revista “Mujer de América”
    </p>
    </div>}

  </VerticalTimelineElement>}
  
  {this.state.checkSexual && <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1995 "
    iconStyle={{ background: 'rgb(255, 161, 77)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Las mujeres de la historia de Colombia</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>}
 
 {this.state.checkSexual && <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1969 "
    iconStyle={{ background: 'rgb(255, 161, 77) ', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Píldora o Castidad</h3>
    <h4 className="vertical-timeline-element-subtitle">Sexualidad </h4>
    <p>
      La escritora de esta fuente periodística es una mujer que no está de acuerdo con algunas de las afirmaciones que hace la iglesia sobre el comportamiento que deberían tener las mujeres en la sociedad. Es colombiana e intenta dirigirse a otras mujeres para que se den cuenta de las limitaciones impuestas por la sociedad para ser felices.
    </p>

    <button className="btn-sexualidad" onClick = {this.toggleHidden6.bind(this)}>Ver más</button>
    {!this.state.isHidden6 && <div >
    <p><b>Estereotipo: </b> 
    La ideología que implanta la iglesia sobre la mujer, como esta debe ser casta pura y perfecta y por esto no apoya los anticonceptivos. 
    </p>
    <p><b>Relación con la tesis: </b> 
     Esta fuente esta enfocada a dar una crítica pues es incoherente la visión religiosa que se implanto en la sociedad con respecto a la mujer, que va en contra a los derechos y beneficios que tiene en la época.  Las mujeres ya deberían tener la capacidad de tomar decisiones con respecto a su sexualidad y no ser vistas solo como objetos sexuales para el placer de los hombres.
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Artículo de la revista “Mujer de América”
    </p>
    </div>}
  </VerticalTimelineElement>}


  {this.state.checkVoto && <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1944 "
    iconStyle={{ background: 'rgb(15, 181, 196) ', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Derechos ciudadanos de la mujer en Colombia</h3>
    <h4 className="vertical-timeline-element-subtitle">Voto</h4>
    <p>
      Esta fuente hace un recorrido sobre los derechos de las mujeres en Colombia y como estos han evolucionado a través de los años desde la época de la independencia de la corona española. Además, pretende informar a mujeres sobre el tema de sus derechos que estaba siendo discutido por el gobierno de esa época.
    </p>

    <button className="btn-voto" onClick = {this.toggleHidden7.bind(this)}> Ver más</button>
    {!this.state.isHidden7 && <div >
    <p><b>Estereotipo: </b> 
    Las mujeres tienen derecho más como las creen seres débiles e inferiores no deberían poder ejercerlos por ejemplo el votar.
    </p>
    <p><b>Relación con la tesis: </b> 
     Las mujeres de la época ya tenían derechos, pero estas no los conocían ni podían ejercerlos pues aun la sociedad las veía como seres débiles e inferiores, entonces a pesar de que estaba escrito en la constitución la visión social que existía impedía que fueran aplicados. 
    </p>
    <p>
    <b>Tipo de fuente: </b>
    Columna editorial de la revista femenina Mireya
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
