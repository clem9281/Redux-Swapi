import React from "react";
import { connect } from "react-redux";

import { CharacterList, LoadingPage } from "../components";
// import actions
import { fetchAction } from "../actions";
class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchAction();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <LoadingPage />;
    }
    if (this.props.error) {
      return <div>{this.props.error}</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
};

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchAction
  }
)(CharacterListView);
