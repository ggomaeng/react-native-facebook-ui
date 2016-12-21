/**
 * Created by ggoma on 12/17/16.
 */
const profile = [
    {
        source: require('../img/bob.png'),
        name: 'Bob the Builder',
        online: false,
    },
    {
        source: require('../img/cookiemonster.jpeg'),
        name: 'Cookie Monster',
        online: true,
    },
    {
        source: require('../img/elmo.jpg'),
        name: 'Elmo',
        online: false,
    }
]

export function randomProfile() {
    var random = Math.floor((Math.random() * profile.length));

    return profile[random];
}