
import React from "react"
import { useStateProvider } from "../../context/context"
import { createGlobalStyle } from "styled-components"
import ClickSound from "../../assets/sounds/click.wav"

const ButtonChangeTheme = () => {

    const {state,dispatch} = useStateProvider()

    const play_sound = () => {
        let click_sound = new Audio(ClickSound)
        click_sound.volume = 0.2
        click_sound.play()

    }

    const onClickChangeTheme = () => {
        let change_to = state.theme == "white" ? "black" : "white";
        play_sound()
        dispatch({ /* Update State ใน Store */
            type: "SET_THEME",
            payload: change_to
        })
    }

    return(
        <>
            <button onClick={() => onClickChangeTheme()} className="btn">Change Theme</button>
        </>
    )
}

export default ButtonChangeTheme