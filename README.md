# dosycrypt

Message verified encryption using dosy RNGs

[![https://nodei.co/npm/YOUR-MODULE-NAME.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/dosycrypt.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/dosycrypt)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dosaygo-coder-0/dosycrypt/issues)

```js
  const dc = require('dosycrypt');

  const message = 'THIS IS A CAT'
  const key = 'I AM THE KAT'
  const ciphertext = dc.full_encrypt( message, key );
  const plaintext = dc.full_decrypt( ciphertext, key );

  // Works
  console.log( "Message", message, "key", key, "ciphertext", dc.encode( ciphertext ), "plaintext", plaintext );

  // Errors due to wrong key or data corruption, message verification works
  const error_1 = dc.full_decrypt( ciphertext, key + 'a' );
  const error_2 = dc.full_decrypt( ciphertext + 'a', key );
```

# Design

- Hash function is based on sponge construction ( example, Keccak / SHA-3 uses this )
- Security level is customizable, simple change the rng1 ( cipher ) and rng2 ( hash ) values. Current values are d451 and d453 respectively. 
- Uses the simple and effective DOSY RNGs that pass PractRand
- Symmetric stream cipher with 120-bits of entropy ( hashed to 120 bits ) IV and 256-bits hash in the message format for protection against attacks which seek to obtain information about the internal state ( and therefore the key ) by using messages with similar sequences encrypted with the same key. The IV essentially makes the keystream for each message unique. 
- The main strength of this cipher is believed to be that the mixing function of the RNG is good, and recovery of the internal state from the keystream is impractical. The internal state can be set at any size. 

# Installing

`npm install dosycrypt`

# Using

```js
  const dc = require('dosycrypt');

  const message = 'THIS IS A CAT'
  const key = 'I AM THE KAT'
  const ciphertext = dc.full_encrypt( message, key );
  const plaintext = dc.full_decrypt( ciphertext, key );

  // Works
  console.log( "Message", message, "key", key, "ciphertext", dc.encode( ciphertext ), "plaintext", plaintext );

  // Errors due to wrong key or data corruption, message verification works
  const error_1 = dc.full_decrypt( ciphertext, key + 'a' );
  const error_2 = dc.full_decrypt( ciphertext + 'a', key );
```

# Possible modification to enhanced security

- A possible attack could use the fact that the round function outputs a byte calculated by summing all the bytes of the internal state. Even tho it is unlikely that much information could pass from a 360 bit internal state into an 8 bit output byte, a possible mediation of this could be to copy the 'r' ( reserved ) , and 'c' ( capacity ) sections of the sponge construction, in the RNG round function, in that we output a byte only by summing over the internal state in the 'r' section, and omitting the internal state in the 'c' section, while leaving RNG round function unchanged save for this additional summation. Even tho the entire state is mixed, the only information about the 'c' section would come from how it was mixed into the 'r' section, and not from being directly transmitted through summation. This would appear to make the likelihood of effectiveness of any attack that seeks to recover information about the internal state, much less likely. 

# Use Cases and Limitations

This cipher is designed for short messages ( less than 4K ). The reason is because it is slow ( the round function of the RNG is slow ), and also because the RNGs have only been tested up to 64 Mb of output. While no biases were detected by PractRand, and while it is believed these RNGs would continue to perform excellently into the petabyte scale keystreams, we don't advise using it for long messages since the RNGs have not been tested above 64 Mb and the round function is slow. 
