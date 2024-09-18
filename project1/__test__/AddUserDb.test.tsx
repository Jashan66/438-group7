import { addUser } from '@/db/db';
import * as SQLite from 'expo-sqlite';

jest.mock('expo-sqlite', () => ({
  openDatabaseAsync: jest.fn(() => ({
    prepareAsync: jest.fn(() => ({
      executeAsync: jest.fn(() => ({
        changes: 1,
      })),
      finalizeAsync: jest.fn(),
    })),
    getAllAsync: jest.fn().mockResolvedValue([]), 
  })),
}));

describe('addUser function', () => {
  it('should return true when user is added successfully', async () => {
    const result = await addUser('newuser', 'newpassword');
    expect(result).toBe(true);
  });
});
