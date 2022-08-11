import React, { useState } from 'react'

const useDarkMode = () => {
    const [darkmode, setDarkmode] = useState(false)
    return {darkmode, setDarkmode}
}

export default useDarkMode