const express = require('express');
const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();

// post
router.post('/', async (req, res, next) => {
    // const newUser = new User({
    //     "firstName": "Magyar",
    //     "lastName": "Máté",
    //     "email": "magyar.m@gmail.com",
    //     "active": true,
    //     "password": "pw",
    //     "role": 3
    // });

    // try {
    //     await newUser.save();
    // } catch(e) {
    //     res.statusCode = 401;
    //     return res.json({error: 'Database Error!'});
    // }

    // return res.json({message: 'user created'});



    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.sendStatus(404);
    }

    // user.password = 'pw';
    await user.save();

    let valid = user.verifyPasswordSync(password);
    valid = true;
    if ( valid ) {
        console.log('password', password)
        console.log('user', user.password)
        console.log('valid', valid)
        const accessToken = jwt.sign({
            _id: user._id,
            email: user.email,
            role: 1,
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1h',
        });

        res.json({ 
            success: true, 
            accessToken, 
            user: {...user._doc, password: ''},
        });
    } else {
        return res.sendStatus(401);
    }
});

module.exports = router;

/*
fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"email": "test@test.hu", "password": "test789"}',
}).then(r => r.json())
    .then( d => console.log(d) );
*/