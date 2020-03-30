class Header extends React.Component{
    render(){
        console.log(this.props)
        const {section} = this.props;
        return <header id="header"> 
            <h1 id="titolo">Quanto è fiero Conte? </h1> 
            
            </header>
    }
}

class Footer extends React.Component{
    render(){
        return <footer id="footer">  - Programmed by Lin Jiale -  </footer>
    }
}

class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            counter: 0
        };
    }

    onIncrement(){
        console.log("Increment");
        document.getElementById("image").src = "image/conte-smile.png";
        document.body.style.backgroundColor="pink";
        document.getElementById("click").style.color="hotpink";
        document.getElementById("click").style.fontSize="65px";
        this.setState({
            counter: this.state.counter +1
            
        })

    }

    onHover(){
        document.getElementById("image").src = "image/conte.png";
        document.body.style.backgroundColor="orange";
        document.getElementById("click").style.color="red";
    }

    offHover(){
        document.getElementById("image").src = "image/conte-ride.png";
        document.body.style.backgroundColor="aquamarine";
        document.getElementById("click").style.color="coral";
        document.getElementById("click").style.fontSize="45px";
        
    }
     

    render(){
        
        const {counter} = this.state;
        return <main id="main"> 
                    <h2 id="click">click!</h2>
                    <img src="image/conte-ride.png" onClick = {(e)=> this.onIncrement()} id="image" 
                    onMouseOver={(ev) => this.onHover()} onMouseOut={(eve) => this.offHover()}></img>
                    
                    <div id="counter"> Tantissimo: {counter}</div>
                    
             </main>
    }
}


class App extends React.Component{
    render(){
        return (
            <div id="app">
                <Header section = "- React JS -"/>
                <Main />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
)








//*********  Particles **********


particlesJS("particles-js", {
    particles: {
      number: { value: 55, density: { enable: true, value_area: 800 } },
      color: { value: "#FFFF00" },
      shape: {
        type: "star",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 12,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 11.22388442605866,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: {
          distance: 219.26084732136317,
          size: 7,
          duration: 0.7,
          opacity: 8,
          speed: 3
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 2 },
        remove: { particles_nb: 15 }
      }
    },
    retina_detect: true
  });
  
  