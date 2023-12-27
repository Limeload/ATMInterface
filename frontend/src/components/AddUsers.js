import React, { Component } from "react";

class AddUsers extends Component {
    constructor(props) {
        super(props);
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.usernameRef = React.createRef();
    }

    submitUsers = async (e) => {
        e.preventDefault();
        const bankUser = {
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value,
            username: this.usernameRef.current.value,
        };

        try {
            const response = await fetch("http://localhost:8080/api/bankUsers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bankUser),
            });

            if (!response.ok) {
                throw new Error("Failed to submit user");
            }

            await response.json();
            window.location.reload();
        } catch (error) {
            console.error("Error submitting user:", error);
        }
    };

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitUsers}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input ref={this.firstNameRef} type="text" className="validate" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input ref={this.lastNameRef} type="text" className="validate" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input ref={this.usernameRef} type="text" className="validate" />
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddUsers;
