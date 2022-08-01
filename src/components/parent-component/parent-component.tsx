import { Component, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'parent-component',
  shadow: true,
})
export class ParentComponent {

  @Event({bubbles: false}) valuechange: EventEmitter;

  render() {
    return <div><button onClick={() => this.valuechange.emit('parent trigger')}>parent emit</button><child-component></child-component></div>;
  }
}
