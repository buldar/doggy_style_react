import React from 'react';
import './App.css';
import Onecircle from "./Onecircle";
import Counter from "./Counter";


class App extends React.Component {
    state = {
        massId: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        counter: 0,
        rndId: 0,
    }

    componentDidMount() {
        setInterval(this.getRandomIndex, 1000)
    }

    getRandomIndex = () => {
        let item = Math.floor(Math.random() * 9);
        this.setState(
            {
                rndId: item,
            }
        )
    }
    catchCat = () => {
        this.setState(
            {
                counter: this.state.counter + 1,
            }
        )

    }
    notCatch = () => {
        alert('ЛОХ, СЛИЛСЯ!');
        // this.setState({
        //   counter: 0,
        this.setState(
            {
                counter: 0,
            }
        )
        // })
    }


    render = () => {
        let circleElements = this.state.massId.map((x, i) => <Onecircle id={i}
                                                                        img = {i === this.state.rndId ? "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAoQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAQSH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Aw4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAgAAAAAAAAAAAAAAAAAP/9k=" : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAAB5CAMAAAAUCIRZAAAAJFBMVEX+/v76+vqwsLDr6+u3t7fPz8/FxcX09PTb29u0tLS+vr7CwsIljoOsAAAAWElEQVR4nO3TwRGAIBAEQURA5fLPV/2QwvHojmBqq7YUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIMPxyW7Yxllra72PKztkC/czI2JMa/zWTV42dQCASdna5QAAAABJRU5ErkJggg=='}
                                                                        onClick={i === this.state.rndId ? this.catchCat : this.notCatch}
                                                                        className={i === this.state.rndId ? "show" : 'hide'}/>)
        return (

            <div className='wrapper'>
                {circleElements}
                <Counter val={this.state.counter}/>
            </div>
        );
    }
}

export default App;
