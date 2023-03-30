import {ProfileStatus} from "./ProfileStatus";
import {create} from "react-test-renderer";
import React from 'react';


describe("ProfileStatus component", () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'111'} updateStatus={() => {
        }}/>)
        const instance = component.getInstance()
        expect(instance?.props.status).toBe('111')
    });
    test('after creation span should be displayed with status', () => {
        const component = create(<ProfileStatus status={'111'} updateStatus={() => {
        }}/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType("span")
        expect(span.children.length).toBe(1)
    });
    test('after creation span should be contains correct status', () => {
        const component = create(<ProfileStatus status={'111'} updateStatus={() => {
        }}/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType("span")
        expect(span.children[0]).toBe('111')
    });
    test('after creation input shouldn`t be displayed with status', () => {
        const component = create(<ProfileStatus status={'111'} updateStatus={() => {
        }}/>)
        const root = component.root
        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            const span = root.findByType("input")
        }).toThrow()
    });
    test('input should be displayed in editMode', () => {
        const component = create(<ProfileStatus status={'111'} updateStatus={() => {
        }}/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType("span")
        span.props.onDoubleClick()
        // eslint-disable-next-line testing-library/await-async-query
        const input = root.findByType("input")
        expect(input.props.value).toBe('111')
    });
    test('callback should be called', () => {
        const mackCallback = jest.fn()
        const component = create(<ProfileStatus status={'111'} updateStatus={mackCallback}/>)
        const instance = component.getInstance();
        //@ts-ignore
        instance.diActivateEditMode()
        expect(mackCallback.mock.calls.length).toBe(1)
    })
})


