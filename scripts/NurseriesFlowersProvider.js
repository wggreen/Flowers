let nurseriesFlowers = []

export const useNurseriesFlowers = () => nurseriesFlowers.slice()

export const getNurseriesFlowers = () => fetch("http://localhost:8088/nurseriesFlowers")
    .then(res => res.json())
    .then(parsedNurseriesFlowers => nurseriesFlowers = parsedNurseriesFlowers)