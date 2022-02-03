import { Component } from "react";
//import { useState } from "react";

class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foundation: "Sallad",
      protein: "Kycklingfilé",
      dressing: "Ceasardressing",
      extras: new Array(
        Object.keys(this.props.inventory).filter(
          (name) => this.props.inventory[name].extra
        ).length
      ).fill(false)
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "extras") {
      let pos = event.target.id;
      let tempArray = this.state.extras;
      tempArray[pos] = !tempArray[pos];
      this.setState({ extras: tempArray });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  handleSubmit(event) {
    let tempExtras = Object.keys(this.props.inventory).filter(
      (name) => this.props.inventory[name].extra
    );
    alert(
      "Your sallad contains: " +
        this.state.foundation +
        " & " +
        this.state.protein +
        " & " +
        this.state.dressing +
        " & " +
        tempExtras.reduce((accExtras, currExtra, index) => {
          if (this.state.extras[index]) {
            return accExtras + currExtra + ", ";
          } else {
            return accExtras;
          }
        }, "")
    );
    event.preventDefault();
  }

  render() {
    let foundation = Object.keys(this.props.inventory).filter(
      (name) => this.props.inventory[name].foundation
    );

    let protein = Object.keys(this.props.inventory).filter(
      (name) => this.props.inventory[name].protein
    );

    let extras = Object.keys(this.props.inventory).filter(
      (name) => this.props.inventory[name].extra
    );

    let dressing = Object.keys(this.props.inventory).filter(
      (name) => this.props.inventory[name].dressing
    );

    return (
      <div className="continer col-12">
        <form onSubmit={this.handleSubmit}>
          <div className="row h-200 p-5 bg-light border rounded-3">
            <h2>Välj innehållet i din sallad</h2>
            <div>
              <div>
                <label className="p-1">
                  Välj bas:{" "}
                  <select
                    name="foundation"
                    value={this.state.foundation}
                    onChange={this.handleChange}
                  >
                    {foundation.map((name) => (
                      <option value={name}>{name} </option>
                    ))}
                  </select>
                </label>
                <input type="submit" value="Submit" />
                <div>
                  <label className="p-1">
                    Välj gainz:{" "}
                    <select
                      name="protein"
                      value={this.state.protein}
                      onChange={this.handleChange}
                    >
                      {protein.map((name) => (
                        <option value={name}>{name}</option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <h className="p-3"> Välj tillbehör: </h>
            {extras.map((name, index) => (
              <div key={name} className="col-4">
                <input
                  type="checkbox"
                  name="extras"
                  id={index}
                  value={this.state.extras}
                  onChange={this.handleChange}
                />{" "}
                {name}
              </div>
            ))}
            <label className="p-1">
              Välj dressing:{" "}
              <select
                name="dressing"
                value={this.state.dressing}
                onChange={this.handleChange}
              >
                {dressing.map((name) => (
                  <option value={name}>{name}</option>
                ))}
              </select>
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default ComposeSalad;