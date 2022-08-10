import {sum} from "../src/index.js"

it("should add 2 numbers and return the sun", ()=>{
    //Arrage
    const a = 4, b = 5, expected = 9

    //Act
    const actual = sum(a, b)

    //Assert
    expect(actual).toBe(expected)
})