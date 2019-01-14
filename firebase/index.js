import React from 'react';
import * as firebase from 'firebase';

const config = {
    databaseURL: "https://coba-firebase-2db1f.firebaseio.com",
};
firebase.initializeApp(config);

export default firebase;

