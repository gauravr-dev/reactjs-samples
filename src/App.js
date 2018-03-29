import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import { Segment, Button, List } from 'semantic-ui-react';

import './App.css';

import HTMLEditor from './Editor';

class PageList extends Component {
  render() {
    return (
      <React.Fragment>
        <List width={12}>
          {
            this.props.pages.map(function (page, idx, pages) {
              return (
                <List.Item key={page.pageId}>
                  <Segment>
                    <List.Content floated='right'>
                      <Button icon="trello" />
                    </List.Content>
                    <List.Content>
                      <List.Header as="h2">{page.title}</List.Header>
                      <p>{page.description}</p>
                    </List.Content>
                  </Segment>
                </List.Item>
              )
            })
          }
        </List>
      </React.Fragment>
    );
  }
}



class App extends Component {

  constructor(props) {
    super(props)
    this.state = { pages: [] }
    const blogPages = [
      {
        "pageId": "1",
        "title": "About",
        "description": "This page will serve the listing of all blog entries",
        "content": "",
        "created": "21/03/2018",
        "updated": "21/03/2018"
      },
      {
        "pageId": "2",
        "title": "About",
        "description": "This is about us page.",
        "content": "",
        "created": "21/03/2018",
        "updated": "21/03/2018"
      },
      {
        "pageId": "3",
        "title": "Profile",
        "description": "This is profile page.",
        "content": "",
        "created": "21/03/2018",
        "updated": "21/03/2018"
      }
    ]
    this.state = { pages: blogPages }
  }

  componentDidMount() {

  }
  render() {
    return (
      <div>
        <PageList pages={this.state.pages} />

        <HTMLEditor />
      </div>
    );
  }
}

export default App;
