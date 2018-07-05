export enum IpcEvents {
  MAIN_WINDOW_READY_TO_SHOW = 'MAIN_WINDOW_READY_TO_SHOW',
  OPEN_SETTINGS = 'OPEN_SETTINGS',
  LOAD_GIST_REQUEST = 'LOAD_GIST_REQUEST',
  RUN_FIDDLE = 'RUN_FIDDLE',
  MONACO_GO_TO_DEFINITION = 'MONACO_GO_TO_DEFINITION',
  MONACO_PEEK_DEFINITION = 'MONACO_PEEK_DEFINITION',
  MONACO_FIND_REFERENCES = 'MONACO_FIND_REFERENCES',
  FS_NEW_FIDDLE = 'FS_NEW_FIDDLE',
  FS_OPEN_FIDDLE = 'FS_OPEN_FIDDLE',
  FS_SAVE_FIDDLE = 'FS_SAVE_FIDDLE',
  FS_SAVE_FIDDLE_AS = 'FS_SAVE_FIDDLE_AS',
  FS_SAVE_FIDDLE_GIST = 'FS_SAVE_FIDDLE_GIST',
  FS_SAVE_FIDDLE_DIALOG = 'FS_SAVE_FIDDLE_DIALOG',
  FS_SAVE_FIDDLE_ERROR = 'FS_SAVE_FIDDLE_ERROR',
}

export const ipcMainEvents = [
  IpcEvents.MAIN_WINDOW_READY_TO_SHOW,
  IpcEvents.FS_SAVE_FIDDLE_DIALOG,
  IpcEvents.FS_SAVE_FIDDLE
];

export const ipcRendererEvents = [
  IpcEvents.OPEN_SETTINGS,
  IpcEvents.LOAD_GIST_REQUEST,
  IpcEvents.RUN_FIDDLE,
  IpcEvents.FS_NEW_FIDDLE,
  IpcEvents.FS_OPEN_FIDDLE,
  IpcEvents.FS_SAVE_FIDDLE,
  IpcEvents.FS_SAVE_FIDDLE_AS,
  IpcEvents.FS_SAVE_FIDDLE_GIST,
];
