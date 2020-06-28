/**
 * Events are actions that are used to invoke sagas but don't get processed in the reducer usually
 */

export default {
  // OLD
  PAGE_LOGS_LOAD: 'EVENT_PAGE_LOGS_LOAD',
  PAGE_SETTINGS_LOAD: 'EVENT_PAGE_SETTINGS_LOAD',
  SETTINGS_POST_LOG_ROTATE: 'EVENT_SETTINGS_POST_LOG_ROTATE',
  CHECK_UPDATES: 'EVENT_CHECK_UPDATES',
  SERVER_VERSION: 'EVENT_SERVER_VERSION',
  WEBUI_UPDATE: 'EVENT_WEBUI_UPDATE',
  OS_BROWSE: 'EVENT_OS_BROWSE',
  SETTINGS_SAVE_QUICK_ACTION: 'EVENT_SETTINGS_SAVE_QUICK_ACTION',
  // ALERTS
  QUEUE_GLOBAL_ALERT: 'EVENT_QUEUE_GLOBAL_ALERT',
  // API POLLING
  START_API_POLLING: 'EVENT_START_API_POLLING',
  STOP_API_POLLING: 'EVENT_STOP_API_POLLING',
  // AUTH
  AUTH_CHANGE_PASSWORD: 'EVENT_AUTH_CHANGE_PASSWORD',
  AUTH_LOGIN: 'EVENT_AUTH_LOGIN',
  AUTH_LOGOUT: 'EVENT_AUTH_LOGOUT',
  AUTH_SKIP_LOGIN: 'EVENT_AUTH_SKIP_LOGIN',
  // FIRSTRUN
  FIRSTRUN_FINISH_SETUP: 'EVENT_FIRSTRUN_FINISH_SETUP',
  FIRSTRUN_INIT_STATUS: 'EVENT_FIRSTRUN_INIT_STATUS',
  FIRSTRUN_GET_USER: 'EVENT_FIRSTRUN_GET_USER',
  FIRSTRUN_SET_USER: 'EVENT_FIRSTRUN_SET_USER',
  FIRSTRUN_START_SERVER: 'EVENT_FIRSTRUN_START_SERVER',
  FIRSTRUN_TEST_ANIDB: 'EVENT_FIRSTRUN_TEST_ANIDB',
  FIRSTRUN_TEST_DATABASE: 'EVENT_FIRSTRUN_TEST_DATABASE',
  // QUICK ACTIONS
  QUICK_ACTION_RUN: 'EVENT_QUICK_ACTION_RUN',
  // MAINPAGE
  MAINPAGE_FILE_AVDUMP: 'EVENT_MAINPAGE_FILE_AVDUMP',
  MAINPAGE_IMPORT_FOLDER_SERIES: 'EVENT_MAINPAGE_IMPORT_FOLDER_SERIES',
  MAINPAGE_LOAD: 'EVENT_MAINPAGE_LOAD',
  MAINPAGE_QUEUE_OPERATION: 'EVENT_MAINPAGE_QUEUE_OPERATION',
  MAINPAGE_QUEUE_STATUS: 'EVENT_MAINPAGE_QUEUE_STATUS',
  MAINPAGE_RECENT_FILE_DETAILS: 'EVENT_MAINPAGE_RECENT_FILE_DETAILS',
  MAINPAGE_RECENT_FILES: 'EVENT_MAINPAGE_RECENT_FILES',
  // IMPORT FOLDER
  IMPORT_FOLDER_ADD: 'EVENT_IMPORT_FOLDER_ADD',
  IMPORT_FOLDER_EDIT: 'EVENT_IMPORT_FOLDER_EDIT',
  IMPORT_FOLDER_DELETE: 'EVENT_IMPORT_FOLDER_DELETE',
  IMPORT_FOLDER_RESCAN: 'EVENT_IMPORT_FOLDER_RESCAN',
  // SETTINGS
  SETTINGS_GET_SERVER: 'EVENT_SETTINGS_GET_SERVER',
  SETTINGS_GET_TRAKT_CODE: 'EVENT_SETTINGS_GET_TRAKT_CODE',
  SETTINGS_PLEX_LOGIN_URL: 'EVENT_SETTINGS_PLEX_LOGIN_URL',
  SETTINGS_SAVE_SERVER: 'EVENT_SETTINGS_SAVE_SERVER',
  SETTINGS_SAVE_WEBUI: 'EVENT_SETTINGS_SAVE_WEBUI',
  SETTINGS_TOGGLE_PINNED_ACTION: 'EVENT_SETTINGS_TOGGLE_PINNED_ACTION',
};
