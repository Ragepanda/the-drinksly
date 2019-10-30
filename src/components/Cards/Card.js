import React from "react";
import { NavLink } from 'react-router-dom';
import './Card.css';

class Card extends React.Component {
	constructor(props) {
        super(props); // ✅ We passed props
        console.log(props);      // ✅ {}
        console.log(this.props); // ✅ {}
      }

	render()
	{

		return (
				<div className="4u">
					<div className="card">
					<a href={this.props.route} className="image featured imgcard">
                        <img src={this.props.image_src} alt={this.props.title} />
                    </a>
                    <div className="box boxcard">
                        <p>{this.props.title}</p>
                    </div>
                    </div>
				</div>
		);
	}

};

export default Card;