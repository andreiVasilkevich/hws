import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'


function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        let now =   new Date()
        setDate(now)
         let timerId = setTimeout(setTimerId,0);
        console.log(timerId)
        setTimerId(timerId)
         setShow(true)
       // setDate(timerId)
       // const value = setDate(new Date ())

        //console.log(value)
        //setTimerId(value)

        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
       let timerId = setTimeout(setTimerId);
        clearTimeout(timerId)
        console.log(timerId)
        setShow(false)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
      // if(show === true) {
       // date.toLocaleDateString("ru-RU")
       // setShow(true)
       //}
    //   else setShow(false)
         //let dais = `${stringDate}${stringDay}`
        // const date =  stringDate, stringDay
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
      //  if(show === false) {
        //    setShow(false)
        //   }
         //  else setShow(true)
         setShow(false)
    }

    const stringTime = date.toLocaleTimeString("ru-RU")  || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate =  date.toLocaleDateString("ru-RU")  || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    console.log(stringDate)
    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = new Intl.DateTimeFormat("en",{weekday:"long"}).format(date) || <br/> // пишут студенты
    console.log(stringDay)
    const stringMonth = new Intl.DateTimeFormat("en",{month:"long"}).format(date) || <br/> // пишут студенты
    console.log(stringMonth)
    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch} 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>
          

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={show} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!show} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
