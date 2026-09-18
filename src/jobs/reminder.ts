import cron from "node-cron";

cron.schedule('* * * * * *', () => {
    console.log("This is cron jobs pratice");
},{
    name:"pratice schedule", //name of schedule
    //noOverlap: true, //prevent overlapping
    //distributed: true, //run multiple instances of application
    //timezone: 'America/Sao_Paulo', // time zone can be added
    //maxExecutions: 10,
    //maxRandomDelay: 30000,
});

//path can be passed to the place where function is passed so, every schedule it calls that path or api

/*
# ┌────────────── second (optional)
# │ ┌──────────── minute
# │ │ ┌────────── hour
# │ │ │ ┌──────── day of month
# │ │ │ │ ┌────── month
# │ │ │ │ │ ┌──── day of week
# │ │ │ │ │ │
# * * * * * *

second	0-59 (optional)
minute	0-59
hour	0-23
day of month  1-31
month	1-12 
day of week	0-7 

//runtime control
task.stop();          // pause
task.start();         // resume
task.destroy();       // remove permanently
task.getStatus();     // 'stopped' | 'idle' | 'running' | 'destroyed'
task.getNextRun();    // next scheduled Date, or null
task.lastRun();       // { date, result } or { date, error }, or null


//events
task.on('execution:finished', (ctx) => console.log('result:', ctx.execution?.result));
task.on('execution:failed', (ctx) => console.error('failed:', ctx.execution?.error));
task.on('execution:overlap', () => console.warn('skipped: previous run still active'));
task.on('execution:skipped', (ctx) => console.log('not elected:', ctx.reason));
task.on('task:failed', () => task.start()); // background task's daemon died unexpectedly (crash, OOM-kill); restart manually



*/

