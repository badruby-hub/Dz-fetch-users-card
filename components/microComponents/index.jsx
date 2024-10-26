export function ComponentsEmail({email}) {
    return <a target="_blank" href={"mailto:" + email}>{email}</a>
}
export function ComponentsMap({city}) {
    return <a target="_blank" href={`https://www.google.com/maps/place/${city}`}>{city}</a>
}
export function ComponentsURL() {
    return 'https://jsonplaceholder.typicode.com/users/'
}
