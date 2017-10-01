"use strict";
{
  const dc = require('./index.js');
  const b64 = require('base-64');
  
  const encode = s => b64.encode(unescape(encodeURIComponent(s)));
  const decode = s => decodeURIComponent(escape(b64.decode(s)));
  let message = 'a';
  const key = 'ABCDEFGHIJKLMN';

  while( message.length < 2000 ) {
    console.log("Message length", message.length );
    message = message += String.fromCharCode(Math.round(Math.random()*9000) + 32);
    const cipher = dc.full_encrypt( encode(message), key );
    const plain = decode(dc.full_decrypt( cipher, key ));
    if ( plain !== message ) {
      throw new TypeError('Fail decrypt');
    }
  }
}
