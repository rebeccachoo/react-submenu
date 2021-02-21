import React, { Component } from "react";
import User from "../../components/User/User";
import { NavLink, Route } from "react-router-dom";
import classes from "./Users.module.css";

class Users extends Component {
	state = {
		users: [
			{ id: 1, name: "Rebecca Choo" },
			{ id: 2, name: "David Green" },
			{ id: 3, name: "Robert Kim" },
			{ id: 4, name: "Paul Javits" },
		],
	};
	render() {
		return (
			<div>
				<div className={classes.Users}>
					<section>
						{this.state.users.map((user) => {
							return (
								<NavLink
									className="inactive"
									activeClassName={classes.active}
									key={user.id}
									to={{
										pathname: this.props.match.url + "/" + user.id,
										search: "?name=" + user.name,
									}}
								>
									<article>{user.name}</article>
								</NavLink>
							);
						})}
					</section>
					<div className={classes.Result}>
						<Route path={this.props.match.url + "/:userId"} component={User} />
					</div>
				</div>
			</div>
		);
	}
}

export default Users;
