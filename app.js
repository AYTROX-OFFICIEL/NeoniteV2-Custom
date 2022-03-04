const NeoLog = require('./structs/NeoLog');
const profile_generator = require('./aytrox/Générateur/generator.js');

try {
	var cookieParser = require("cookie-parser");
} catch {
	NeoLog.warn('Missing module(s), running npm i')
	const child_process = require('child_process');
	child_process.execSync('npm i', { stdio: 'inherit' });

	console.log('\n\n')
	try {
		var cookieParser = require("cookie-parser");
	} catch { NeoLog.Error('Module install failed, join our discord for more help: https://dsc.gg/neonite'); }
}

const express = require("express");
const fs = require("fs");
const errors = require("./structs/errors");
const { v4: uuidv4 } = require("uuid");
const { default: axios } = require('axios');
const axiosPackage = require('axios/package.json')
const versionCompare = require('compare-versions');


const { ApiException } = errors;

const version = require('./package.json').version;
const { getRetailShop } = require('./arwent/shop');

global.xmppClients = [];
global.port = 5595;
global.LobbyBotPort = 80;

axios.defaults.headers["user-agent"] = `NeoniteServer/${version} axios/${axiosPackage.version}`;

axios.get('https://raw.githubusercontent.com/NeoniteDev/NeoniteV2/main/package.json', { validateStatus: undefined }).then((response) => {
	if (response.status == 200) {
		var compare = versionCompare(response.data.version, version);

		if (compare > 0) {
			console.log('\n')
			NeoLog.warn(`NEW UPDATE IS AVAILABLE, PLEASE CONSIDER UPDATING TO FIX POTENTIAL BUGS AND SECURITY ISSUES.\nVERSION ${response.data.version} IS NOW AVAILABLE\nCURRENT VERSION IS ${version}`, false)
		}
	}
});

function time() {
(function () {
	"use strict";

	String.prototype.format = function () {
		const args = arguments[0] instanceof Array ? arguments[0] : arguments;
		return this.replace(/{(\d+)}/g, function (match, number) {
			return typeof args[number] != "undefined" ? args[number] : match;
		});
	};

	require('./xmpp')

	const app = express();
	app.use("/", express.static("public"));

	app.use(express.urlencoded({ extended: false }));
	app.use(express.json());
	app.use(cookieParser());
	app.set("etag", false);



	fs.readdirSync(`${__dirname}/managers`).forEach(route => {
		require(`${__dirname}/managers/${route}`)(app, port);
	})

	app.use((req, res, next) => {
		next(new ApiException(errors.com.epicgames.common.not_found));
	})

	app.use((err, req, res, next) => {
		let error = null;

		if (err instanceof ApiException) {
			error = err;
		} else {
			const trackingId = req.headers["x-epic-correlation-id"] || uuidv4();
			error = new ApiException(errors.com.epicgames.common.server_error).with(trackingId);
			console.error(trackingId, err);
		}

		error.apply(res);
	});

	app.listen(port, async () => {
		if (process.argv.includes("--test")) {
			require(`${__dirname}/.github/test/testing.js`)(app);
			process.exit(0)
		};
		profile_generator;
		// getRetailShop by ARWENT
		await getRetailShop().then((res) => {
			if (!res) { console.log("[Arwent] Un problème est survenue lors de l'obtention de la boutique."); }
			else { console.log("[Arwent] La boutique du jour a été sauvegardé avec succès.") }
		});

		NeoLog.Log(`v${version} Est connecté au port: ${port || 5595}!`);
	});

	module.exports = app;
}())};
setTimeout(time, 1000)
