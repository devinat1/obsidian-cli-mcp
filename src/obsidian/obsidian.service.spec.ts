import { ObsidianService } from './obsidian.service';

jest.mock('child_process');

const mockExec = jest.fn();
jest.mock('util', () => ({
  promisify: () => mockExec,
}));

const service = new ObsidianService();

describe('ObsidianService', () => {
  beforeEach(() => mockExec.mockReset());

  it('should prepend "obsidian" to the command', async () => {
    mockExec.mockResolvedValue({ stdout: '', stderr: '' });
    await service.exec('search "meeting notes"');
    expect(mockExec).toHaveBeenCalledWith('obsidian search "meeting notes"');
  });

  it('should return stdout on success', async () => {
    mockExec.mockResolvedValue({ stdout: 'found 3 results', stderr: '' });
    const result = await service.exec('search "test"');
    expect(result).toBe('found 3 results');
  });

  it('should return stderr and exit code on failure', async () => {
    mockExec.mockRejectedValue({ code: 1, stderr: 'command not found' });
    const result = await service.exec('badcommand');
    expect(result).toBe('Error (exit code 1): command not found');
  });
});