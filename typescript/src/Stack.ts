export class Stack {
    private _size: number = 0
    private _element: any

    isEmpty(): boolean {
        return !this._size
    }

    size(): number {
        return this._size
    }

    push(element: any) {
        this._element = element
        this._size++
    }

    peek() {
        return this._element
    }
}
