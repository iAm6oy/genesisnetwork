/*

This script was created by rootdeibis

Twitter: rootDeibis

All rights reserved.

*/


class mcApi{constructor(t){this.server=t,fetch("https://api.mcsrvstat.us/2/"+this.server).then(async t=>{this.api=await t.json()})}getServer(){return this.server}getPlayers(){return{online:this.api.players.online,max:this.api.players.max}}getIcon64(){return this.api.icon}getMotd(){return{html:this.api.motd.html,raw:this.api.motd.raw,clean:this.api.motd.clean}}getVersion(){return this.api.version}getProtocol(){return this.api.protocol}getSoftware(){return this.api.software}}