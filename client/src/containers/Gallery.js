import React, { Component } from "react";
import Api from "../Api/Api";
export default class Gallery extends Component {
  state = {
    inActiveImages: [],
    activeImage: {},
    count: 1,
    numberOfImages: 1
  };
  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    try {
      Api().then(response =>
        this.setState({
          inActiveImages: response.data.data,
          activeImage: response.data.data[0],
          numberOfImages: response.data.data.length-1
        })
      );
    } catch (err) {
      return err;
    }
  };

  componentWillMount() {
    setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({
      activeImage: this.state.inActiveImages[this.state.count]
    });

    this.state.count === this.state.numberOfImages
      ? this.setState({ count: 0 })
      : this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="gallery">
        {this.state.activeImage.images ? (
          <img
            height="164"
            width="336"
            src={this.state.activeImage.images.downsized.url}
            alt={this.state.activeImage.images.title}
          />
        ) : null}
      </div>
    );
  }
}
