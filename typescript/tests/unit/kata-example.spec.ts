import {Stack} from '../../src/Stack'

describe('Stack', () => {
    let stack: Stack

    beforeEach(() => {
        stack = new Stack()
    })

    describe('isEmpty', () => {
        it('should be empty when initialized', () => {
            expect(stack.isEmpty()).toBe(true)
        })

        it('should not be empty when pushed on time', () => {
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
    })

    describe('peek', () => {
        it('should return last pushed element', function () {
            stack.push('foo')
            expect(stack.peek()).toBe('foo')
        })

        it('should return last pushed element after multiple pushes', function () {
            stack.push('foo')
            stack.push('faa')
            expect(stack.peek()).toBe('faa')
        })
    })
})
