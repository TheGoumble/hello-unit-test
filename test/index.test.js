import { sum, mult } from "../src/index.js"

it("should add 2 numbers and return the sun", () => {
  //Arrage
  const a = 4,
    b = 5,
    expected = 9

  //Act
  const actual = sum(a, b)

  //Assert
  expect(actual).toBe(expected)
})

it("should add a number and null and return a mystery", () => {
  //Arrage
  const a = null,
    b = 5,
    expected = "The input is incorrect!"

  //Act
  const actual = sum(a, b)

  //Assert
  expect(actual).toBe(expected)
})

it("should add a number and string and return a error", () => {
    //Arrage
    const a = "str",
      b = 5,
      expected = 'are allowed'
  
    //Act
    const actual = sum(a, b)
  
    //Assert
    expect(actual).toContain(expected)
  })
  

  //set it up for multipy