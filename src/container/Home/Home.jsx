import React, { Component } from 'react';
import NavbarComponent from './../Navbar-one/Navbar'
// import MainComponent from '../MainComponent/Main'
import HeroComponent from '../HeroComponent/Hero'

class Home extends Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <HeroComponent />

                {/* <MainComponent /> */}
            </div>
        );
    }
}

export default Home;


// {this.state.post.map((post) => {
//     return (
//       <Post
//         key={post.id}
//         data={post}
//         remove={this.handleRemove}
//         update={this.handleUpdate}
//       />
//     );




