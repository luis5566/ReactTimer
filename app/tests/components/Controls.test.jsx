var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      //Look for a button with a text of 'Pause'
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });
  });

  describe('render', () => {
    it('should render start when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      //Look for a button with a text of 'Pause'
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });

});
