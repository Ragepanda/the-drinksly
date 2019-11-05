import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import './Card.css';

class Card extends React.Component {
	constructor(props) {
        super(props); // ✅ We passed props
   
      }

	render()
	{

		return (
				<div className="4u">
					<div className="card">
					<Link to={this.props.route} className="image featured imgcard">
                        <img src={this.props.image_src} alt={this.props.title} />
                    </Link>
                    <div className="box boxcard">
                        <p>{this.props.title}</p>
                    </div>
                    </div>
				</div>
		);
	}

};

export default Card;