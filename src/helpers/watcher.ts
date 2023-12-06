import { WatcherEntity } from "../src/Types.gen";

export function createWatcher(watcher_id: string): WatcherEntity {
  const watcherEntity: WatcherEntity = {
    id: watcher_id,
    chainId: 1n,
    streamIndex: 1n,
    actionIndex: 1n,
    initialized: false,
    logs: [],
  };

  return watcherEntity;
}

export function updateWatcher(watcher: WatcherEntity): WatcherEntity {
  return {
    ...watcher,
    streamIndex: watcher.streamIndex + 1n,
    actionIndex: watcher.actionIndex + 1n,
  };
}