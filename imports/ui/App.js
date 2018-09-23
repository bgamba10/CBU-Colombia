import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";


import PostList from "./PostList";
import PostAdd from "./PostAdd";
import { Posts } from "../api/posts";
import Post from "./Post";

import "./style.css";


export class App extends Component {
  constructor(props) {
    super(props);

  }


  onVote(post, emoji) {
    let postObj = Posts.findOne(post._id);

    if (!postObj) {
      console.err("Post not found!");
      return;
    }

    postObj.voteCount+=1;
    if (postObj.votes[emoji]===undefined) {
      postObj.votes[emoji]=0;
    }
    postObj.votes[emoji]+=1;

    Posts.update(postObj._id,
      postObj);
  }

  onAdd(text) {
    if (!text) return;
    Posts.insert({
      text,
      voteCount:0,
      votes:{
        "🤡":0,
        "😡":0,
        "😇":0,
        "🏊":0
      }
    });

  }


  render() {
    return (
      <div className="App">
        <h1>Evolución de los Derechos de la Mujer en Colombia</h1>
        
        
        <div id="myCarousel" className="carousel slide i-am-centered-2" data-ride="carousel">
      
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
          </ol>

          
          <div className="carousel-inner">

            <div className="item active">
              <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/ui/col.jpg" alt="Colombia" />
              <div className="carousel-caption">
                <h3>¿Cómo nació el proyecto?</h3>

                <p>El proyecto se crea gracias al curso Colombia espacio tiempo y diferencia de la Universidad de los Andes. En este curso se abordan diferentes fuentes que tratan temas de etnicidad, genero, clases sociales y más. Como grupo elegimos el eje de indagación relacionado con las mujeres a través de la historia. Se escogió este medio de difusión pues ayuda a que todo el mundo lo puede utilizar y acceder desde cualquier parte del mundo pues solo se necesita internet y algún explorador web. Sumado este tipo de plataforma nos ayudara a mostrar esta problemática de manera dinámica y moderna.</p>
        
              </div>
            </div>

            <div className="item">
              <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/ui/col.jpg" alt="Colombia" />
              <div className="carousel-caption">
                 <h3>¿A quién va dirigido?</h3>

        <p>La intención de este proyecto es que cualquier persona pueda utilizarlo y ver como se ha comportado el trato con las mujeres a través de los tiempos. Sin embargo, tenemos un público objetivo principal el cual es estudiantes y profesores de nivel universitario y superiores para concientizarlo acerca de la situación por la que ha pasado y se enfrente el país en torno a la igualdad de género.</p>

              </div>
            </div>
          
            <div className="item">
              <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/ui/col.jpg" alt="Colombia" />
              <div className="carousel-caption">
                <h3>Tesis</h3>

        <p>A través de los años se ha podido evidenciar que la evolución en los derechos de sexualidad, educación y voto de las mujeres van a un ritmo más rápido que la evolución de sus estereotipos, lo cual ha generado un aplazamiento en la realización efectiva de los derechos de las mujeres. </p>

              </div>
            </div>

            <div className="item">
              <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/ui/col.jpg" alt="Colombia" />
              <div className="carousel-caption">
                <h3>¿Cuál es la importancia de este proyecto?</h3>

        <p>Queremos convencer al público de que este es un problema importante dado que consideramos que se debe consciente de los cambios en la concepción de la mujer para poder entender el impacto que ha tenido en el país, en la sociedad y en la actualidad. Esto es un problema que ha afectado y aun afecta a las mujeres en cualquier parte del mundo, gracias a estos estereotipos en la actualidad se ven diferentes movimientos y organizaciones que intentan velar por la igualdad y respeto de los derechos a las mujeres. Además, el país debe realizar un cambio de mentalidad con respecto a los estereotipos de la mujer. Al convencer al público de estas transiciones que se han tenido se pueden lograr cambios, se puede aportar a que la mujer pueda tener cada día un papel más importante y que se deje de llevar tan marcada esa imagen de la mujer en siglos pasados.</p>

              </div>
            </div>

            <div className="item">
              <img src="https://raw.githubusercontent.com/bgamba10/CBU-Colombia/master/imports/ui/col.jpg" alt="Colombia" />
              <div className="carousel-caption">
                <h3>Nuestro equipo</h3>

        <p>El equipo está conformado por Bibiana Gamba, Daniela Jaimes y Nicolás Acevedo. Somos un grupo de ingenieros de sistemas e industriales de la Universidad de los Andes.</p>

              </div>
            </div>
        
          </div>

         
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>


        
        <Post/>
        

        <div id = "footer">
        <h6>&copy; Daniela Jaimes, Nicolás Acevedo y Bibiana Gamba</h6>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired
};

export default withTracker(
  () => {
    return {
      posts: Posts.find({}, {sort: {voteCount:-1}}).fetch()
    };
  }
)(App);









