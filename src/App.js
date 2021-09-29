/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import 'codemirror/keymap/vim';
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/dracula.css';

function App() {
    const newTest = () => {
        const charactersPerLine = 30;
        const totalLines = 10;
        const objectHorizontalLocation = Math.floor(Math.random() * (charactersPerLine - 1)) + 1;
        const objectPositioned = ' '.repeat(objectHorizontalLocation - 1) + '%' + ' '.repeat(charactersPerLine - objectHorizontalLocation) + '\n';
        const objectVerticalLocation = Math.floor(Math.random() * (totalLines - 1)) + 1;
        const upperLines = (' '.repeat(charactersPerLine) + '\n').repeat(objectVerticalLocation - 1);
        const lowerLines = ((' '.repeat(charactersPerLine) + '\n').repeat(totalLines - objectVerticalLocation)).slice(0, -1);
        return upperLines + objectPositioned + lowerLines;
    }

    const initialTest = newTest();
    const [vimTest, setVimTest] = React.useState(initialTest);

    const [counter, setCounter] = React.useState(0);

    const resetGame = () => {
        setCounter(0);
        setVimTest(newTest());
    };

    return (<div className="App">
        <header className="App-header">
            <h1 className="pb-2 text-2xl"> Simple Vim tutorial</h1>
            <div className="pb-2 text-base">You have won <code>{counter}</code> times!</div>
            <div className="text-base border-2 border-blue-300 pt-4 pl-12 pr-12">
                <p>
                    Move: [  h  |  j  |  k  |  l  ]
                </p>
                <p className="pb-4">
                    Delete: x
                </p>
            </div>
            <div className="pt-4 pb-4 left-20 right-20 top-60 bottom-20 text-left">
                <CodeMirror
                    options={{
                        theme: 'dracula',
                        mode: 'js',
                        keyMap: 'vim'
                    }}
                    value={vimTest}
                    width="400px"
                    overflow="auto"
                    onChange={(editor) => {
                        if (editor.getValue().includes('%')) {
                            console.log('value:', editor.getValue());
                        } else {
                            console.log('value:', 'You win!');
                            setCounter(counter + 1);
                            setVimTest(newTest());
                        }
                    }}
                /> </div>
            <button className="pt-2 pb-2 pl-2 pr-2 text-lg font-bold bg-gradient-to-t border-2 border-red-200" onClick={resetGame}>Restart</button>
        </header>
    </div>
    );
}

export default App;