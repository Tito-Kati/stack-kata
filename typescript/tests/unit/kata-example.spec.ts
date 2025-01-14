import { Stack } from '../../src/Stack'

describe('Stack', () => {
    let stack: Stack

    beforeEach(() => {
        stack = new Stack()
    })

    describe('isEmpty', () => {
        it('should be empty when initialized', () => {
            expect(stack.isEmpty()).toBe(true)
        })

        it('should not be empty when pushed one time', () => {
            stack.push('foo')
            expect(stack.isEmpty()).toBe(false)
        })
    })

    describe('size', () => {
        it('should return zero when initialized', () => {
            expect(stack.size()).toBe(0)
        })

        it('should return one when pushed one time', () => {
            stack.push('foo')
            expect(stack.size()).toBe(1)
        })

        it('should return three when pushed three times', () => {
            stack.push('foo')
            stack.push('faa')
            stack.push('fuu')
            expect(stack.size()).toBe(3)
        })

        it('should return zero when pushed one time and popped one', () => {
            stack.push('foo')
            stack.pop()
            expect(stack.size()).toBe(0)
        })

        it('should return one when pushed two times and popped one', () => {
            stack.push('foo')
            stack.push('faa')
            stack.pop()
            expect(stack.size()).toBe(1)
        })

        it('should return two when pushed three times and popped one', () => {
            stack.push('foo')
            stack.push('faa')
            stack.push('fuu')
            stack.pop()
            expect(stack.size()).toBe(2)
        })
    })

    describe('peek', () => {
        it('should return last pushed element',  () => {
            stack.push('foo')
            expect(stack.peek()).toBe('foo')
        })

        it('should return last pushed element after multiple pushes', () => {
            stack.push('foo')
            stack.push('faa')
            expect(stack.peek()).toBe('faa')
        })

        it('should throw underflow error when the stack is empty', () => {
            expect(() => stack.peek()).toThrowError('the stack is empty')
        })
    })
})
