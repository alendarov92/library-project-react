// This component fix the problem with the refresh!

import { useState } from "react"


const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storeData = localStorage.getItem(key)

        return storeData ? JSON.parse(storeData) : defaultValue
    })
    
    const setlocalStorageValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue))

        setValue(newValue)
    }

    return [
        value,
        setlocalStorageValue,
    ]
}

export default useLocalStorage;