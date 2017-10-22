"use strict";
{
  const dc = require('./index.js');

  dc.test_all();
  test();
  test2();

  function test() {
    const text = `
      大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了大ufo瘋了
      Hello blah 
      Hello blah 
      HHello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah Hello blah ello blah 
      Hello blah 
      Hello blah 
      Hello blah 
      Hello blah 
      Hello blah 
      Hello blah `;
    const c = dc.full_encrypt( text, 'abc123' );
    const p = dc.full_decrypt( c, 'abc123' );
    console.log( "Pass ? ", p == text );
  }

  function test2() {
    const text = `
      In cryptography, encryption is the process of encoding a message or information in such a way that only authorized parties can access it. Encryption does not itself prevent interference, but denies the intelligible content to a would-be interceptor. In an encryption scheme, the intended information or message, referred to as plaintext, is encrypted using an encryption algorithm – a cipher – generating ciphertext that can only be read if decrypted. For technical reasons, an encryption scheme usually uses a pseudo-random encryption key generated by an algorithm. It is in principle possible to decrypt the message without possessing the key, but, for a well-designed encryption scheme, considerable computational resources and skills are required. An authorized recipient can easily decrypt the message with the key provided by the originator to recipients but not to unauthorized users.
    `;
    const c = dc.full_encrypt( text, 'abc123' );
    const p = dc.full_decrypt( c, 'abc123' );
    console.log( "Pass ? ", p == text );
  }
}
