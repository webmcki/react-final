const initState = {
  posts: [
    {id: '1', title: '타이틀1', body: '본문1'},
    {id: '2', title: '타이틀2', body: '본문2'},
    {id: '3', title: '타이틀3', body: '본문3'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state
}

export default rootReducer
