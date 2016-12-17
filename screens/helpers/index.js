/**
 * Created by ggoma on 12/17/16.
 */
const profile = [
    {
        source: require('../img/bob.png'),
        name: 'Bob the Builder'
    },
    {
        source: require('../img/cookiemonster.jpeg'),
        name: 'Cookie Monster'
    },
    {
        source: require('../img/elmo.jpg'),
        name: 'Elmo'
    }
]

export function randomProfile() {
    var random = Math.floor((Math.random() * profile.length));

    return profile[random];
}