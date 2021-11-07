'use strict';
// https://raw.githubusercontent.com/jolaleye/horizon-theme-vscode/master/themes/horizon.json
const background = '#1C1E26';
const foreground = '#D5D8DA';
const ansiBlue = '#26BBD9';
const ansiBrightBlue = '#3FC4DE';
const ansiBrightCyan = '#6BE4E6';
const ansiBrightGreen = '#3FDAA4';
const ansiBrightMagenta = '#F075B5';
const ansiBrightRed = '#EC6A88';
const ansiBrightYellow = '#FBC3A7';
const ansiCyan = '#59E1E3';
const ansiGreen = '#29D398';
const ansiMagenta = '#EE64AC';
const ansiRed = '#E95678';
const ansiYellow = '#FAB795';
const selectionBackground = '#6C6F934D';
const backgroundCursor = '#D5D8DA';
const foregroundCursor = '#6C6F9380';

const colors = {
  red: ansiRed,
  green: ansiGreen,
  yellow: ansiYellow,
  blue: ansiBlue,
  magenta: ansiMagenta,
  cyan: ansiCyan,
  lightRed: ansiBrightRed,
  lightGreen: ansiBrightGreen,
  lightYellow: ansiBrightYellow,
  lightBlue: ansiBrightBlue,
  lightMagenta: ansiBrightMagenta,
  lightCyan: ansiBrightCyan,
};

module.exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: background,
    foregroundColor: foreground,
    cursorColor: foregroundCursor,
    borderColor: background,
    selectionColor: selectionBackground,
    colors,
    css: `
      .tab_text { color: ${foreground} }
      .tabs_nav {
        background-color: ${background};
        border-bottom: 1px solid ${ansiRed};
      }
    `,
  });
};