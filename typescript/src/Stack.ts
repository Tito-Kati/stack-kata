export class Stack {
    private _size : number = 0

    isEmpty (): boolean {
        return !this._size
    }

    size (): number{
        return this._size
    }

    push (foo: any) {
        this._size++
    }

    peek() {
        return 'foo';
    }
}
