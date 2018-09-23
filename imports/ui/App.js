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
        <Post/>
        

        <div id = "footer">
        <p>Icons made by <a href="https://www.flaticon.com/authors/popcorns-arts" title="Icon Pond">Icon Pond</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
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









