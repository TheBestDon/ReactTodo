var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  }); 

   it('should dispatch SET_SEARCH_TEST on input change', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    var searchText = 'Dog';
    var spy = expect.createSpy();
    
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var spy = expect.createSpy();
      var checkedTodo = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

      checkedTodo.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(checkedTodo.refs.showCompleted);

      expect(spy).toHaveBeenCalledWith(action);
  });
});