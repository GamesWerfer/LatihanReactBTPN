import React from 'react';
import { shallow } from 'enzyme';
import TodoPage from './TodoPage';
import {postTodo, getTodo} from '../services/TodoServices';
import axios from 'axios';

jest.mock('axios');

jest.mock('../services/TodoServices', () => ({
    postTodo: jest.fn(),
    getTodo: jest.fn()
}))

describe('TodoPages', () => {
    describe('#render', () => {
        it('should render all todo pages components correctly when invoked', () => {
            //Arrange
            const wrapper = shallow(<TodoPage/>);
            console.log(wrapper.debug());
        })
    })

    describe('#onClick', () => {
        it('should post a new todo when invoked', () => {
            //Arrange
            postTodo.mockResolvedValue({});
            const wrapper = shallow(<TodoPage/>);
            const { onClick } = wrapper.find('button').at(0).props();
            const mockedPostTodo = jest.fn();

            //Action
            onClick();

            //Assertion
            expect(mockedPostTodo).toHaveBeenCalled();
        })
    })
})
