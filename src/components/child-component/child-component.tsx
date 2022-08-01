import { Component, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'child-component',
  shadow: true,
})
export class ChildComponent {

  @Event({bubbles: false}) valuechange: EventEmitter;

  render() {
    return <a href="javascript:;" onClick={() => this.valuechange.emit('child trigger')}>Hello, World! I'm child component</a>;
  }
}
