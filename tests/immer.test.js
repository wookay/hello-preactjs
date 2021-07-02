import produce from "immer"

const baseState = [
    {
        todo: "Learn typescript",
        done: true
    },
    {
        todo: "Try immer",
        done: false
    }
]

const nextState = produce(baseState, draftState => {
    draftState.push({ todo: "Tweet about it" })
    draftState[1].done = true
})


describe('immer produce', () => {
	test('expect.arrayContaining', () => {
        expect([
            { todo: 'Learn typescript', done: true },
            { todo: 'Try immer',        done: true },
            { todo: 'Tweet about it' }
        ]).toEqual(expect.arrayContaining(nextState));
	}); // test
}); // describe
