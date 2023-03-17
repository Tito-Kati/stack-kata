export class Stack {
    private _size : number = 0

    isEmpty (): boolean {
        return true
    }

    size (): number{
        return this._size
    }

    push (foo: any) {
        this._size = 1
    }
}
