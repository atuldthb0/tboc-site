import * as migration_20260208_053837 from './20260208_053837';
import * as migration_20260210_155702 from './20260210_155702';

export const migrations = [
  {
    up: migration_20260208_053837.up,
    down: migration_20260208_053837.down,
    name: '20260208_053837',
  },
  {
    up: migration_20260210_155702.up,
    down: migration_20260210_155702.down,
    name: '20260210_155702'
  },
];
