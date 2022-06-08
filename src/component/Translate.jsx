// API key: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, {useState} from 'react'
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import {ButtonGroup, DropdownButton, FormControl, InputGroup, SplitButton} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'English',
        value: 'en'
    }
]


const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="label label-default mt-3">Enter some text</div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Typing some text"
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value)
                    }}
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Dropdown label="Select a Language"
                      selected={language} onSelectedChange={setLanguage}
                      options={options}/>
            <hr/>
            <h3 className="ui header">Output</h3>

            <Convert language={language} text={text}/>
        </div>

    );
};

export default Translate;

