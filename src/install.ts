import download from '@xingrz/download2';
import { rm } from 'fs/promises';
import { familySync, MUSL } from 'detect-libc';
import { HOME } from './index';

const PACKAGE = 'cskburn';
const VERSION = '1.22.0';

const LIBC = process.platform == 'linux' && familySync() == MUSL ? '-musl' : '';
const NAME = `${PACKAGE}-${VERSION}-${process.platform}_${process.arch}${LIBC}.tar.zst`;

const URL = `https://cdn.iflyos.cn/public/lisa-binary/${PACKAGE}/${NAME}`;

(async () => {

  try {
    await rm(HOME, { recursive: true });
  } catch (e) {
  }

  await download(URL, HOME, {
    extract: true,
  });

})();
