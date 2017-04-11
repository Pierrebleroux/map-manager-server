export function sync (event) {
    const name = event.params.path.name
    return `Hello ${name}, you look awesome!`
}

sync.api = {
    path: 'greet/{name}'
}