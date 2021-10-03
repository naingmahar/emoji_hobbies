### Emoji Hobbies V1

Support , Js and Ts .

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install npm i @nmh/emoji-hobbies --save
```

### Js Example!

---

const { searchHobbies } = require("@nmh/emoji-hobbies");

console.warn(searchHobbies('music'))

---

### Ts Example!

---

import { searchHobbies } from '@nmh/emoji_hobbies'

console.warn(searchHobbies('music'))

---

### Example Response

---

        [
            { text: 'Collecting Music Albums', emoji: '💿' },
            { text: 'Compose Music', emoji: '🎼' },
            { text: 'Music', emoji: '🎵' },
            { text: 'Listening to Music', emoji: '🎧' },
            { text: 'Playing musical instruments', emoji: '🎵' },
            { text: 'Writing Music', emoji: '🎵' }
        ]

---
