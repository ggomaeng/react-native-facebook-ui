/**
 * Created by ggoma on 12/17/16.
 */
const profile = [
    {
        source: require('../img/bob.png'),
        name: 'Bob the Builder'
    }
]

export function randomProfile() {
    var random = Math.floor((Math.random() * profile.length));

    return profile[random];
}