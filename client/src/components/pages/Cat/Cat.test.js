import Cat from "./Cat";
import ReactDOM from 'react-dom'
describe ("test cat component",()=>{
  it("test elemnt ",()=>{
    const div = document.createElement("div")
    ReactDOM.render(<Cat/>,div)
    expect(div.innerHTML).toEqual(`<div class="cat"><h1>Cat</h1></div>`)
  })
})

