import { Stack } from '../../src/Stack'

describe('Stack', () => {
    it('should be empty when initialized', () => {
        const stack = new Stack()

        expect(stack.isEmpty()).toBe(true)
    });
});
