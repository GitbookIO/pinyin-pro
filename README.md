### pinyin-pro

[zh-lx](https://github.com/zh-lx) maintains [a fantastic library](https://github.com/zh-lx/pinyin-pro) for converting traditional Chinese characters to pinyin. GitBook uses this library for our users who write in hànzì, to turn their docs into URLs. We've forked pinyin-pro simply to optimize performance slightly. GitBook runs pinyin-pro inside Cloudflare Workers, where start-up time is very important. So we made this fork to make optimizations around when the languages are loaded into memory. We try to keep this up-to-date with upstream.