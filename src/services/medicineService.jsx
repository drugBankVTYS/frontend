export const getData = async()=>{
    const data = await fetch("link yeri")
    return data.json()
}