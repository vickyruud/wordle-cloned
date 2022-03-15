
import { getRandomWord } from './word-utils'
import { render, screen } from './test/test-utils'

describe('Word Utils', () => {
  it('generates random word', () => {
    expect(getRandomWord()).toEqual('random');
  })

})