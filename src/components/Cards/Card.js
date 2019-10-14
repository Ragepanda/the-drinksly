import React from "react";
import { NavLink } from 'react-router-dom';

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
					<a href={this.props.route} className="image featured">
                        <img src={this.props.image_src} alt={this.props.title} />
                    </a>
                    <div className="box">
                        <p>{this.props.title}</p>
                    </div>
				</div>
		);
	}

};

export default Card;