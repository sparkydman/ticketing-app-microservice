import { randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

const asyncScrypt = promisify(scrypt);

export default class {
  static async toHash(password: string): Promise<string> {
    const salt = randomBytes(8).toString('hex');
    const buf = (await asyncScrypt(password, salt, 64)) as Buffer;

    return `${buf.toString('hex')}.${salt}`;
  }

  static async comparePassword(
    dbHashedPassword: string,
    receivedPassword: string
  ): Promise<boolean> {
    const [hash, salt] = dbHashedPassword.split('.');
    const buf = (await asyncScrypt(receivedPassword, salt, 64)) as Buffer;
    return hash === buf.toString('hex');
  }
}
