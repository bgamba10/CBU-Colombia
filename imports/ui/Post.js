import React, { Component } from "react";
import PropTypes from "prop-types";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Modal from 'react-modal';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state={
      isHidden: true

    };
  }

 toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
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




  render() {
    return (
      <div className="Post">
        
        <h2>Filtra la información por el derecho que más te interese</h2>


    <div className="i-am-centered">
        <div className="row">
        <div className="col-sm-4">
          <div className="checkbox">
            <label><input type="checkbox" value="Educación"/>Educación</label>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="checkbox">
            <label><input type="checkbox" value="Voto"/>Voto</label>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="checkbox">
            <label><input type="checkbox" value="Sexualidad"/>Sexualidad</label>
          </div>
          </div>
        


        </div>
        </div>
        <hr/>

    
        <VerticalTimeline>



  <VerticalTimelineElement
    className="vertical-timeline-element--left"
    date="1638"
    iconStyle={{ background: 'rgb(255, 161, 77) ', color: '#fff', padding: "20px"}}
    
  >
    <h3 className="vertical-timeline-element-title">El carnero</h3>
    <h4 className="vertical-timeline-element-subtitle">Sexualidad</h4>
    <p>
      Es una crónica perteneciente a las obras de las letras coloniales neogranadinas, (siglo XVII). Se enfoca principalmente en el control de la mujer y los territorios, y esto lo muestran mediante el ejemplo de Adán y Eva.
    </p>
    <button onClick = {this.toggleHidden.bind(this)} >ver maaaassss</button>
    {!this.state.isHidden && <div >
        <p>Estereotipo: Muestra como la mujer por su belleza es una mala influencia para el hombre.</p>
          <p>Relación con la tesis:  
          En esta se ve de donde vienen los estereotipos de control sobre la mujer y como esta es degradada a simplemente un objeto de belleza que corrompe a los hombres. En especial porque esta crónica fue escrita en el siglo XVII y en esta época aún no se contemplaban los derechos de la mujer.
          </p>
          <p>
          Tipo de fuente:
          Crónica  escrita
          </p>
     </div>}
    
      
    

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(116, 55, 188)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(116, 55, 188)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(116, 55, 188)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(255, 161, 77)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(255, 161, 77)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(255, 161, 77)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(15, 181, 196)', color: '#fff' }}
    date="1996"
    
  />
</VerticalTimeline>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  onVote: PropTypes.func.isRequired
};
