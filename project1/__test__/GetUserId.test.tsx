import { getID } from '@/db/db';
import * as SQLite from 'expo-sqlite';

jest.mock('expo-sqlite', () => ({
  openDatabaseAsync: jest.fn(() => ({
    prepareAsync: jest.fn(() => ({
      executeAsync: jest.fn(() => ({
        getAllAsync: jest.fn().mockResolvedValue([{ id: 1 }]),
      })),
      finalizeAsync: jest.fn(),
    })),
  })),
}));

describe('getID function', () => {
  it('should return the correct user ID when username and password match', async () => {
    const userId = await getID('testuser', 'testpassword');
    expect(userId).toBe(1);
  });

});
