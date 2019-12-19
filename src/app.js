import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

class App extends Component {

    // constructor() {
    //     super();
    //     this.state = { displayBio: false };

    //     console.log('Component this', this);

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    // readMore() {
    //     console.log('readMore this', this)
    //     // this.setState({ displayBio: true});
    // }

    // showLess() {
    //     this.setState({ displayBio: false});
    // }
    
    render() {
        return (
            <div>
                <img src={profile} alt='profile' className="profile"></img>
                <h1>Hello!</h1>
                <p>My name is Cristina. I'm a software engineer.</p>
                <p>I'm always looking forward to work on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Batam, and code everyday.</p>
                            <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                            <p>Besides coding, I also love dance and sleeping!</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>

                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;