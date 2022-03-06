function getCountDown(deadline: Date) {
  const now = new Date().getTime()
  const remainTime = (new Date(deadline).getTime() - now + 1000) / 1000
  const remainSeconds = (`0${Math.floor(remainTime % 60)}`).slice(-2)
  const remainMinutes = (`0${Math.floor((remainTime / 60) % 60)}`).slice(-2)
  const remainHours = (`0${Math.floor((remainTime / 3600) % 24)}`).slice(-2)
  const remainDays = String(Math.floor(remainTime / (3600 * 24)))

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
  }
}

export default getCountDown
