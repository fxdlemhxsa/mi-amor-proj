import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCountdownStore = defineStore('countdown', () => {
  
  const DISPLAY = reactive({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  })

  //Fot Calculate Time
  const SECONDSFORMAT = 1000
  const MINUTESFORMAT = SECONDSFORMAT * 60
  const HOURSFORMAT = MINUTESFORMAT * 60
  const DAYSFRORMAT = HOURSFORMAT * 24

  const formatNum = (number: number) : string | number => {
    return number < 10 ? '0' + number : number
  }

  // Check if the user is visiting for the first time using cookies
  function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts:any = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  function setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  const showRemaining = () => {
    const timer = setInterval(() => {
      const NOW = new Date()
      const END = new Date(2024, 11, 16)
      const DISTANCE = END.getTime() - NOW.getTime()

      if(DISTANCE < 0){
        clearInterval(timer)
        DISPLAY.expired = true
        return
      }

      const DAYS = Math.floor((DISTANCE / DAYSFRORMAT))
      const HOURS = Math.floor((DISTANCE % DAYSFRORMAT) / HOURSFORMAT)
      const MINUTES = Math.floor((DISTANCE % HOURSFORMAT) / MINUTESFORMAT)
      const SECONDS = Math.floor((DISTANCE % MINUTESFORMAT) / SECONDSFORMAT)

      //@ts-ignore
      DISPLAY.days = formatNum(DAYS)
      //@ts-ignore
      DISPLAY.hours = formatNum(HOURS)
      //@ts-ignore
      DISPLAY.minutes = formatNum(MINUTES)
      //@ts-ignore
      DISPLAY.seconds = formatNum(SECONDS)

    }, 1000)
  }

  return { DISPLAY, showRemaining, getCookie, setCookie }
})
