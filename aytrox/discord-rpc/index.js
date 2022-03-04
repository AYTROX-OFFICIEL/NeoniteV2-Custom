// Made by AYTROX

const RPC = require('discord-rpc');
const consolerpc = require('./consoleoutput.js');
const version = require('../../package.json').version;
const rpc = new RPC.Client({
    transport: "ipc"
});

const activity = {
    details: `Utilise Neonite V${version} Custom`,
    state: "Customized by AYTROX & ARWENT",
    assets: {
        large_image: "neonite",
        small_image: "neonite-n",
        large_text: `Neonite V${version}`,
        small_text: "Neonite V2 Customized by AYTROX & ARWENT",
    },
    buttons: [
        {
        "label": "Neonite",
        "url": "https://www.neonitedev.live"
    },
    {
        "label": "repositorie",
        "url": "https://github.com/AYTROX-OFFICIEL/NeoniteV2-Custom"
    },
    ],
    timestamps: {start: Date.now()},
    instance: true
};
  rpc.on("ready", () => {
    rpc.request("SET_ACTIVITY", {pid: process.pid, activity: activity}),
    consolerpc.log('RPC activé regarde ton profile Discord ;)');
  })

rpc.login({
    clientId: "939556478153555998"
    }
)