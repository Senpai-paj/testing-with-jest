const stack = require('../src/stack');

beforeEach(() => {
    while (stack.pop() !== undefined) {}
});

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});


test('pushing elements to the stack', () => {
    stack.push('chocolate');
    stack.push('strawberry');
    stack.push('vanilla');
    expect(stack.peek()).toBe('vanilla');
});

test('popping from an empty stack', () => {
    expect(stack.pop()).toBeUndefined();
});


