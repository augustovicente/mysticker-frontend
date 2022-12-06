import { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import { TimerContainer } from './styles'

export function Timer({ expiryTimestamp }: { expiryTimestamp: any }) {
    const [newHours, setNewHours] = useState(['0', '0'])
    const [newMinutes, setNewMinutes] = useState(['0', '0'])
    const [newSeconds, setNewSeconds] = useState(['0', '0'])

    const {
        hours,
        minutes,
        seconds,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn('Tempo expirou!')
    })

    useEffect(() => {
        // Hours
        if(hours.toString().length === 1) {
            setNewHours(['0', hours.toString()])
        } else if (hours.toString().length > 1) {
            setNewHours([hours.toString()[0], hours.toString()[1]])
        }

        // Minutes
        if (minutes.toString().length === 1) {
            setNewMinutes(['0', minutes.toString()])
        } else if (minutes.toString().length > 1) {
            setNewMinutes([minutes.toString()[0], minutes.toString()[1]])
        }

        // Seconds
        if (seconds.toString().length === 1) {
            setNewSeconds(['0', seconds.toString()])
        } else if (seconds.toString().length > 1) {
            setNewSeconds([seconds.toString()[0], seconds.toString()[1]])
        }
    }, [expiryTimestamp, hours, minutes, seconds])

    return (
        <TimerContainer>
            <div>
                <span>{newHours[0]}</span>
                <span>{newHours[1]}</span>
            </div>
            :
            <div>
                <span>{newMinutes[0]}</span>
                <span>{newMinutes[1]}</span>
            </div>
            :
            <div>
                <span>{newSeconds[0]}</span>
                <span>{newSeconds[1]}</span>
            </div>
        </TimerContainer>
    )
}
