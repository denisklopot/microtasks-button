import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Components/Button";

function App() {
    /*const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Hello! I'm Vasya")
    }
    const mySecondSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Hello! I'm Ivan")
    }*/

    /*const onClickHandler = (name: string) => {
        console.log(name)
    }*/

    const button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const button3Foo = () => {
        console.log("I'm stupid Button")
    }


    return (
        <div className="App">
            {/*<button onClick={(event) => {
                console.log("Hello!")
            }}>MyYouTubeChannel-1
            </button>*/}
            {/*<button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')}>MyYouTubeChannel-1
            </button>
            <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler('Ivan')}>MyYouTubeChannel-2
            </button>*/}
            {/*<button>MyYouTubeChannel-1</button>
            <button>MyYouTubeChannel-2</button>*/}
            <Button name={'MyYouTubeChannel-1'} callBack={() => button1Foo("I'm Vasya", 21)}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => button2Foo("I'm Ivan", 24)}/>
            <Button name={'Stupid Button'} callBack={button3Foo}/>
        </div>
    );
}

export default App;
