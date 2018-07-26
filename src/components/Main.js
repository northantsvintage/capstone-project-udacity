import React from 'react';
import Map from './Map';
import './Main.css';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';

// const restaurants = [
//     {
//       "id": "Restaurant 1",
//       "title": "Restaurant 1",
//       "name": "Restaurant 1",
//       "category": ["Restaurant 1", "Restaurant 1"],
//       "position": { "lat": 52.2305, "lng": 0.9037 }
//     },
//     {
//         "id": "Restaurant 2",
//         "title": "Restaurant 2",
//         "name": "Restaurant 2",
//         "category": ["Restaurant 2", "Restaurant 2"],
//         "position": { "lat": 52.2405, "lng": 0.9027 }
//     },
//     {
//         "id": "Restaurant 3",
//         "title": "Restaurant 3",
//         "name": "Restaurant 3",
//         "category": ["Restaurant 3", "Restaurant 3"],
//         "position": { "lat": 52.1405, "lng": 0.9327 }
//     },
//     {
//         "id": "Restaurant 4",
//         "title": "Restaurant 4",
//         "name": "Restaurant 4",
//         "category": ["Restaurant 4", "Restaurant 4"],
//         "position": { "lat": 52.3405, "lng": 0.9427 }
//     },
//     {
//         "id": "Restaurant 5",
//         "title": "Restaurant 5",
//         "name": "Restaurant 5",
//         "category": ["Restaurant 5", "Restaurant 5"],
//         "position": { "lat": 52.2475, "lng": 0.9127 }
//     }
 
//   ]
  

class Main extends React.Component {
    handleClick() {
        // toggles the menu opened state
        this.setState({ isMenuOpened: !this.state.isMenuOpened });
      }
      componentWillMount() {
        // sets the initial state
        this.setState({
          isMenuOpened: false
        });
      }
    render() {
        return(
            <div>

                <OffCanvas width={300} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={"left"}>
                    <OffCanvasBody className="bodyClass" style={{fontSize: '30px'}}>
                    <p><a href={null} onClick={this.handleClick.bind(this)}>
                    <svg>
                        <rect x={10} y={15} className="hamburger-element" width={40} height={4}/>
                        <rect x={10} y={27} className="hamburger-element" width={40} height={4}/>
                        <rect x={10} y={39} className="hamburger-element" width={40} height={4}/>
                    </svg>
                    </a></p>
                    <Map />
                    </OffCanvasBody>
                    <OffCanvasMenu className="menuClass">
                    <p><a href={null} 
                        onClick={this.handleClick.bind(this)} 
                        style={{
                            backgroundColor: '#ddd',
                            fontSize: 40
                          }}
                          >X</a></p>
                    
                    </OffCanvasMenu>
                </OffCanvas>
            </div>
        )
    }
}

export default Main