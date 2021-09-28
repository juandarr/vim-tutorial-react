/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import 'codemirror/keymap/vim';
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/dracula.css';

function App() {
    const objectPositioned = ' '.repeat(Math.floor(Math.random(10) * 10)) + '%' + ' '.repeat(Math.floor(Math.random(10) * 10)) + '\n';
    const upperLines = ' '.repeat(20) + '\n'.repeat(Math.floor(Math.random(10) * 10));
    const lowerLines = ' '.repeat(20) + '\n'.repeat(Math.floor(Math.random(10) * 10));
    const vimTest1 = objectPositioned + upperLines + lowerLines;
    return (<div className="App">
        <header className="App-header">
            <h1 > Simple Vim tutorial - Delete</h1>
            <p className="pb-8">
                Edit <code> src / App.js </code> and save to reload.
            </p>
            <div className="left-20 right-20 top-60 bottom-20 text-left">
                <CodeMirror
                    options={{
                        theme: 'dracula',
                        mode: 'js',
                        keyMap: 'vim'
                    }}
                    value={vimTest1}
                    height="300px"
                    onChange={(editor) => {
                        if (editor.getValue().includes('%')) {
                            //
                        } else {
                            console.log('value:', 'You win!');
                        }

                    }}
                /> </div>
        </header>
    </div>
    );
}

export default App;