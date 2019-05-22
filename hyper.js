const plugins = [
  "hyper-chesterish",
  "hyper-tabs-enhanced",
  "hyperborder",
  "hypercwd"
];

const fontFamily = [
  '"Dank Mono"',
  '"SFMono-Regular"',
  "Consolas",
  '"Liberation Mono"',
  "Menlo",
  "Courier",
  "monospace"
].join(",");

const pluginConfig = {
  hyperBorder: {
    borderColors: ["#01cdfe", "#ff71ce"],
    borderWidth: "0.5em"
  },
  hyperTabs: {
    trafficButtons: true
  }
};

module.exports = {
  config: {
    updateChannel: "stable",
    fontSize: 20,
    fontFamily,
    fontWeight: "normal",
    fontWeightBold: "bold",
    lineHeight: 1,
    letterSpacing: 0,
    cursorColor: "rgba(248,28,229,0.8)",
    cursorAccentColor: "#000",
    cursorShape: "BLOCK",
    cursorBlink: false,
    foregroundColor: "#fff",
    backgroundColor: "#000",
    selectionColor: "rgba(248,28,229,0.3)",
    borderColor: "#333",
    css: "",
    termCSS: "",
    showHamburgerMenu: "",
    showWindowControls: "",
    padding: "12px",
    colors: {
      black: "#000000",
      red: "#C51E14",
      green: "#1DC121",
      yellow: "#C7C329",
      blue: "#0A2FC4",
      magenta: "#C839C5",
      cyan: "#20C5C6",
      white: "#C7C7C7",
      lightBlack: "#686868",
      lightRed: "#FD6F6B",
      lightGreen: "#67F86F",
      lightYellow: "#FFFA72",
      lightBlue: "#6A76FB",
      lightMagenta: "#FD7CFC",
      lightCyan: "#68FDFE",
      lightWhite: "#FFFFFF"
    },
    shell: "",
    shellArgs: ["--login"],
    env: {},
    bell: false,
    copyOnSelect: false,
    defaultSSHApp: true,
    quickEdit: false,
    macOptionSelectionMode: "vertical",
    webGLRenderer: true,

    // PLUGINS
    ...pluginConfig
  },

  plugins,

  localPlugins: [],
  keymaps: {}
};
