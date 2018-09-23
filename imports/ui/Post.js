import React, { Component } from "react";
import PropTypes from "prop-types";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state={

    };
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

        <hr/>

    
        <VerticalTimeline>



  <VerticalTimelineElement
    className="vertical-timeline-element--left"
    date={"2011"}
    iconStyle={{ background: 'rgb(116, 55, 188)', color: '#fff', padding: "20px"}}
    icon={<i className="fa fa-check" aria-hidden="true" ></i>}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
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
