module.exports = {
    "Speaker": [
        {
            email: "jordan@foo.com",
            password: "foobar",
            name: "Jordan"
        },
        {
            email: "john@doe.com",
            password: "foobar",
            name: "John"
        }
    ],
    "Event": [
        {
            "name": "JS Conf",
            "city": "Washington",
            "state": "DC",
            "country": "USA",
            "month": 6,
            "speakerId": 1
        },
        {
            "name": "AwesomeCon",
            "city": "Amsterdam",
            "state": "",
            "country": "ND",
            "month": 5,
            "speakerId": 2
        }
    ],
    "Tracker": [
        {
            "eventId": 1,
            "speakerId": 1
        },
        {
            "eventId": 2,
            "speakerId": 1
        },
        {
            "eventId": 1,
            "speakerId": 2
        }
    ],
    "Talk": [
        {
            "title": "JS is awesome",
            "speakerId": 1
        },
        {
            "title": "JS is terrible",
            "speakerId": 2
        },
        {
            "title": "I <3 JS",
            "speakerId": 1
        }
    ],
    "Submission": [
        {
            "year": 2014,
            "talkId": 1,
            "eventId": 2,
            "speakerId": 1
        },
        {
            "year": 2015,
            "talkId": 1,
            "eventId": 2,
            "speakerId": 1
        },
        {
            "year": 2015,
            "talkId": 2,
            "eventId": 2,
            "speakerId": 2
        },
        {
            "year": 2015,
            "talkId": 3,
            "eventId": 1,
            "speakerId": 1
        }
    ],
};