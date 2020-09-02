const delay = (time) => {
  new Promise((resolve) => {
    process.env.NODE_ENV === 'development' && setTimeout(resolve, time)
  })
}

export default delay
