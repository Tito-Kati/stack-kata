import {Stack} from '../../src/Stack'

describe('Stack', () => {
    let stack: Stack

    beforeEach(() => {
        stack = new Stack()
    });

    it('should be empty when initialized', () => {
        expect(stack.isEmpty()).toBe(true)
    });

    it('should return zero when initialized', () => {
        expect(stack.size()).toBe(0)
    });

    it('should return one when push one time', () => {
        stack.push('foo')
        expect(stack.size()).toBe(1)
    });
});
