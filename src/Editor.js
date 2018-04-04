
import React, { Component } from 'react';
import Editor from 'react-medium-editor';

// Quill
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'



require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/roman.css');


class HTMLEditor extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
    }


    render() {

        var toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            ['link', 'image'],
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
            //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean']                                         // remove formatting button
          ];

        return (
            <React.Fragment>
                <ReactQuill value={this.state.text}
                    onChange={this.handleChange} 
                    modules= {{toolbar: toolbarOptions}}
                    theme='snow'
                    />
                {/* <Editor
                    tag="pre"
                    text={this.state.text}
                    onChange={this.handleChange}
                    options={
                        {
                            toolbar: {
                                buttons: [
                                    'bold',
                                    'italic',
                                    'underline',
                                    'strikethrough',
                                    'quote',
                                    'anchor',
                                    'image',
                                    'justifyLeft',
                                    'justifyCenter',
                                    'justifyRight',
                                    'justifyFull',
                                    'superscript',
                                    'subscript',
                                    'orderedlist',
                                    'unorderedlist',
                                    'pre',
                                    'outdent',
                                    'indent',
                                    'h2',
                                    'h3'
                                ],
                                static: true,
                                sticky: true
                            },
                            placeholder: {
                                text: 'Type your text',
                                hideOnClick: true
                            }
                        }
                    }
                /> */}
                <p>{this.state.text}</p>
            </React.Fragment>

        )
    }
}


export default HTMLEditor;
