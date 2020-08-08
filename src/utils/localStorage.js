const loadState = () => {
  try {
    const saikouData = JSON.parse(localStorage.getItem('saikouData'))
    return saikouData || undefined
  } catch (error) {
    console.error(`Here's what going wrong: ${error}`)
    return undefined
  }
}

const saveState = (state) => {
  try {
    const saikouData = JSON.stringify(state)
    localStorage.setItem('saikouData', saikouData)
  } catch (error) {
    console.error(`Here's what going wrong: ${error}`)
  }
}

export { saveState, loadState }
